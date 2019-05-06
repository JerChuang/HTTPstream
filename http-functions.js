module.exports = function getHTML (options, callback) {
    /* Add your code here */
    var https = require('https');   
    https.get(options, callback);
  };



