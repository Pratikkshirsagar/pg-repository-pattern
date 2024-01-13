const app = require('./src/app');
const pool = require('./src/pool');

require('dotenv').config();

pool
  .connect({
    host: `${process.env.host}`,
    port: process.env.port,
    database: `${process.env.database}`,
    user: `${process.env.user}`,
    password: `${process.env.password}`,
  })
  .then((result) => {
    app().listen(3005, () => {
      console.log('Listening on port 3005');
    });
  })
  .catch((err) => {
    console.error(err);
  });
