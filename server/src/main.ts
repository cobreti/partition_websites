import * as express from "express";
// import https = require('https');
import * as https from "https";
import * as fs from "fs";

console.log(__dirname);

let options = {
    key: fs.readFileSync('./certificates/localhost/localhost.key'),
    cert: fs.readFileSync('./certificates/localhost/localhost.cert'),
    requestCert: false,
    rejectUnauthorized: false
};

let app = express();
let port = 8001;
let server = https.createServer(options, app);

app.use( express.static('../web') );

app.listen(8000);
server.listen(port, function() {

});
