const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
require('dotenv').config();

const { MAILGUN_API_KEY } = process.env;

const sendEmail = async data => {
  const mg = mailgun.client({
    username: 's.skriabina19@gmail.com',
    key: MAILGUN_API_KEY,
  });

  mg.messages
    .create('sandboxf630bcab1b57429ebde455652c2111da.mailgun.org', {
      from: 'Mailgun Sandbox <s.skriabina19@gmail.com>',
      to: [data.to],
      subject: 'Verify your email',
      text: 'Verify your email',
      html: data.html,
    })
    .then(msg => console.log(msg))
    .catch(err => console.log(err));
};

module.exports = sendEmail;
