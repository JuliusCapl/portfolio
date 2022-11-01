const nodemailer = require("nodemailer");
require('dotenv').config({path:'./.env'})


module.exports.sendEmail = function sendEmail(email, message){
  return new Promise((resolve, reject) => {
    let emailAddress = process.env.EMAIL
    let password = process.env.PASSWORD
    let myEmailAddress = process.env.MYEMAIL

    let transporter = nodemailer.createTransport({
      service: "gmail.com",
      auth: {
        user: emailAddress,
        pass: password,
      },
      tls: { rejectUnauthorized: false },
    });

    let mailOptions = {
      from: email,
      replyTo: email,
      to: myEmailAddress,
      subject: `"${email}" sent you a message`,
      html: message,
    };

    transporter.sendMail(mailOptions, (error, data) => {
      if (error) {
        console.log(error);
        reject("Your message couldn't be sent");
      } else {
        resolve("Your message was sent successfully");
      }
    });
  });
};
