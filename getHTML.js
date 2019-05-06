function getHTML (options, callback) {
    /* Add your code here */
    var https = require('https');   
    https.get(options, callback);
  }
  
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
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };

  
  getHTML(requestOptions, printHTML);