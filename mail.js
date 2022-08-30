
require('dotenv').config();
const nodemailer = require('nodemailer');
let transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD
    }
 });
const mailOptions = {
    from: 'nitheeshkarthi2000@gmail.com', // sender address
    to: 'nitheesh.m@nestgroup.net', // Receiver address
    subject: 'Send by nodemailer', // Subject
    text: 'Hi this is Nitheesh', // Message to be sent
};
transport.sendMail(mailOptions, function(err, info) {
     if (err) {
      console.log(err)
} else {
    console.log(info);
   }
});

