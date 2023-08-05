const express = require('express');
const mongoose = require('mongoose');
const key = require('./config/keys');
require('./models/User');
require('./services/passport');



mongoose.connect(key.mongoURI);

const app = express();

require('./routes/authRoutes')(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})