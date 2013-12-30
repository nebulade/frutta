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

    var input = new five.Sensor({ pin: 'A0', freq: 250 });
    input.on("data", function() {
        var voltage = this.value * 0.004882814;
        var celsius = (voltage - 0.5) * 100;
        var fahrenheit = celsius * (9 / 5) + 32;

        console.log(celsius + "°C", fahrenheit + "°F");
    });

    this.repl.inject({
        led: led,
        button: button,
        input: input
    });
});
