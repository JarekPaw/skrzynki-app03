// send-mail.js
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const message = {};
message.from = 'skrzynki-pavlikeni@vt.bg';

exports.message = message;
