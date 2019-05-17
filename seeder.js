const faker = require('faker');
const moment = require('moment');
const db = require('./db/index.js');

const seedingMyListings = () => {
  for (let i = 1; i <= 100; i += 1) {
    db.query(`INSERT INTO Listing(id) VALUE(${i})`, (err, data) => {
      if (err) {
        console.log('ERROR GETTING DATA INSERTED', err);
      } else {
        console.log('SUCCESSFUL ENTRY', data);
      }
    });
  }
};
seedingMyListings();

const seedingMyMessages = () => {
  for (let i = 1; i <= 500; i += 1) {
    const message = faker.lorem.sentences();
    const listing = faker.random.number({ min: 1, max: 100 });
    const username = faker.internet.userName();
    const userId = faker.random.number(800);
    const profilePic = faker.internet.avatar();
    const date = faker.date.between('2015-01-01', '2019-04-30');
    const accuracy = faker.finance.amount(0, 5, 2);
    const communication = faker.finance.amount(0, 5, 2);
    const cleanliness = faker.finance.amount(0, 5, 2);
    const checkIn = faker.finance.amount(0, 5, 2);
    const value = faker.finance.amount(0, 5, 2);
    const location = faker.finance.amount(0, 5, 2);


    const realDate = moment(date).format('YYYY-MM-DD');
    db.query(`INSERT INTO Messages(message, user_id, username, profile_picture, listing, date, accuracy, communication, cleanliness, check_in, value, location) VALUES('${message}', ${userId}, '${username}', '${profilePic}', ${listing}, '${realDate}', ${accuracy}, ${communication}, ${cleanliness}, ${checkIn}, ${value}, ${location});`, (err, data) => {
      if (err) {
        console.log('ERROR GETTING DATA INSERTED', err);
      } else {
        console.log('SUCCESSFUL ENTRY', data);
      }
    });
  }
};
seedingMyMessages();
db.end();
