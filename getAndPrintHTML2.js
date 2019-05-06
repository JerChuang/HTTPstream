function getAndPrintHTML (options) {

    /* Add your code here */
    var https = require('https');   
    // set encoding of received data to UTF-8
    
    https.get(options, function (response){
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

    });
    
}
  
var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
};
  
getAndPrintHTML(requestOptions);