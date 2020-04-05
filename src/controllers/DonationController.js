const mongoose = require('mongoose');
require('../models/Donation');
const mailer = require('../mailers/mailer');

const Donation = mongoose.model('Donation'); // ze schema

const donation = {
  getAllDonations: (req, res) => {
    console.log(req);
    Donation.find({})
      .sort({ time: -1 })
      .then((results) => res.json(results))
      .catch((err) => console.log(`blad przy pobieraniu wszystkich ${err}`));
  },
  addDonation: async (req, res) => {
    const newDonationContent = {
      responsible: req.body.responsible,
      helper: req.body.helper,
      world: req.body.world,
      congregation: req.body.congregation,
      time: req.body.time,
    };
    try {
      const newDonation = await new Donation(newDonationContent).save(
        (err, donation) => {
          res.send(donation); //?
          console.log(`do dazy zapisano pomyslnie:  ${donation}`);
          // sending email notifications:
          mailer.send(newDonationContent);
        },
      );
    } catch (err) {
      console.log(`przy probie zapisu do bazy pojawila sie blad: ${err}`);
      res.sendStatus(500);
    }
    // sending email notifications:
    //mailer.send();
  },
};

module.exports = donation;

/* wersja z async await:

getAllDonation = async () => {
  try {
    const allDonation = await Donation.find({});
    (results) => res.send(results) // tego nie jestem pewien
    console.log(`pomyslnie pobrano z bazy:  ${allDonation}`);
  } catch (error) {
    console.log(`przy probie pobrania z bazy pojawila sie blad: ${error}`);
  }
};
getAllDonation()

*/
