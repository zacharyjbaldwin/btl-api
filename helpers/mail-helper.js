// Use this helper to programmatically send emails.
// Use mail.controller.js to send emails by hitting a route.

const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_API_KEY || require('../keys.json').SENDGRID_API_KEY);

module.exports.sendMail = (to, subject, text) => {
    const message = {
        to: to,
        from: 'noreply@btl-books.com',
        subject: subject,
        text: text
    };

    mail.send(message)
        .catch((error) => {
            throw error;
        });
};