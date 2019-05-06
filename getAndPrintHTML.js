var https = require('https');                               

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

function getAndPrintHTML (response) {
  
    /* Add your code here */
    // set encoding of received data to UTF-8
    response.setEncoding('utf8');
    
    // reading data
    var output = "";

    response.on('data', function (data) {
       output += data;
    });
    

    // at end of data, console log output
    response.on('end', function() {
        console.log(output);
    });
  
};
//invoke http.get with the getAndPritnHTMLChunks function
https.get(requestOptions, getAndPrintHTML);