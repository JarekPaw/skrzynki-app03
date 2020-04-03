// const bodyParser = require('body-parser');
const routes = require('./src/routes');
const express = require('express');
const cors = require('cors');
require('dotenv').config(); // it works also with config({ path: '.env' })

//conection to the mongo DB
require('./src/database/mongoose');

const Donation = require('./src/models/Donation');

const port = process.env.PORT || 5100;
const app = express();
// middlewear:
app.use(cors());
app.use(express.json());

// Server up static assets
if (process.env.PORT === `production`) {
  app.use(express.static(`client/build`));
}

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
// here i can connect succesfully to mongoDB skrzynki

/* wersja działająca, bez routes:

require('dotenv').config(); // działa też z config({ path: '.env' })
const express = require('express');
const mongoose = require('mongoose');
// const routes = require('./src/routes');
const Donation = require('./src/models/Donation');

mongoose
  .connect(process.env.NODE_DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('DB Connected!'))
  .catch(err => {
    console.log(`DB Connection Error: ${err.message}`);
  });
// here i can connect succesfully to mongoDB skrzynki

// adding a donation to database:
const createDonation = async data => {
  try {
    const donation = new Donation(data);
    await donation.save();
    console.log(`do dazy zapisano pomyslnie:  ${donation}`);
  } catch (error) {
    console.log(`przy probie zapisu do bazy pojawila sie blad: ${error}`);
  }
};

createDonation({
  responsible: 'ewa Ams',
  helper: 'Piotr',
  world: '33',
  congregation: '27',
  time: '2020.3/21 godz. 19:50',
  serialNo: 1,
});
*/

/* 
// downloading all donations from database:
const getAllDonation = async () => {
  try {
    const allDonation = await Donation.find({});
    console.log(`pomyslnie pobrano z bazy:  ${allDonation}`);
  } catch (error) {
    console.log(`przy probie pobrania z bazy pojawila sie blad: ${error}`);
  }
};
getAllDonation()
---------------------------------------------------------------------------------------
// downloading all donations from database:
const getAllDonation = async () => {
  try {
    const allDonation = await Donation.find({});
    console.log(`pomyslnie pobrano z bazy:  ${allDonation}`);
  } catch (error) {
    console.log(`przy probie pobrania z bazy pojawila sie blad: ${error}`);
  }
};
// getAllDonation();

/* createDonation({
  responsible: 'Julia',
  helper: 'Luk',
  world: '0',
  congregation: '0',
  time: '2020.3.21 godz. 20:01',
  serialNo: 4,
}); */
