//PERSISTENCE OF VISION PROJECT persistenceofvisionproject.com
//AUTHOR: JES�S VICENTE PINPANPLOT@GMAIL.COM 2017
//Persistence of Vision Project by Jes�s Vicente is licensed under a Creative Commons Reconocimiento 4.0 Internacional License.
$(".c2")["hide"]();$("#divbluetooth")["hide"]();$("#divProgreso")["hide"]();$(".numrad")["hide"]();$(".animate")["hide"]();$(".ledtipe")["hide"]();var texto="my text ";var radiotexto=50;var angulotexto=360;var anguloini=0;var abcArray=[" ","a","b","c","d","e","f","g","h","i","j","k","l","m","n","\xF1","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9",".","-",":",";",",","/"];var textArray=[];var colourArray=[];var longitudAcumu=0;var espaciadoText=20;var byChar=false;var inidice=0;var animation=0;var vfont=1;var vbrillo=127;document["getElementById"]("tablebodycolour")["innerHTML"]= "";for(i= 0;i< 30;i++){document["getElementById"]("tablebodycolour")["innerHTML"]+= "<tr STYLE=\" border: none;\">"+ "<td STYLE=\" border-right: none;  border-left: none;\">"+ i+ "</td>"+ "<td STYLE=\" border-right: none;  border-left: none;\" >"+ "<select id=\"scolor"+ i+ "\" name=\"scolor\" autocomplete=\"off\" onchange=\"pixelate();\">"+ "<option value=\"0\" >Black</option>"+ "<option value=\"1\" >White</option>"+ "<option value=\"2\" >Red</option>"+ "<option value=\"3\" >Green</option>"+ "<option value=\"4\" >Blue</option>"+ "<option value=\"5\" selected>Yellow</option>"+ "<option value=\"6\" >Cian</option>"+ "<option value=\"7\" >Magenta</option>"+ "</select>"+ "</td>"+ "</tr>"};var bcoloroption=0;var numpasos=0;var numpasos180=[];var stepoption=1;var c0=document["createElement"]("canvas");var ctx0=c0["getContext"]("2d");var c1=document["createElement"]("canvas");var ctx1=c1["getContext"]("2d");var c2=document["createElement"]("canvas");var ctx2=c2["getContext"]("2d");var img= new Image();var img2= new Image();var img3= new Image();var numLED=30;var numLED2=0;var size=500;img["onload"]= pixelate;img["src"]= "abc.png";var myImage2;var myImage2Polar=[];var PolarRedu=[];var ledColor=[];var w;var h;var invertir=false;var cambiangulo=false;var anguloreducido=999;numLED= idnumleds["value"];document["getElementById"]("myinputOff1")["max"]= numLED;document["getElementById"]("myinputOff2")["max"]= numLED;var reflexion=false;var blackiswait=false;var radio1directo=false;var radio2directo=false;var radio1offset=0;var radio2offset=0;var varnumrad=0;var varnumstrip=0;var numradoption=0;var chipled="";var stringcode="";var stringcode2="";var stringcode3="";var radio2180=false;var red;var green;var blue;stringcode3= "";stringcode3+= "<small>//PERSISTENCE OF VISION PROJECT persistenceofvisionproject.com";stringcode3+= "<br>//AUTHOR: JES\xDAS VICENTE PINPANPLOT@GMAIL.COM 2017<br>//Persistence of Vision Project by Jes&uacute;s Vicente is licensed under a Creative Commons Reconocimiento 4.0 Internacional License.";stringcode3+= "<br>/////////////////////////";stringcode3+= "<br>//CONNECTIONS:";stringcode3+= "<br>//////////////////////////";stringcode3+= "<br>//HALL SENSOR IN D2 (RESISTOR 10K BETWEEN SIGNAL AND 5V)";stringcode3+= "<br>//A2 CONNECT TO RESET";stringcode3+= "<br>//ARDUINO NANO AND UNO: APA102 (or similar) 'DATA' TO MOSI (D11) AND 'CLOCK' TO SCK (D13) ";stringcode3+= "<br>//ARDUINO MEGA: APA102 (or similar) 'DATA' TO MOSI (D51) AND 'CLOCK' TO SCK (D52)";stringcode3+= "<br>//NOT CONNECT APA102 REVERSED!!!";stringcode3+= "<br>//GND ARDUINO AND GND APA102 MUST BE CONNECTED";stringcode3+= "<br>//POWER SUPPLY OF APA102 IS EXTERNAL FROM ARDUINO";stringcode3+= "<br>//////////////////////////";stringcode3+= "<br>//////////////////////////";stringcode2+= "<br>#include &lt;avr/pgmspace.h&gt;";stringcode2+= "<br>#include \"FastLED.h\"";stringcode2+= "<br>CRGB leds[141];";stringcode2+= "<br>int angulo;";stringcode2+= "<br>unsigned int numled;";stringcode2+= "<br>unsigned int k = 0;";stringcode2+= "<br>bool pasa = false;";stringcode2+= "<br>bool cambiaLed = false;";stringcode2+= "<br>long tiempoDibujo = 0;";stringcode2+= "<br>long periodo = 0;";stringcode2+= "<br>long periodoini = 0;";stringcode2+= "<br>long previoustime = 0;";stringcode2+= "<br>long tiempo = 0;";stringcode2+= "<br>long contaseconds = 0;";stringcode2+= "<br>unsigned int ang = 360;";stringcode2+= "<br>long tvariable = 0;";stringcode2+= "<br>int tiempoescritura = 700;";stringcode2+= "<br>byte LedColour = 0;";stringcode2+= "<br>byte vred = 0;";stringcode2+= "<br>byte vgreen = 0;";stringcode2+= "<br>byte vblue = 0;";stringcode2+= "<br>int angAux = 0;";stringcode2+= "<br>int anginicio = 360;";stringcode2+= "<br>int kinicial = 0;";stringcode2+= "<br>int contaang = 0;";stringcode2+= "<br>long tiempoanimate = 0;";stringcode2+= "<br>void setup() {";stringcode2+= "<br>//Para resetear";stringcode2+= "<br>pinMode(A2, INPUT);";stringcode2+= "<br>digitalWrite(A2, LOW);";stringcode2+= "<br>FastLED.addLeds&lt;APA102&gt;(leds, pgm_read_byte(num_leds + 0) + pgm_read_byte(offset1 + 0));";stringcode2+= "<br>FastLED.setBrightness(pgm_read_byte(brillo + 0));";stringcode2+= "<br>attachInterrupt(digitalPinToInterrupt(2), pasaIman, RISING);";stringcode2+= "<br>memset(leds, 0, 141*3);";stringcode2+= "<br>FastLED.show();";stringcode2+= "<br>}";stringcode2+= "<br>void loop() {";stringcode2+= "<br>if (pasa == true) {";stringcode2+= "<br>pasa = false;";stringcode2+= "<br>tiempo = micros();";stringcode2+= "<br>periodoini = tiempo - previoustime;";stringcode2+= "<br>periodo = tiempo - previoustime - tvariable ;";stringcode2+= "<br>//periodo teorico";stringcode2+= "<br>tiempoDibujo = periodo / 360;";stringcode2+= "<br>if (tiempoDibujo < 0) tiempoDibujo = 0;";stringcode2+= "<br>previoustime = tiempo;";stringcode2+= "<br>k = 0;";stringcode2+= "<br>angulo = pgm_read_byte(PolarRedu + k);";stringcode2+= "<br>if (k / 3 >= pgm_read_word_near(angreducido + 0)) {";stringcode2+= "<br>angulo += 255;";stringcode2+= "<br>};";stringcode2+= "<br>contaang=0;";stringcode2+= "<br>for (ang = 0; ang < 360 ; ang++) {";stringcode2+= "<br>contaang++;";stringcode2+= "<br>cambiaLed = false;";stringcode2+= "<br>while (angulo == ang) {";stringcode2+= "<br>cambiaLed = true;";stringcode2+= "<br>if (pgm_read_byte(radio1directo + 0) == 1) {";stringcode2+= "<br>numled =  pgm_read_byte(PolarRedu + k+1) - 1 + pgm_read_byte(offset1 + 0);";stringcode2+= "<br>} else {";stringcode2+= "<br>//inverso es cero";stringcode2+= "<br>numled = pgm_read_byte(num_leds + 0) -  pgm_read_byte(PolarRedu + k+1) + pgm_read_byte(offset1 + 0);";stringcode2+= "<br>}";stringcode2+= "<br>LedColour =  pgm_read_byte(PolarRedu + k+2);";stringcode2+= "<br>//color option 0";stringcode2+= "<br>vred = 0;";stringcode2+= "<br>vgreen = 0;";stringcode2+= "<br>vblue = 0;";stringcode2+= "<br>if (LedColour == 4 || LedColour == 6 || LedColour == 7 || LedColour == 1) {";stringcode2+= "<br>vblue = 255;";stringcode2+= "<br>}";stringcode2+= "<br>if (LedColour == 3 || LedColour == 5 || LedColour == 6 || LedColour == 1) {";stringcode2+= "<br>vgreen = 255;";stringcode2+= "<br>}";stringcode2+= "<br>if (LedColour == 2 || LedColour == 5 || LedColour == 7 || LedColour == 1) {";stringcode2+= "<br>vred = 255;";stringcode2+= "<br>}";stringcode2+= "<br>leds[numled].r = vred;";stringcode2+= "<br>leds[numled].g = vgreen;";stringcode2+= "<br>leds[numled].b = vblue;";stringcode2+= "<br>k += 3;";stringcode2+= "<br>if (k >= pgm_read_word_near(sizePolarRedu + 0)) {";stringcode2+= "<br>  angulo = 999;";stringcode2+= "<br>}else{";stringcode2+= "<br>  angulo = pgm_read_byte(PolarRedu + k);";stringcode2+= "<br>  if (k / 3 >= pgm_read_word_near(angreducido + 0)) {";stringcode2+= "<br>    angulo += 255;";stringcode2+= "<br>  }";stringcode2+= "<br>}";stringcode2+= "<br>}";stringcode2+= "<br>if (cambiaLed == true) {";stringcode2+= "<br>FastLED.show();";stringcode2+= "<br>if (tiempoDibujo > tiempoescritura) {";stringcode2+= "<br>delayMicroseconds(tiempoDibujo - tiempoescritura);";stringcode2+= "<br>}";stringcode2+= "<br>} else {";stringcode2+= "<br>if (tiempoDibujo > tiempoescritura) {";stringcode2+= "<br>delayMicroseconds(tiempoDibujo + tiempoescritura * pgm_read_word_near(numpasos + 0) / (360 - pgm_read_word_near(numpasos + 0)));";stringcode2+= "<br>} else {";stringcode2+= "<br>delayMicroseconds(tiempoDibujo * 360 / (360 - pgm_read_word_near(numpasos + 0)));";stringcode2+= "<br>}";stringcode2+= "<br>}";stringcode2+= "<br>if (pasa == true) {";stringcode2+= "<br>//para que se sume a tvariable algo que se supone positivo";stringcode2+= "<br>tvariable += (micros() - previoustime) * 360 /contaang - periodoini;";stringcode2+= "<br>if (tvariable > 500000 || tvariable < -500000) {";stringcode2+= "<br>tvariable = 0;";stringcode2+= "<br>}";stringcode2+= "<br>return;";stringcode2+= "<br>}";stringcode2+= "<br>}";stringcode2+= "<br>//para que se sume a tvariable algo negativo";stringcode2+= "<br>tvariable += (micros() - previoustime) - periodoini;";stringcode2+= "<br>if (tvariable > 500000 || tvariable < -500000) {";stringcode2+= "<br>tvariable = 0;";stringcode2+= "<br>}";stringcode2+= "<br>}";stringcode2+= "<br>}";stringcode2+= "<br>void pasaIman () {";stringcode2+= "<br>  pasa = true;";stringcode2+= "<br>}</small>;";function pixelate(v){reflexion= document["getElementById"]("myCheckREF")["checked"];blackiswait= document["getElementById"]("myCheckWOff")["checked"];bcoloroption= parseInt(document["getElementById"]("bcolor")["value"]);angulotexto= parseInt(document["getElementById"]("angtext")["value"]);espaciadoText= parseInt(document["getElementById"]("esptext")["value"]);anguloini= parseInt(document["getElementById"]("angini")["value"]);animation= document["getElementById"]("animate")["value"];vfont= parseInt(document["getElementById"]("font")["value"]);vbrillo= Math["round"](parseInt(document["getElementById"]("brillo")["value"])* 255/ 100);numradoption= parseInt(document["getElementById"]("numrad")["value"]);if(numradoption== 11|| numradoption== 12){varnumstrip= 1};if(numradoption== 21|| numradoption== 22){varnumstrip= 2};if(numradoption== 11|| numradoption== 21){varnumrad= 1};if(numradoption== 12|| numradoption== 22){varnumrad= 2};if(document["getElementById"]("ledtipe")["value"]== 1){chipled= "apa102"};if(document["getElementById"]("ledtipe")["value"]== 2){chipled= "ws2812b"};if(anguloini< 0){anguloini+= 360};radiotexto= 100- parseInt(document["getElementById"]("radtext")["value"]);textArray= [];colourArray= [];texto= texto["toLowerCase"]();for(var n=0;n< texto["length"];n++){for(var n2=0;texto[n]!= abcArray[n2]&& n2< abcArray["length"];n2++){};textArray[n]= [n2];colourArray[n]= parseInt(document["getElementById"]("scolor"+ n)["value"])};c0["width"]= 200;c0["height"]= 200;c1["width"]= (1+ espaciadoText/ 100)* 200* textArray["length"];c1["height"]= 200;c2["width"]= 500;c2["height"]= 500;ctx0["fillStyle"]= "rgb(255,255,255)";ctx0= c0["getContext"]("2d");ctx0["clearRect"](0,0,c0["width"],c0["height"]);ctx1= c1["getContext"]("2d");ctx1["fillStyle"]= "rgb(255,255,255)";if(invertir){ctx1["fillStyle"]= "rgb(0,0,0)"};ctx1["clearRect"](0,0,c1["width"],c1["height"]);longitudAcumu= 0;for(var n=0;n< textArray["length"];n++){ctx0["clearRect"](0,0,c0["width"],c0["height"]);if(textArray[n]!= 0){ctx0["drawImage"](img,(textArray[n]- 1)* 200,0,200,200,0,0,200,200);img2= ctx0["getImageData"](0,0,200,200);for(var i=0;i< img2["data"]["length"]/ 4;i+= 1){if(img2["data"][(i)* 4+ 3]== 255){img2["data"][(i)* 4]= 0;img2["data"][(i)* 4+ 1]= 0;img2["data"][(i)* 4+ 2]= 0;img2["data"][(i)* 4+ 3]= 255;if(colourArray[n]== 1){img2["data"][(i)* 4]= 255;img2["data"][(i)* 4+ 1]= 255;img2["data"][(i)* 4+ 2]= 255;img2["data"][(i)* 4+ 3]= 255};if(colourArray[n]== 4|| colourArray[n]== 6|| colourArray[n]== 7){img2["data"][(i)* 4+ 2]= 255};if(colourArray[n]== 3|| colourArray[n]== 5|| colourArray[n]== 6){img2["data"][(i)* 4+ 1]= 255};if(colourArray[n]== 2|| colourArray[n]== 5|| colourArray[n]== 7){img2["data"][(i)* 4]= 255}}};ctx1["putImageData"](img2,longitudAcumu,0)};longitudAcumu+= 200* (1+ espaciadoText/ 100)};img3= ctx1["getImageData"](0,0,c1["width"],c1["height"]);myImage2Polar= [];PolarRedu= [];ledColor= [];ctx2["clearRect"](0,0,c2["width"],c2["height"]);for(var ang=0;ang< 360;ang++){myImage2Polar[ang]= [];for(var led=1;led<= numLED;led++){myImage2Polar[ang][led]= [];myImage2Polar[ang][led][0]= 0;myImage2Polar[ang][led][1]= 0;myImage2Polar[ang][led][2]= 0;if(bcoloroption== 1){myImage2Polar[ang][led][0]= 255;myImage2Polar[ang][led][1]= 255;myImage2Polar[ang][led][2]= 255};if(bcoloroption== 4|| bcoloroption== 6|| bcoloroption== 7){myImage2Polar[ang][led][2]= 255};if(bcoloroption== 3|| bcoloroption== 5|| bcoloroption== 6){myImage2Polar[ang][led][1]= 255};if(bcoloroption== 2|| bcoloroption== 5|| bcoloroption== 7){myImage2Polar[ang][led][0]= 255}}};inidice= 0;for(var ang=0;ang< angulotexto;ang++){var radioledlimite=Math["floor"](numLED- numLED* radiotexto/ 100);for(var led=1;led<= numLED;led++){if(led> radioledlimite){y= img3["height"]- img3["height"]* (led- radioledlimite)/ (numLED- radioledlimite);x= ang* img3["width"]/ angulotexto;ipix= img3["width"]* (Math["floor"](y))+ Math["floor"](x);if(img3["data"][(ipix)* 4+ 3]== 255){if(reflexion){inidice= (360- ang+ anguloini)% 360}else {inidice= (ang+ anguloini)% 360};myImage2Polar[inidice][led]= [];myImage2Polar[inidice][led][0]= img3["data"][(ipix)* 4];myImage2Polar[inidice][led][1]= img3["data"][(ipix)* 4+ 1];myImage2Polar[inidice][led][2]= img3["data"][(ipix)* 4+ 2]}}}};if(blackiswait){for(var ang=0;ang< 360;ang++){for(var led=1;led<= numLED;led++){if(myImage2Polar[ang][led][0]== 255&& myImage2Polar[ang][led][1]== 255&& myImage2Polar[ang][led][2]== 255){myImage2Polar[ang][led][0]= 0;myImage2Polar[ang][led][1]= 0;myImage2Polar[ang][led][2]= 0}else {if(myImage2Polar[ang][led][0]== 0&& myImage2Polar[ang][led][1]== 0&& myImage2Polar[ang][led][2]== 0){myImage2Polar[ang][led][0]= 255;myImage2Polar[ang][led][1]= 255;myImage2Polar[ang][led][2]= 255}}}}};PolarRedu= [];var ultimoLed=0;var contaRedu=0;ledColor= [];ledColor= [];for(var i=1;i<= numLED;i++){ledColor[i]= [];ledColor[i][0]= 999;ledColor[i][1]= 999;ledColor[i][2]= 999};cambiangulo= false;numpasos= 0;anguloreducido= 999;if(radio2180){for(var ang=0;ang< 360;ang++){numpasos180[ang]= 0}};for(var ang=0;ang< 360;ang++){for(var led=1;led<= numLED;led++){if(myImage2Polar[ang][led][0]!= ledColor[led][0]|| myImage2Polar[ang][led][1]!= ledColor[led][1]|| myImage2Polar[ang][led][2]!= ledColor[led][2]){cambiangulo= true;if(anguloreducido== 999&& ang> 255){anguloreducido= contaRedu};PolarRedu[contaRedu]= [];PolarRedu[contaRedu][0]= ang;PolarRedu[contaRedu][1]= led;PolarRedu[contaRedu][2]= myImage2Polar[ang][led][0];PolarRedu[contaRedu][3]= myImage2Polar[ang][led][1];PolarRedu[contaRedu][4]= myImage2Polar[ang][led][2];contaRedu++;ledColor[led][0]= myImage2Polar[ang][led][0];ledColor[led][1]= myImage2Polar[ang][led][1];ledColor[led][2]= myImage2Polar[ang][led][2]}};if(cambiangulo== true){numpasos++;numpasos180[ang]= 1};cambiangulo= false};if(radio2180){for(var ang=180;ang< 360;ang++){if(numpasos180[ang]== 1&& numpasos180[ang- 180]!= 1){numpasos++}}};ctx2["clearRect"](0,0,c2["width"],c2["height"]);var ledTira;var ledAcumulado=0;ledColor= [];for(var i=1;i<= numLED;i++){ledColor[i]= []};var k=0;var angAux;for(var ang=0;ang< 360;ang++){if(k< PolarRedu["length"]){while(ang== PolarRedu[k][0]){ledColor[PolarRedu[k][1]][0]= PolarRedu[k][2];ledColor[PolarRedu[k][1]][1]= PolarRedu[k][3];ledColor[PolarRedu[k][1]][2]= PolarRedu[k][4];k++;if(k== PolarRedu["length"]){break}}};for(var i=1;i<= numLED;i++){ledTira= i;ctx2["beginPath"]();ctx2["lineWidth"]= 5;if(numLED> 40){ctx2["lineWidth"]= 4};if(numLED> 59){ctx2["lineWidth"]= 3};if(numLED> 79){ctx2["lineWidth"]= 2};if(numLED> 99){ctx2["lineWidth"]= 2};ctx2["strokeStyle"]= "rgb("+ ledColor[ledTira][0]+ ","+ ledColor[ledTira][1]+ ","+ ledColor[ledTira][2]+ ")";ctx2["arc"](c2["width"]/ 2,c2["height"]/ 2,c2["width"]/ 2* ledTira/ numLED,(ang- 1/ 2+ 180)* Math["PI"]/ 180,(ang+ 1/ 2+ 180)* Math["PI"]/ 180);ctx2["stroke"]()}};document["getElementById"]("imagen1view")["src"]= c2["toDataURL"]();escribecode()}function escribecode(){stringcode= stringcode3;stringcode+= "<br>const uint8_t chipled[] PROGMEM = {";if(chipled== "apa102"){stringcode+= "0"};if(chipled== "ws2812b"){stringcode+= "1"};stringcode+= "};";stringcode+= "<br>const  uint8_t numstrip[] PROGMEM = {";stringcode+= varnumstrip;stringcode+= "};";stringcode+= "<br>const  uint8_t numradios[] PROGMEM = {";stringcode+= varnumrad;stringcode+= "};";stringcode+= "<br>const  uint8_t radio1directo[] PROGMEM = {";if(!radio1directo){stringcode+= "1"}else {stringcode+= "0"};stringcode+= "};";stringcode+= "<br>const  uint8_t radio2directo[] PROGMEM = {";if(!radio2directo){stringcode+= "1"}else {stringcode+= "0"};stringcode+= "};";stringcode+= "<br>const  uint8_t radio2180[] PROGMEM = {";if(radio2180){stringcode+= "1"}else {stringcode+= "0"};stringcode+= "};";stringcode+= "<br>const  uint8_t offset1[] PROGMEM = {";stringcode+= radio1offset;stringcode+= "};";stringcode+= "<br>const  uint8_t offset2[] PROGMEM = {";stringcode+= radio2offset;stringcode+= "};";stringcode+= "<br>const  uint8_t brillo[] PROGMEM = {";stringcode+= vbrillo;stringcode+= "};";stringcode+= "<br>const  uint8_t animate[] PROGMEM = {";stringcode+= animation;stringcode+= "};";stringcode+= "<br>const  uint8_t num_leds[] PROGMEM = {";stringcode+= numLED;stringcode+= "};";stringcode+= "<br>const  uint16_t  numpasos[] PROGMEM = {";stringcode+= numpasos;stringcode+= "};";stringcode+= "<br>const  uint16_t  angreducido[] PROGMEM = {";stringcode+= anguloreducido;stringcode+= "};";stringcode+= "<br>const  uint16_t  sizePolarRedu[] PROGMEM = {";stringcode+= PolarRedu["length"]* 3;stringcode+= "};";stringcode+= "<br>const uint8_t PolarRedu["+ PolarRedu["length"]* 3+ "] PROGMEM = {";for(var i=0;i< PolarRedu["length"];i++){red= PolarRedu[i][2];green= PolarRedu[i][3];blue= PolarRedu[i][4];if(document["getElementById"]("redisgreen")["checked"]){red= PolarRedu[i][3]};if(document["getElementById"]("redisblue")["checked"]){red= PolarRedu[i][4]};if(document["getElementById"]("greenisred")["checked"]){green= PolarRedu[i][2]};if(document["getElementById"]("greenisblue")["checked"]){green= PolarRedu[i][4]};if(document["getElementById"]("blueisred")["checked"]){blue= PolarRedu[i][2]};if(document["getElementById"]("blueisgreen")["checked"]){blue= PolarRedu[i][3]};if(red== 0&& green== 0&& blue== 0){PolarRedu[i][5]= 0};if(red== 255&& green== 255&& blue== 255){PolarRedu[i][5]= 1};if(red== 255&& green== 0&& blue== 0){PolarRedu[i][5]= 2};if(red== 0&& green== 255&& blue== 0){PolarRedu[i][5]= 3};if(red== 0&& green== 0&& blue== 255){PolarRedu[i][5]= 4};if(red== 255&& green== 255&& blue== 0){PolarRedu[i][5]= 5};if(red== 0&& green== 255&& blue== 255){PolarRedu[i][5]= 6};if(red== 255&& green== 0&& blue== 255){PolarRedu[i][5]= 7};if(PolarRedu[i][0]<= 255){stringcode+= PolarRedu[i][0]+ ","+ PolarRedu[i][1]+ ","+ PolarRedu[i][5]}else {stringcode+= PolarRedu[i][0]- 255+ ","+ PolarRedu[i][1]+ ","+ PolarRedu[i][5]};if(i!= PolarRedu["length"]- 1){stringcode+= ","}};stringcode+= "};";stringcode+= stringcode2;document["getElementById"]("cont")["innerHTML"]= "DRAW SIZE: "+ PolarRedu["length"]* 3;document["getElementById"]("cont")["innerHTML"]+= "<br>ARDUINO NANO MAX SIZE: 15000";document["getElementById"]("cont")["innerHTML"]+= "<br>ARDUINO UNO MAX SIZE: 15000";document["getElementById"]("cont")["innerHTML"]+= "<br>MEGA UNO MAX SIZE: 30000<br>";document["getElementById"]("cont2")["innerHTML"]= stringcode}idnumleds["addEventListener"]("change",numerodeLeds,false);font["addEventListener"]("change",functionfont,false);scolor["addEventListener"]("change",functioncolor,false);bcolor["addEventListener"]("change",functionbcolor,false);radtext["addEventListener"]("change",funradtext,false);angtext["addEventListener"]("change",funangtext,false);angini["addEventListener"]("change",funangini,false);esptext["addEventListener"]("change",funesptext,false);animate["addEventListener"]("change",funanimate,false);numrad["addEventListener"]("change",funcnumrad,false);ledtipe["addEventListener"]("change",functipoled,false);myinputOff1["addEventListener"]("change",functinputOff1,false);myinputOff2["addEventListener"]("change",functinputOff2,false);brillo["addEventListener"]("change",functbrillo,false);$("#mytexto")["bind"]("keyup",functiontext);$("#redisred")["change"](escribecode);$("#redisgreen")["change"](escribecode);$("#redisblue")["change"](escribecode);$("#greenisred")["change"](escribecode);$("#greenisgreen")["change"](escribecode);$("#greenisblue")["change"](escribecode);$("#blueisred")["change"](escribecode);$("#blueisgreen")["change"](escribecode);$("#blueisblue")["change"](escribecode);myCheckOpDir1["addEventListener"]("change",functCheckOpDir1,false);myCheckOpDir2["addEventListener"]("change",functCheckOpDir2,false);myCheck1802["addEventListener"]("change",functCheck1802,false);function functbrillo(){if(isNaN(brillo["value"])|| brillo["value"]== ""){brillo["value"]= Math["round"](vbrillo* 100/ 255)};vbrillo= Math["round"](parseInt(document["getElementById"]("brillo")["value"])* 255/ 100);if(vbrillo> 255){vbrillo= 255;brillo["value"]= 100};if(vbrillo< 0){vbrillo= 0;brillo["value"]= 0};escribecode()}function functionfont(){vfont= parseInt(document["getElementById"]("font")["value"]);img["onload"]= pixelate;if(vfont== 1){img["src"]= "abc.png"};if(vfont== 2){img["src"]= "abcd.png"}}function numerodeLeds(){if(isNaN(idnumleds["value"])|| idnumleds["value"]== ""){idnumleds["value"]= numLED};numLED= idnumleds["value"];if(numLED> 141){numLED= 141;idnumleds["value"]= 141};if(numLED< 1){numLED= 1;idnumleds["value"]= 1};pixelate()}function functiontext(){var input=document["getElementById"]("mytexto")["value"];if(input!= texto){texto= input;pixelate()}}function functionbcolor(){pixelate()}function funanimate(){if(isNaN(animate["value"])|| animate["value"]== ""){animate["value"]= animation};animation= document["getElementById"]("animate")["value"];if(animation> 45){animation= 45;document["getElementById"]("animate")["value"]= 45};if(animation< 0){animation= 0;document["getElementById"]("animate")["value"]= 0};escribecode()}function funradtext(){if(isNaN(radtext["value"])|| radtext["value"]== ""){radtext["value"]= radaux};var radaux=parseInt(document["getElementById"]("radtext")["value"]);if(radaux> 90){document["getElementById"]("radtext")["value"]= 90;radiotexto= 100- 90};if(radaux< 10){document["getElementById"]("radtext")["value"]= 10;radiotexto= 100- 10};pixelate()}function funangini(){if(isNaN(angini["value"])|| angini["value"]== ""){angini["value"]= anguloini};anguloini= parseInt(document["getElementById"]("angini")["value"]);if(anguloini> 360){anguloini= 360;document["getElementById"]("angini")["value"]= 360};if(anguloini<  -360){anguloini=  -360;document["getElementById"]("angini")["value"]=  -360};pixelate()}function funangtext(){if(isNaN(angtext["value"])|| angtext["value"]== ""){angtext["value"]= angulotexto};angulotexto= parseInt(document["getElementById"]("angtext")["value"]);if(angulotexto> 360){angulotexto= 360;document["getElementById"]("angtext")["value"]= 360};if(angulotexto< 0){angulotexto= 0;document["getElementById"]("angtext")["value"]= 0};pixelate()}function funesptext(){espaciadoText= parseInt(document["getElementById"]("esptext")["value"]);if(espaciadoText> 360){espaciadoText= 360;document["getElementById"]("esptext")["value"]= 360};if(espaciadoText< 0){espaciadoText= 0;document["getElementById"]("esptext")["value"]= 0};pixelate()}function functioncolor(){for(i= 0;i< 30;i++){document["getElementById"]("scolor"+ i)["value"]= document["getElementById"]("scolor")["value"]};pixelate()}function functionpaso(){stepoption= parseInt(document["getElementById"]("spaso")["value"]);pixelate()}function funcnumrad(){if(isNaN(numrad["value"])|| numrad["value"]== ""){numrad["value"]= numradoption};numradoption= parseInt(document["getElementById"]("numrad")["value"]);if(numradoption== 11|| numradoption== 21){document["getElementById"]("myinputOff2")["disabled"]= true;document["getElementById"]("myCheckOpDir2")["disabled"]= true;document["getElementById"]("myCheck1802")["disabled"]= true;$(".c2")["hide"]();varnumrad= 1;radio2offset= 0;radio2180= 0;document["getElementById"]("myinputOff2")["value"]= 0;document["getElementById"]("myCheckOpDir2")["checked"]= false;document["getElementById"]("myCheck1802")["checked"]= false;radio2directo= false};if(numradoption== 12|| numradoption== 22){document["getElementById"]("myinputOff2")["disabled"]= false;document["getElementById"]("myCheckOpDir2")["disabled"]= false;document["getElementById"]("myCheck1802")["disabled"]= false;$(".c2")["show"]();varnumrad= 2};if(numradoption== 11|| numradoption== 12){varnumstrip= 1};if(numradoption== 21|| numradoption== 22){varnumstrip= 2};escribecode()}function functipoled(){if(document["getElementById"]("ledtipe")["value"]== 1){chipled= "apa102"};if(document["getElementById"]("ledtipe")["value"]== 2){chipled= "ws2812b"};escribecode()}function functinputOff1(){if(isNaN(myinputOff1["value"])|| myinputOff1["value"]== ""){myinputOff1["value"]= radio1offset};radio1offset= document["getElementById"]("myinputOff1")["value"];if(radio1offset> 10){radio1offset= 10;document["getElementById"]("myinputOff1")["value"]= 10};if(radio1offset< 0){radio1offset= 0;document["getElementById"]("myinputOff1")["value"]= 0};escribecode()}function functinputOff2(){if(isNaN(myinputOff2["value"])|| myinputOff2["value"]== ""){myinputOff2["value"]= radio2offset};radio2offset= document["getElementById"]("myinputOff2")["value"];if(radio2offset> 10){radio2offset= 10;document["getElementById"]("myinputOff2")["value"]= 10};if(radio2offset< 0){radio2offset= 0;document["getElementById"]("myinputOff2")["value"]= 0};escribecode()}function functCheckOpDir1(){radio1directo= document["getElementById"]("myCheckOpDir1")["checked"];escribecode()}function functCheckOpDir2(){radio2directo= document["getElementById"]("myCheckOpDir2")["checked"];escribecode()}function functCheck1802(){radio2180= document["getElementById"]("myCheck1802")["checked"];pixelate()}