var five = require("johnny-five");

five.Board().on("ready", function() {
  // This requires OneWire support using the ConfigurableFirmata
  var temperature = new five.Temperature({
    controller: "DS18B20",
    pin: 5
  });

  var led = new five.Led(2);
  // led.blink();

  temperature.on("data", function() {
    console.log(Date.now() + ": " + this.celsius + "°C", this.fahrenheit + "°F");
    //console.log("0x" + this.address.toString(16));
    console.log(JSON.stringify(this.celsius));
    if(+this.celsius >= 29) {
      console.log(this.celsius);
      led.on();
      console.log("IT'S ON!");
    }
    else {
      led.off();
      console.log("OFFF");
    }
  });
});

// @markdown
// - [DS18B20 - Temperature Sensor](http://www.maximintegrated.com/en/products/analog/sensors-and-sensor-interface/DS18S20.html)
// @markdown
