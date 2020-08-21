
class BallInstance extends ISpriteInstance
{
	constructor(runtime)
	{
		super();
	}
	
	static create(runtime, x, y, size)
	{
		let instance = runtime.objects.ball.createInstance("Main", x, y);

		let diameter = 40;

		switch(size) {
			case 0:
				diameter = 20;
			    break;
			case 1:
				diameter = 40;
				break;
			case 2:
				diameter = 60;
				break;
		}
		
		instance.set
		
		instance.width = diameter;
		instance.height = diameter;
	}
}
