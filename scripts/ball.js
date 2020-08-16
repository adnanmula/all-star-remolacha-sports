
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
	
	static applyKick(runtime, playerUid, matchType)
	{
		ball = runtime.objects.ball.getFirstInstance();
		player = runtime.objects.player.getInstanceByUid(playerUid);
			
		angle = runtime.callFunction.angle(player.x, player.y, ball.x, ball.y);	
		force = 15;
		
		if (runtime.globalVars.MATCH_TYPE_VOLLEY == matchType) {
			force = 5;
		}
	
		ball.applyImpulseAtAngle(force, angle, 0);
	}
}
