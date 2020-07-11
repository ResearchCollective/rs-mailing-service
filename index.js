const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = process.env.PORT || 8080
require('dotenv').config()

// initialing app//
const app = express()
// setting up for cors//
const corsOptions = {
  // version with option is not deployed yet due to testing//
   // with this option passed, only request from this domain can invoke the function//
  origin: 'https://www.researchcollective.io/'
}

// parse various data//
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// greetining//
app.get('/', (req, res, next) => {
    res.json('This is mailing microservice for researchcollective.io')
    next()
})

app.post('/', cors(corsOptions), async (req, res) => {
    const {fullName, email, message} = req.body
    // email template for now - will be moving to 'templates' later
    const emailContent = `
      <p>${message}<p>

      <p>
        <p>From: <p>
        <p>${fullName}</p>
        <p>${email}</p>
      </p>
    `

    // Note to self:- Do not push code with SMTP config, put them in enviroment variable//
    let transporter = nodemailer.createTransport({
        host: 'smtp-pulse.com',//transporter host name
        port: 465,//transporter port
        secure: true, //true for port 465, false for other ports
        auth: {
            user: process.env.SENDPULSE_ACCOUNT_EMAIL, // sendpulse account email
            pass: process.env.SENDPULSE_ACCOUNT_PASSWORD, // sendpulse account password
          },
        //this is just for testing on localhost //
          tls: {
            rejectUnAuthorized: false
          }
    })
    // send mail with transporter//
    let mail = await transporter.sendMail({
        from: `"Research Collective Contact" <${process.env.TRANSPORTER_EMAIL}>`,
        to: process.env.TO_EMAIL, // can put multiple accounts//
        subject: 'Research Colletive Contact Request',
        // TODO: setting up some email template (maybe)
        text: emailContent, //plain text body//
        html: emailContent//object from user's message
    })
    // Message sent//
    console.log("Message sent: %s", mail.messageId);
    // res.json("Message sent: %s", mail.messageId);
    // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(mail));
    return res.status(200).json('Email sent succesfully')
})

//setting up the port//
app.listen(PORT, () => {
    console.log('Mailing microservice is now active')
})
