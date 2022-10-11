//PERSISTENCE OF VISION PROJECT
//AUTHOR: JES�S VICENTE PINPANPLOT@GMAIL.COM 2017
//Persistence of Vision Project by Jesús Vicente is licensed under a Creative Commons Reconocimiento 4.0 Internacional License.
/////////////////////////
//CONNECTIONS:
//////////////////////////
//HALL SENSOR IN D2 (RESISTOR 10K BETWEEN HALL SIGNAL AND HALL POSITIVE)
//ARDUINO NANO AND UNO: APA102 (or similar) 'DATA' TO MOSI (D11) AND 'CLOCK' TO SCK (D13)
//ARDUINO MEGA: APA102 (obr similar) 'DATA' TO MOSI (D51) AND 'CLOCK' TO SCK (D52)
//NOT CONNECT APA102 REVERSED!!! (POSIBLE DAMAGE)
//GND ARDUINO AND GND APA102 MUST BE CONNECTED
//POWER SUPPLY OF APA102 IS EXTERNAL FROM ARDUINO
//////////////////////////
//////////////////////////
const uint8_t chipled[] PROGMEM = {0};
const uint8_t numstrip[] PROGMEM = {1};
const uint8_t numradios[] PROGMEM = {1};
const uint8_t radio1directo[] PROGMEM = {1};
const uint8_t radio2directo[] PROGMEM = {1};
const uint8_t radio2180[] PROGMEM = {0};
const uint8_t offset1[] PROGMEM = {0};
const uint8_t offset2[] PROGMEM = {0};
const uint8_t brillo[] PROGMEM = {5};
const uint8_t animate[] PROGMEM = {0};
const uint8_t num_leds[] PROGMEM = {20};
const uint16_t numpasos[] PROGMEM = {162};
const uint16_t angreducido[] PROGMEM = {215};
const uint16_t sizePolarRedu[] PROGMEM = {810};
const uint8_t PolarRedu[810] PROGMEM = {0,1,1,0,2,1,0,3,2,0,4,2,0,5,2,0,6,2,0,7,2,0,8,2,0,9,2,0,10,2,0,11,2,0,12,2,0,13,2,0,14,2,0,15,2,0,16,2,0,17,2,0,18,2,0,19,0,0,20,1,3,3,0,5,19,2,6,19,0,11,3,2,13,3,1,16,4,0,22,4,1,24,5,0,27,5,1,30,6,0,31,6,5,31,7,0,33,6,1,34,7,1,34,8,0,36,8,1,36,9,0,37,9,1,37,10,0,38,10,2,38,11,0,39,10,1,39,12,0,40,11,1,40,12,5,40,13,0,40,14,0,41,12,1,41,13,1,41,15,0,41,16,0,42,14,1,42,15,1,42,16,2,42,17,0,42,18,0,43,16,1,43,17,1,43,18,1,44,19,1,50,18,6,52,19,6,53,19,1,54,1,6,54,17,6,56,17,1,57,18,1,58,13,6,59,10,6,60,14,6,61,14,1,63,2,6,63,12,6,66,9,6,67,9,1,67,10,1,68,9,6,68,13,1,69,10,6,69,15,6,69,16,6,71,11,6,72,14,6,72,16,1,74,9,1,74,13,6,75,15,1,76,15,6,78,14,1,78,15,1,79,14,6,81,7,6,81,9,6,81,14,1,83,2,1,83,8,6,84,7,1,86,14,6,86,15,6,86,16,6,87,7,6,87,8,1,88,8,6,88,15,1,88,16,1,89,6,6,89,15,6,89,16,6,92,16,1,93,15,1,94,6,1,94,8,1,94,15,6,94,16,6,95,7,1,96,8,6,96,14,1,96,15,1,96,16,1,98,7,6,100,8,1,101,9,1,101,14,6,102,2,6,103,7,1,104,15,6,105,15,1,106,14,1,106,15,6,107,13,1,107,14,6,109,16,6,110,9,6,110,11,1,110,14,1,110,15,1,111,15,6,112,16,1,113,10,1,113,13,6,113,15,1,117,9,1,118,12,1,120,14,6,122,14,1,123,2,1,123,13,1,123,17,6,124,18,6,126,14,6,126,17,1,127,14,1,128,18,1,132,1,1,138,17,7,138,18,4,138,19,0,139,15,4,139,16,4,139,17,4,139,19,4,140,13,4,140,14,0,141,12,4,141,14,4,142,11,4,143,10,4,144,9,4,146,8,4,147,7,7,148,2,6,148,7,4,149,7,0,150,7,4,151,6,0,153,6,4,155,5,4,157,2,1,159,4,7,161,4,4,170,3,7,173,3,4,175,3,0,178,3,4,205,20,6,206,20,3,207,20,1,208,2,7,210,2,1,213,20,4,214,20,1,217,20,6,218,20,1,220,20,0,221,20,1,222,2,4,223,2,1,223,20,4,224,20,1,226,20,3,227,20,1,228,2,4,229,2,1,230,20,4,232,20,1,233,20,4,234,20,1,235,20,4,237,20,0,238,20,1,240,20,7,241,20,1,244,20,0,245,20,4,246,20,1,8,3,0,12,4,0,12,5,0,13,6,0,13,7,0,14,8,0,14,9,0,14,10,0,14,11,0,14,12,0,14,13,0,14,14,0,14,15,0,15,16,0,15,17,0,15,18,0,15,19,0,16,8,2,16,9,2,16,10,2,16,11,2,16,12,2,16,13,2,16,14,2,16,15,2,16,16,2,16,17,2,16,18,2,16,19,2,17,4,2,17,5,2,17,6,2,17,7,2,23,3,2,36,19,0,37,19,2,43,2,2,45,2,1,48,2,2,52,2,0,73,2,2,76,2,0,78,2,2,81,19,0,82,2,1,84,2,2,85,19,2,86,2,1,88,19,0,93,19,2,95,19,0,96,19,2,97,19,0,99,19,2,101,19,0};
#include <avr/pgmspace.h>
#include "FastLED.h"
CRGB leds[141];
int angulo;
unsigned int numled;
unsigned int k = 0;
bool pasa = false;
bool cambiaLed = false;
long tiempoDibujo = 0;
long periodo = 0;
long periodoini = 0;
long previoustime = 0;
long tiempo = 0;
long contaseconds = 0;
unsigned int ang = 360;
long tvariable = 0;
int tiempoescritura = 700;
byte LedColour = 0;
byte vred = 0;
byte vgreen = 0;
byte vblue = 0;
int angAux = 0;
int anginicio = 360;
int kinicial = 0;
int contaang = 0;
long tiempoanimate = 0;
void setup() {
//Para resetear
pinMode(A2, INPUT);
digitalWrite(A2, LOW);
FastLED.addLeds<APA102>(leds, pgm_read_byte(num_leds + 0) + pgm_read_byte(offset1 + 0));
FastLED.setBrightness(pgm_read_byte(brillo + 0));
attachInterrupt(digitalPinToInterrupt(2), pasaIman, RISING);
memset(leds, 0, 141*3);
FastLED.show();
}
void loop() {
if (pasa == true) {
pasa = false;
tiempo = micros();
periodoini = tiempo - previoustime;
periodo = tiempo - previoustime - tvariable ;
//periodo teorico
tiempoDibujo = periodo / 360;
if (tiempoDibujo < 0) tiempoDibujo = 0;
previoustime = tiempo;
k = 0;
angulo = pgm_read_byte(PolarRedu + k);
if (k / 3 >= pgm_read_word_near(angreducido + 0)) {
angulo += 255;
};
contaang=0;
for (ang = 0; ang < 360 ; ang++) {
contaang++;
cambiaLed = false;
while (angulo == ang) {
cambiaLed = true;
if (pgm_read_byte(radio1directo + 0) == 1) {
numled = pgm_read_byte(PolarRedu + k+1) - 1 + pgm_read_byte(offset1 + 0);
} else {
//inverso es cero
numled = pgm_read_byte(num_leds + 0) - pgm_read_byte(PolarRedu + k+1) + pgm_read_byte(offset1 + 0);
}
LedColour = pgm_read_byte(PolarRedu + k+2);
//color option 0
vred = 0;
vgreen = 0;
vblue = 0;
if (LedColour == 4 || LedColour == 6 || LedColour == 7 || LedColour == 1) {
vblue = 255;
}
if (LedColour == 3 || LedColour == 5 || LedColour == 6 || LedColour == 1) {
vgreen = 255;
}
if (LedColour == 2 || LedColour == 5 || LedColour == 7 || LedColour == 1) {
vred = 255;
}
leds[numled].r = vred;
leds[numled].g = vgreen;
leds[numled].b = vblue;
k += 3;
if (k >= pgm_read_word_near(sizePolarRedu + 0)) {
angulo = 999;
}else{
angulo = pgm_read_byte(PolarRedu + k);
if (k / 3 >= pgm_read_word_near(angreducido + 0)) {
angulo += 255;
}
}
}
if (cambiaLed == true) {
FastLED.show();
if (tiempoDibujo > tiempoescritura) {
delayMicroseconds(tiempoDibujo - tiempoescritura);
}
} else {
if (tiempoDibujo > tiempoescritura) {
delayMicroseconds(tiempoDibujo + tiempoescritura * pgm_read_word_near(numpasos + 0) / (360 - pgm_read_word_near(numpasos + 0)));
} else {
delayMicroseconds(tiempoDibujo * 360 / (360 - pgm_read_word_near(numpasos + 0)));
}
}
if (pasa == true) {
//para que se sume a tvariable algo que se supone positivo
tvariable += (micros() - previoustime) * 360 /contaang - periodoini;
if (tvariable > 500000 || tvariable < -500000) {
tvariable = 0;
}
return;
}
}
//para que se sume a tvariable algo negativo
tvariable += (micros() - previoustime) - periodoini;
if (tvariable > 500000 || tvariable < -500000) {
tvariable = 0;
}
}
}
void pasaIman () {
pasa = true;
};
