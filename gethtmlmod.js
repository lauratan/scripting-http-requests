var https = require('https');  

function getAndPrintHTML (options) {

    /* Add your code here */
    https.get(requestOptions, function (response) {
        response.setEncoding('utf8');

        var result = "";

        response.on('data', function (data) {
            result += data;
        });

        response.on('end', function() {
            console.log(result);
        });
    });
}
  
var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
};
  
    

getAndPrintHTML();