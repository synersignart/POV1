void II() {

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
angulo = pgm_read_byte(PolarRedu9 + k);
if (k / 3 >= pgm_read_word_near(angreducido9 + 0)) {
angulo += 255;
};
contaang=0;
for (ang = 0; ang < 360 ; ang++) {
contaang++;
cambiaLed = false;
while (angulo == ang) {
cambiaLed = true;
if (pgm_read_byte(radio1directo + 0) == 1) {
numled = pgm_read_byte(PolarRedu9 + k+1) - 1 + pgm_read_byte(offset1 + 0);
} else {
//inverso es cero
numled = pgm_read_byte(num_leds + 0) - pgm_read_byte(PolarRedu9 + k+1) + pgm_read_byte(offset1 + 0);
}
LedColour = pgm_read_byte(PolarRedu9 + k+2);
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
leds[numled].b = vred;
leds[numled].g = vgreen;
leds[numled].r = vblue;
k += 3;
if (k >= pgm_read_word_near(sizePolarRedu9 + 0)) {
angulo = 999;
}else{
angulo = pgm_read_byte(PolarRedu9 + k);
if (k / 3 >= pgm_read_word_near(angreducido9 + 0)) {
angulo += 255;
}
}
}
if (cambiaLed == true) {
FastLED.show();
if (tiempoDibujo > tiempoescritura) {
delayMicroseconds(tiempoDibujo - tiempoescritura);
}

//--------------------------<EDITED the Delay timer to Tune the Image Refresh Rate - Bigges NumPasost (-) Other Numpasos>--------------------------------------------------------------------------------------------------------------------------------------------------------------
} else {
if (tiempoDibujo > tiempoescritura) {
delayMicroseconds(tiempoDibujo + tiempoescritura * pgm_read_word_near(numpasos9 + 0) / (360 - pgm_read_word_near(numpasos9 + 0)));
} else {
delayMicroseconds(tiempoDibujo * 360 / (360 - pgm_read_word_near(numpasos9 + 0)));
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

}
if (pasa == true) {
//para que se sume a tvariable algo que se supone positivo
tvariable += (micros() - previoustime) * 360 /contaang - periodoini;
if (tvariable > 300000 || tvariable < -300000) {
tvariable = 0;
}
return;
}
}
//para que se sume a tvariable algo negativo
tvariable += (micros() - previoustime) - periodoini;
if (tvariable > 300000 || tvariable < -300000) {
tvariable = 0;
}
}
}
 void pasaIman9 () {
pasa = true;
}

