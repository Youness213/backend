var nodemailer = require('nodemailer');
const express = require('express');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const mailRoute = express.Router();

mailRoute.route('/send').post((req, res, next) => {
    const oauth2Client = new OAuth2(
        '81472868109-d08nea5o2ksqf1iflnkramfr60pm2npn.apps.googleusercontent.com',
        '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', 
    );

    // set up OAuth2 client to get access token
    oauth2Client.setCredentials({
        refresh_token: 'YOUR_REFRESH_TOKEN'
    });

    // get an access token from OAuth2 client
    oauth2Client.getAccessToken((err, accessToken) => {
        if (err) {
            console.log('Error getting access token:', err);
        } else {
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    type: 'OAuth2',
                    user: 'tasksquad13000@gmail.com',
                    accessToken: accessToken,
                    clientId: '81472868109-d08nea5o2ksqf1iflnkramfr60pm2npn.apps.googleusercontent.com',
                    clientSecret: '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',
                    refreshToken: 'YOUR_REFRESH_TOKEN'
                  }
            });
            var mailOptions = {
                from: 'tasksquad13000@gmail.com',
                to: req.body.email,
                subject: req.body.subject,
                text: req.body.text
            };
            transporter.sendMail(mailOptions, function (error, info) {

                if (error) {
                    next(error);
                } else {
                    res.send('Email sent: ' + info.response);
                }
            });
        }
    })
})
module.exports = mailRoute;