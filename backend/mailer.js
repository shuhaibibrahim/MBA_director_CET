var nodemailer = require('nodemailer');
require('dotenv').config()
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'cetsomapp@cet.ac.in',
    pass: 'CetSom@4519'
  }
});
//console.log(process.env)



// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });
exports.transporter=transporter;