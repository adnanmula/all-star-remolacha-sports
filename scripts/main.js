import BallInstance from "./ball.js";

runOnStartup(async runtime =>
{
	runtime.objects.ball.setInstanceClass(BallInstance);
});

function OnBeforeProjectStart(runtime)
{
	runtime.addEventListener("tick", () => Tick(runtime));	
}
