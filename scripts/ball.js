export default class BallInstance
{
	static create(runtime, x, y, size)
	{
		const instance = runtime.objects.ball.createInstance("Main", x, y);

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

		instance.width = diameter;
		instance.height = diameter;
	}
}
