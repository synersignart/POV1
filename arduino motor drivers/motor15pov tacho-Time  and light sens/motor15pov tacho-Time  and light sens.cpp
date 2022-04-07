#include <mbq.h>
#include <PingIRReceiver.h>

void setup()
{
	initBoard();
	while(true)
	{
		DigitalWrite(D4, DigitalRead(D15));
		//D4 and D2 are jumpred
		if(DigitalRead(D2))
		{
			if((PulseIn(D3, true, 65000)>53500))
			{
				DigitalWrite(D13_LED, true);
				servo0.attachAndWrite((servo0.read()+1));
			}
			else
			{
				DigitalWrite(D13_LED, false);
				servo0.attachAndWrite(74);
			}
		}
		else
		{
			servo0.attachAndWrite(50);
		}
	}
}

void loop()
{
}
