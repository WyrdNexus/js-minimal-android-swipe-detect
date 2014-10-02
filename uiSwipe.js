 /**
  *  uiSwipe - for touch and mobile
  *  
  *  Parameter: (object) swipeActions
  *     swipeUp: function(){}   ,
  *     swipeDown: function(){} ,
  *     swipeLeft: function(){} ,
  *     swipeUp: function(){}   ,
  *     swipeAll: function( direction, distance )
  */


function uiSwipe(swipeActions){
	
	this.pStart = [0,0];
	this.pStop = [0,0];
	this.distance = 0;
	this.direction = 0;
	this.minSwipeDist = document.documentElement.clientWidth/2;
	this.blnL = (typeof swipeActions.swipeLeft   === "function");
	this.blnR = (typeof swipeActions.swipeRight  === "function");
	this.blnU = (typeof swipeActions.swipeUp     === "function");
	this.blnD = (typeof swipeActions.swipeDown   === "function");
	this.blnA = (typeof swipeActions.swipeAll    === "function");
	
	var parentUI = this;
	document.addEventListener('touchstart', function(e){ parentUI.eStart(e); }, false);
	document.addEventListener('touchend', function(e)	{ parentUI.eEnd(e); }, false);
	//document.body.addEventListener('mousedown', function(e)	{ parentUI.eStart(e); }, false);
	//document.body.addEventListener('mouseup', function(e)	{ parentUI.eEnd(e); }, false);

	$("#tester2").html("uiSwipe");
	
	
	this.eStart = function(event){
		if (typeof event['targetTouches'] !== "undefined"){
			var touch = event.targetTouches[0];
			this.pStart = [touch.screenX, touch.screenY];
		} else {
			this.pStart = [event.screenX, event.screenY];
		}
		$("#tester2").html("eStart ("+ this.pStart[0] +","+ this.pStart[1] +")");
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
		
		$("#tester3").html("eEnd ("+ this.pStop[0] +","+ this.pStop[1] +")");
	};
	
	this.check = function(good){
		$("#tester4").html("check "+good);
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
		$("#tester4").html("dir:"+ this.direction.toFixed(2) +" dist:"+ this.distance.toFixed(2));
		
		if(  this.distance > this.minSwipeDist  ) {
			if (         this.blnL  &&  Math.abs(this.direction) > 2.3  ) {
			//	Left
				swipeActions.swipeLeft();
				
			} else if (  this.blnR  &&  Math.abs(this.direction) < 0.8  ) {
			//	Right
				swipeActions.swipeRight();
				
			} else if (  this.blnU  &&  this.direction < 0              ) {
			//	Up
				swipeActions.swipeUp();
				
			} else if (  this.blnD  &&  this.direction > 0              ) {
			//	Down
				swipeActions.swipeDown();
				
			} 
			
			if ( this.blnA ) {
			//  All
				swipeActions.swipeAll( this.direction, this.distance );
				
			}
			$("#tester1").html("DIR: "+ this.direction +"\n<br>DIST: "+ Math.round(this.distance));
		}
		
		this.clear();	
	};
	
	this.clear = function(){
		this.tStart = [0,0];
		this.tStop = [0,0];
		this.direction = 0;
		this.distance = 0;
	};
}


function objExp( obj ) {
    var str = '';
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            str += p + '::' + obj[p] + '\n<br>';
        }
    }
    return str;
}
