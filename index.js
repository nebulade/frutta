'use strict';

var five = require('johnny-five');

var board = new five.Board();

board.on('ready', function () {
    console.log('The Board is ready to use.');

    var button = new five.Button({
        pin: 7,
        isPullup: true
    });

    var led = new five.Led(8);

    button.on('down', function(value) {
        led.on();
    });

    button.on('up', function() {
        led.off();
    });
});
