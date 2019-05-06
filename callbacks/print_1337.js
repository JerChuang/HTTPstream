var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (response) {
  /* Write your code here! */
  response.setEncoding('utf8');
    // reading data and adding to output
    var output = "";
    response.on('data', function (data) {
       data.split("").forEach(function (char){
           switch (char){
             case 'a':
                output += '4';
                break;
             case 'e':
                output += '3';
                break;
             case 'l':
                output += '1';
                break;
             case 'o':
                output += '0';
                break;
             case 's':
                output += '5';
                break;
             case 't':
                output += '7';
                break;
             default:
                output += char
                break;
           }
             
       });
    });

    // at end of data, console log output
    response.on('end', function() {
        console.log(output);
    });

}

getHTML(requestOptions, print1337);
