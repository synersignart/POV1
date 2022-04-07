#include <mbq.h>
#include <PingIRReceiver.h>

void setup()
{
	initBoard();
	float seconds = 20;
	//Time Starting sequence
	servo0.attachAndWrite(50);
	delay(5000);
	servo0.attachAndWrite(75);
	delay(2000);
	//Run Duration
	for(unsigned int _i=0; _i<(unsigned int)((seconds*15)); _i++)
	{
		//Taco-Meter
		if((PulseIn(D3, true, 99500)>86000))
		{
			DigitalWrite(D13_LED, true);
			servo0.attachAndWrite((servo0.read()+1));
		}
		else
		{
			DigitalWrite(D13_LED, false);
			servo0.attachAndWrite(66);
		}
	}
	servo0.attachAndWrite(50);
}

void loop()
{
}
