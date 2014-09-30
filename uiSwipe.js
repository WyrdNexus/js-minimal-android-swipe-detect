// JavaScript Document
// fn = function( dir, dist )
//  dir:
//	       +- pi
//   -pi/2  x   pi/2
//          0
//	dist:
//		pixels

function uiSwipe(fn){
	this.pStart = [0,0];
	this.pStop = [0,0];
	this.distance = 0;
	this.direction = 0;
	var parentUI = this;
	
	this.eStart = function(event){
		if (typeof event['targetTouches'] !== "undefined"){
			var touch = event.targetTouches[0];
			this.pStart = [touch.screenX, touch.screenY];
		} else {
			this.pStart = [event.screenX, event.screenY];
		}
	};
	
	this.eEnd = function(event){
		if (typeof event['changedTouches'] !== "undefined"){
			var touch = event.changedTouches[0];
			parentUI.pStop = [touch.screenX, touch.screenY];
			this.check(1);
		} else {
			this.pStop = [event.screenX, event.screenY];
			this.check(1);	
		}
	};
	
	document.body.addEventListener('touchstart', function(e){ parentUI.eStart(e); }, false);
	document.body.addEventListener('touchend', function(e){ parentUI.eEnd(e); }, false);
	document.body.addEventListener('mousedown', function(e){ parentUI.eStart(e); }, false);
	document.body.addEventListener('mouseup', function(e){ parentUI.eEnd(e); }, false);
	
	this.check = function(good){
		
		if (good) {
			var x = (this.pStop[0] - this.pStart[0]); // change in x
			var y = (this.pStop[1] - this.pStart[1]); // change in y
			
			this.direction = Math.atan2( y, x ); // radians
			
			//	pythagorean     distance (hypotenuse) = sqrt( a^2 + b^2 )  WHERE a = change in X, b - change in Y
			this.distance = Math.sqrt( Math.abs( x * x + y * y ) );
			this.final();
		} else {
			this.clear();
		}
	};
	
	this.final = function(){
		fn(this.direction, this.distance);
		this.clear();	
	};
	
	this.clear = function(){
		this.tStart = [0,0];
		this.tStop = [0,0];
		this.direction = 0;
		this.distance = 0;
	};
}
