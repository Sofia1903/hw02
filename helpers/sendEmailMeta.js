const nodemailer = require('nodemailer');
require('dotenv').config();

const { META_PASSWORD } = process.env;

const sendEmailMeta = async () => {
  const nodemailerConfig = {
    host: 'smtp.meta.ua',
    port: 465,
    secure: true,
    auth: {
      user: 's.skriabina19@gmail.com',
      pass: META_PASSWORD,
    },
  };
  const transport = nodemailer.createTransport(nodemailerConfig);
  const email = {
    to: 's.skriabina19@gmail.com',
    from: 's.skriabina19@gmail.com',
    subject: 'Test email',
    html: 'test email form localhost:3000',
  };
  await transport.sendMail(email);
};
module.exports = sendEmailMeta;
