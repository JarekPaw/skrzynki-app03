const sgMail = require('@sendgrid/mail');
require('dotenv').config();
const htmlTemplate = require('../views/htmlTemplate');

const sgApiKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sgApiKey);
exports.send = async ({ responsible, helper, time, world, congregation }) => {
  try {
    const massageContent = `Datki z dnia: ${time}. <br>Ogolnoswiatowa dzialalnosc: ${world}; <br>Zbor: ${congregation} <br>Wybieral:${responsible}`;

    const toSend = htmlTemplate.htmlTemplateFn(
      responsible,
      helper,
      time,
      world,
      congregation,
    );
    const msg = {
      to: ['jarekpaw@poczta.onet.pl'],
      from: 'skrzynki-pavlikeni@vt.bg',
      subject: `Potwierdzenie datków z dnia ${time}`,
      text: massageContent,
      html: toSend,
    };
    await sgMail.send(msg);
    console.log('Email sent!');
  } catch (error) {
    console.error(`Email sending error: ${error}`);
    if (error.response) {
      console.error(error.response.body);
    }
  }
};

/* 

to:
'maciej.lorent@gmail.com',
        'pawelberezecki@gmail.com',
*/
