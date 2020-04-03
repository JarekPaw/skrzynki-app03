const sgMail = require('@sendgrid/mail');
const htmlTemplate = require('../views/htmlTemplate');

sgMail.setApiKey(
  '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',
);
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
      to: [
        'jarekpaw@poczta.onet.pl',
        'maciej.lorent@gmail.com',
        'pawelberezecki@gmail.com',
      ],
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
