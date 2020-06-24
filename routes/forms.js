const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});


router.post('/Services', (req, res) => {
    let {
        name,
        email,
        tools,
        description
    } = req.body;

    const mailOptions = {

        from: "Developer(Messenger) <developer@example.com>",
        to: process.env.RECEPIENT_EMAIL,
        subject: "Messenger Services",
        text: `Name: ${name} \n Email: ${email} \n tools: ${tools} \n description: ${description}`

    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    res.send('<h1>Thank you for your time, you can close the window now.</h1>')
});

router.post('/ContactUs', (req, res) => {
    let {
        fname,
        lname,
        subject,
        message,
    } = req.body;
    console.log(process.env.USER_EMAIL);
    const mailOptions = {
        from: "Developer(Messenger) <developer@example.com>",
        to: process.env.RECEPIENT_EMAIL,
        subject: `Messenger(Developer) - Contact Us - ${subject}`,
        text: `Name: ${fname} ${lname} \n Message: ${message}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    res.send('<h1>Thank you for your time, you can close the window now.</h1>')
});

module.exports = router;