const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(_dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(_dirname, 'build')));

app.get('/*', function(req, res) {
    res.sendFile(path.join(_dirname, 'build', 'index.html'));
});