	jsLoad('https://code.jquery.com/jquery-1.11.1.min.js');
	jsLoad('uiSwipe.js');
	
	document.onload = function(){
		if (typeof uiSwipe !== "undefined"){
		  var consoleElem = document.createElement('div');
		  consoleElem.id = "tester1";
		  document.body.appendChild(consoleElem);
		  
			var direction = "none";
			
			var swp = new uiSwipe(
				function(dir, dist){
					if (Math.abs(dir) > 2.3) {
						var direction = "Left";
						
					} else if (Math.abs(dir) < 0.8) {
						var direction = "Right";
						
					} else if (dir < 0) {
						var direction = "Up";
						
					} else if (dir > 0) {
						var direction = "Down";
						
					}
					$("#tester1").html("DIR: "+ direction +"\n<br>DIST: "+ Math.round(dist));
				}
			);
		}
	});
	
function jsLoad( path ){
	var s = document.createElement('script');
  s.src = path;
  document.head.appendChild(s);
}
