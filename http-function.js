module.exports = function getHTML (options, callback) {
    /* Your code here */
    var https = require('https'); 

    https.get(options, function (response) {
        response.setEncoding('utf8');
        var result = "";
        response.on('data', function (data) {
            result += data;
        });
        response.on('end', function() {
            callback(result);
        });
    });
}



  