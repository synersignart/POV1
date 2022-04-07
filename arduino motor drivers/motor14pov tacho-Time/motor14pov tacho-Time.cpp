#include <mbq.h>
#include <PingIRReceiver.h>

void setup()
{
	initBoard();
	float seconds = 40;
	//Time Starting sequence
	servo0.attachAndWrite(50);
	delay(5000);
	servo0.attachAndWrite(82);
	delay(3000);
	//Run Duration
	for(unsigned int _i=0; _i<(unsigned int)((seconds*15)); _i++)
	{
		//Taco-Meter
		if((PulseIn(D3, true, 70000)>66400))
		{
			DigitalWrite(D13_LED, true);
			servo0.attachAndWrite((servo0.read()+1));
		}
		else
		{
			DigitalWrite(D13_LED, false);
			servo0.attachAndWrite(70);
		}
	}
	servo0.attachAndWrite(50);
}

void loop()
{
}
