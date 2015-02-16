/**
 * Startup tests
 *
 * Ensure the app starts up as expected
 */

var assert    = require('assert'),
    request   = require('supertest'),
    app       = supertest('localhost:3001');
