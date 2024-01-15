require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const connection = require('./mongoDB');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const Featureds = require('./models/Featured');
const Products = require('./models/Products');

connection();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

app.get('/api/featureds', (req, res) => {
  Featureds.find().then((data, error) => {
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(500).send(error);
    }
  });
});

app.get('/api/products', (req, res) => {
  Products.find().then((data, error) => {
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(500).send(error);
    }
  });
});

app.get('/api/cookie', function (req, res) {
  // res.clearCookie('user');
  // res.send('Cookie deleted');

  // jwt.verify(token, secret, function(err) {
  //   if (err) {}
  // });
}); 

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}...`));