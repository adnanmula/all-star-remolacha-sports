
runOnStartup(async runtime =>
{
	runtime.objects.ball.setInstanceClass(BallInstance);
	
	//runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

function OnBeforeProjectStart(runtime)
{
	runtime.addEventListener("tick", () => Tick(runtime));	
}