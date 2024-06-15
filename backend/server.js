const express = require('express');
require('dotenv').config();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/goals', require('./routes/routes_goals'));

app.listen(port, () => console.log(`Listening on port ${port}`));
