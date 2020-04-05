const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('MongoDB connectet via mongoose...'))
  .catch((err) => console.log(`Error from mongoose.connect(): ${err}`));

const connection = mongoose.connection;
connection.once('open', () => {
  // once the connection is opend do...
  console.log('MongoDB database connection established successfully'); // we cen put and read to/from database using models (schema)!
});

module.exports = mongoose;
