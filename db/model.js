const db = require('./index.js');

const getMessages = (listing, cb) => {
  console.log(listing);
  db.query(`SELECT * from Messages WHERE listing = ${listing}`, (err, data) => {
    if (err) {
      console.log('this is an ERROR from the QUERY!!!!!', err);
    } else {
      cb(null, data);
    }
  });
};


module.exports = {
  getMessages,
};
