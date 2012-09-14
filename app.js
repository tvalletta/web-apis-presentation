var express = require('express');
var app = express.createServer();

app.configure(function(){
    app.use(express.bodyParser());
});

app.listen(process.env.VCAP_APP_PORT || 3000);

app.use("/", express.static(__dirname + '/static'));