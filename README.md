js-minimal-android-swipe-detect
===============================

 - Minimal JS object for detecting touch/swipe via a callback function with arguments: direction and distance.
  - Only fired on touchend.
  - Works on PC/mac browsers as well.
  - Currently only tested on Chrome, FF, IE8, IE9, Android 4.2

## Simple Instantiation
```js
var swp = new uiSwipe({
   swipeRight: function(){ 
       alert("swipeRight!");
   }
}
```

## Configurable Implementation
```js
var swp;

if (typeof uiSwipe !== "undefined"){
    swp = new uiSwipe({
      	minDistance: 0.1,
      	mouseSwipe: true,

       swipeUp: function(){ 
           alert("swipeUp!");
       },

       swipeRight: function(){ 
           alert("swipeRight!");
       },

       swipeAll: function(dir, dist){
           var direction = "none";
           if (Math.abs(dir) > 2.3) {
               var direction = "Left";
               
           } else if (dir > 0) {
               var direction = "Down";
               
           }
           alert("DIR: "+ direction +"\n<br>DIST: "+ Math.round(dist));
       }
        
    });
}
```

## Parameters
 - swipeRight func()
 - swipeLeft  func()
 - swipeUp    func()
 - swipeDown  func()
 - swipeAll   func(  (radians)direction, (pixels)distance  )
 - minDistance  (number) [val] > 1 (pixels) -OR- [val] < 1 (percent of page width)
 - mouseSwipe   (bool) default:false  only detect touch 

## Methods
 - *pause* not yet implemented
 - *resume* not yet implemented
