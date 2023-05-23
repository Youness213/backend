var nodemailer = require('nodemailer');
const express = require('express');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const mailRoute = express.Router();

mailRoute.route('/send').post((req, res, next) => {
    const oauth2Client = new OAuth2(
        '81472868109-j5137qvad1q3bibn1es10qjbfshetqdb.apps.googleusercontent.com',
        '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', 
    );

    // set up OAuth2 client to get access token
    oauth2Client.setCredentials({
        refresh_token: '1//03dBBpaoQGejFCgYIARAAGAMSNwF-L9Ir7kDlyLldhPNBIKuokkP19wGkb9pFXUy2kPoIi0ozOrDVGuomXUw6bY-uzUXQUYHO8vI'
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
                    clientId: '81472868109-j5137qvad1q3bibn1es10qjbfshetqdb.apps.googleusercontent.com',
                    clientSecret: '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',
                    refreshToken: '4/0AbUR2VNmmPwRYm5kR_s-hYKIpfuE3maouxzv-rc4kWG8SjKTZ66o103H1KBWaCK9eUdzJA'
                  }
            });
            var mailOptions = {
                from: '"TaskSquad" <tasksquad13000@gmail.com>',
                to: req.body.email,
                subject: req.body.subject,
                text: req.body.text,
                html: req.body.html
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