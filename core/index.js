/**
 * Sndicate Server
 *
 * The main entry point of the Sndicate application. This
 * file starts the server and passes control to every other
 * part of the application.
 */

// Require app dependencies here
var express = require('express'),
    app     = express(),
    fs      = require('fs'),
    config  = require(__dirname + '/config/sndicate');

// Define middleware

// Start the server
var server = app.listen(config.port, function() {
  console.log('Sndicate running in %s mode at %s:%s', app.get('env'), server.address().address, server.address().port);
});
