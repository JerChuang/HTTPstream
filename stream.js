//   Include https library  and use GET  to retrieve URL.
//   
//   This function should console.log each chunk of data as it is received,
//   concatenated with a newline character ('\n') so you can visualize each chunk.
//   Invoke (call) the function

var https = require('https');                               

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

function getAndPrintHTMLChunks (response) {
  
    /* Add your code here */
    // set encoding of received data to UTF-8
    response.setEncoding('utf8');
    
    // reading data
    var output = "";

    response.on('data', function (data) {
       output = output + data +'\n';
    });
    

    // at end of data, console log output
    response.on('end', function() {
        console.log(output);
    });
  
};
//invoke http.get with the getAndPritnHTMLChunks function
https.get(requestOptions, getAndPrintHTMLChunks);