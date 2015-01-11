$(document).ready(function(){
	//Function Declarations

	 

	function displayOption(isAvailable){
		if (isAvailable) {
			$("#indicator").addClass("turnon");
			$("#indicator").text("Light On");
			
		}
		else {
			$("#indicator").addClass("noservice");
			$("#indicator").text("Sorry No flashlight");
	}

}
	

	function lightOnOff(){
		var className=$("#indicator").attr("class");
		if (className=="turnon") {
			$("#indicator").removeClass("turnon");
			$("#indicator").addClass("turnoff");
			$("#indicator").text("Light Off");
			window.plugins.flashlight.switchOn();
		}
		else if (className=="turnoff") {
			$("#indicator").removeClass("turnoff");
			$("#indicator").addClass("turnon");
			$("#indicator").text("Light On");
			window.plugins.flashlight.switchOff();
		}
	} 
	$("#indicator").tap(lightOnOff);

	
	function flashChecker(){
		window.plugins.flashlight.available(displayOption);
	}
	document.addEventListener('deviceready',function(){
		//Device Ready
		flashChecker();
	});
	//Loaded all DOM elements
});