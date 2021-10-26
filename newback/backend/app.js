const express = require('express')
const cors= require('cors')
const app = express()
const port = 8080
const mailer=require('./mailer')
require('dotenv').config()

app.use(cors())
app.get('/mailer', (req, res) => {

    var mailOptions = {
        from: 'cetsomapp@cet.ac.in',
        to: req.query.email,
        subject: 'CET School of Management',
        text: 'Thank you for applying for the post of Director,CET School of Management.'
    };

    mailer.transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.status(500).send("Error")
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send("Ok")
        }
    }); 
})

console.log(process.env.MAIL_EMAIL)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})