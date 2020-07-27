const controllers = require('./controllers')

module.exports = (server) => {
    // greetining//
    server.route('/')
        .get(controllers.about)
    // sending mails from researchcollective.io contact to form to email//
    server.route('/')
        .post(controllers.sendMail)
}