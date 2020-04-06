// const bodyParser = require('body-parser'); now we do not need body-parser
const routes = require('./src/routes/index'); //(1)routes to routes/index
const express = require('express');
const cors = require('cors');
require('dotenv').config(); // it works also with config({ path: '.env' })
const path = require('path');

//conection to the mongo DB
require('./src/database/mongoose');

const Donation = require('./src/models/Donation');

const PORT = process.env.PORT || 5100;
const app = express();
// middlewear:
app.use(cors());
app.use(express.json());

app.use('/donations', routes);

// Server up static assets
if (process.env.NODE_ENV === `production`) {
  app.use(express.static(`client/build`));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')); // relative path
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
// here i can connect succesfully to mongoDB skrzynki
/*
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
  });
*/
