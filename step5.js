var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML (response) {
    response.setEncoding('utf8');
    // reading data and adding to output
    var output = "";
    response.on('data', function (data) {
       output += data;
    });

    // at end of data, console log output
    response.on('end', function() {
        console.log(output);
    });
  }

getHTML(requestOptions, printHTML);