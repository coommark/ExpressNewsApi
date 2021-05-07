const nodemailer = require("nodemailer");
const Email = require("email-templates");

let transporter = nodemailer.createTransport({
    host: process.env.GMAIL_HOST,
    port: process.env.GMAIL_PORT,
    secure: process.env.GMAIL_USESSL,
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD, 
    },
  });

const email = new Email({
      views: { root: "email_templates",
      options: { extension: "ejs"},
    },
    message: {
      from: process.env.FROM
    },
    send: true,
    transport: transporter
});

module.exports = {    
  email,
};