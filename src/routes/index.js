const router = require('express').Router();
const { donation } = require('../controllers');
let Donation = require('../models/Donation');

router.get('/donations', donation.getAllDonations);

router.post('/donation', donation.addDonation);

module.exports = router;

/* 
to są end pointy (get- zapytanie, post-wysyłanie, put, patch-update)

Poniżej jak by wyglądało bez controllers:
to działa dobrze:

router.route('/').get((req, res) => {
  console.log(`this is from index.js router.route - req: ${req}`);
  Donation.find({})
    .then(results => res.json(results))
    .catch(err => res.status(400).json('Error: ' + err));
});

*/
