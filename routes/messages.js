// messages.js
const fs = require('fs');

function getMessages(callback) {
  fs.readFile('messages.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      callback('Internal Server Error', null);
      return;
    }
    const messages = JSON.parse(data);
    callback(null, messages);
  });
}

module.exports = {
  getMessages
};
