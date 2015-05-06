﻿/// <reference path="../lib/types.d.ts" />


global.TotalJS = { Controller: {} };

import http = require('http');
import utils = require('../lib/utils');
import cp = require('child_process');
import Default = require('./controllers/default');
var total: TotalJS.Framework = require('../lib/totaljs/');
global.lark = global.lark || {};





export function startServer(options: lark.ICompileOptions) {

    options.projectDir = options.projectDir || '/public/';
    options.port = options.port || 3000;
    total.setRoot(__dirname);
    Default.UserProjectPath = options.projectDir;

    lark.server = {
        options: options
    };

    console.log('server root', __dirname);
    framework.config['directory-views'] = '~' + __dirname + '/views/';
    framework.config['directory-controllers'] = '~' + __dirname + '/controllers/';
    framework.config['default-websocket-encodedecode'] = false;
    framework.config['allow-compile-js'] = false;
    framework.config['allow-compile-html'] = false;
    framework.config['allow-compile-css'] = false;
    total.http('debug', { port: options.port, ip: '0.0.0.0' });
    utils.open(options.manageUrl);
}