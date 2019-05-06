var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (response) {
  /* Write your code here! */
  response.setEncoding('utf8');
    // reading data and adding to output
    var output = "";
    response.on('data', function (data) {
       output += data.toLowerCase();
    });

    // at end of data, console log output
    response.on('end', function() {
        console.log(output);
    });

}

getHTML(requestOptions, printLowerCase);
