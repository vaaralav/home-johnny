# home-johnny
Demokasailua kotiautomaatiota varten Raspberry Pi B+:lla ja Arduino Mega 2560:lla. Tavoitteena responsiivinen verkkosivu, jolla "lämmitystä" voidaan hallita verkon yli.

## Laitteisto
- Raspberry Pi B+
- Arduino Mega 2560
- Lämpöanturi DS18B20
- LED + etuvastus

## Softa
### [Node.js] (https://nodejs.org/) - Raspberry Pi
- [johnny-five] (https://github.com/rwaldron/johnny-five)

### [ConfigurableFirmata] (https://github.com/firmata/ConfigurableFirmata) - Arduino Mega 2560

## Asennus
Siirrä ConfigurableFirmata Arduinolle:
ArduinoIDE -> Tiedosto -> Esimerkit -> ConfigurableFirmata -> ConfigurableFirmata -> Lähetä

```
git clone https://github.com/vaaralav/home-johnny.git && cd home-johnny
npm install
```


