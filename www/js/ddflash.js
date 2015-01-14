$(document).ready(function(){
	//Function Declarations

	 
	//Method to display Torch options based on availability
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
	
	//Method to turn off and turn on Torch
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
	$("#indicator").tap(lightOnOff);//Toggle switch to turn on and off torch light

	//Method to Check Flashlight Feature
	function flashChecker(){
		window.plugins.flashlight.available(displayOption);
	}
	document.addEventListener('deviceready',function(){
		//Device Ready

		flashChecker();//Checks for Flashlight availability
		StatusBar.show();
	});
	//Loaded all DOM elements
});