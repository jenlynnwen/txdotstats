var sqlite3 = require('sqlite3').verbose();
var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);
var db = new sqlite3.Database('./database/txdotstats.db');

db.run('CREATE TABLE IF NOT EXISTS crash(id TEXT, name TEXT)');
