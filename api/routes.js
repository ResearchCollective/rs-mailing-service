const controllers = require('./controllers')

module.exports = (server) => {
    // greetining//
    server.route('/')
        .get(controllers.about)
    // sending mails from researchcollective.io contact to form to email//
    server.route('/')
        .post(controllers.sendMail)

    // server.route('/'), (req, res) => {
    //     res.status(200).json('This is mailing microservice for researchcollective.io')
    //     next()
    // })
    // sending mails from researchcollective.io contact to form to email//
    // server.post('/', cors(corsOptions), async (req, res) => {
        // const {fullName, email, message} = req.body
        // // email template for now - will be moving to 'templates' later
        // const emailContent = `
        //   <p>${message}<p>
    
        //   <p>
        //     <p>From: <p>
        //     <p>${fullName}</p>
        //     <p>${email}</p>
        //   </p>
        // `
    
        // // Note to self:- Do not push code with SMTP config, put them in enviroment variable//
        // let transporter = nodemailer.createTransport({
        //     host: 'smtp-pulse.com',//transporter host name
        //     port: 465,//transporter port
        //     secure: true, //true for port 465, false for other ports
        //     auth: {
        //         user: process.env.SENDPULSE_ACCOUNT_EMAIL, // sendpulse account email
        //         pass: process.env.SENDPULSE_ACCOUNT_PASSWORD, // sendpulse account password
        //       },
        //     //this is just for testing on localhost //
        //       tls: {
        //         rejectUnAuthorized: false
        //       }
        // })
        // // send mail with transporter//
        // let mail = await transporter.sendMail({
        //     from: `"Research Collective Contact" <${process.env.TRANSPORTER_EMAIL}>`,
        //     to: process.env.TO_EMAIL, // can put multiple accounts//
        //     subject: 'Research Colletive Contact Request',
        //     // TODO: setting up some email template (maybe)
        //     text: emailContent, //plain text body//
        //     html: emailContent//object from user's message
        // })
        // // Message sent//
        // console.log("Message sent: %s", mail.messageId);
        // // res.json("Message sent: %s", mail.messageId);
        // // Preview only available when sending through an Ethereal account
        // // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(mail));
        // return res.status(200).json('Email sent succesfully')
    // })
}