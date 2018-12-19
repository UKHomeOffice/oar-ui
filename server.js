const port = process.env.PORT || 8080;

const express = require('express');
const http = require('http');
const app = express();
const path = require('path');

app.set('port', port);

app.use(express.static(__dirname + "/dist"));

app.get('/*', (req, res) => {
 res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const server = http.createServer(app).listen(app.get('port'), function () {
    console.log('Platform Public Prod server listening on port ' + app.get('port'));
});
