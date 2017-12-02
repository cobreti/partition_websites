import * as express from "express";

console.log(__dirname);

let app = express();

app.use( express.static('../web') );

app.listen(8000);