js-minimal-android-swipe-detect
===============================

 - Minimal JS object for detecting touch/swipe via a callback function with arguments: direction and distance.
  - Only fired on touchend.
  - Works on PC/mac browsers as well.
  - Currently only tested on Chrome, FF, IE8, IE9, Android 4.2

## Implementation
```js
  var s = new uiSwipe( function( direction, distance ){
    console.log("Direction in Radians: "+ direction);
    console.log("Distance Swiped in pixels: "+ distance);
  });
```

### Direction arg
  [float] [radians](http://en.wikipedia.org/wiki/Radian)
   - Down: negative
   - Up: positive
   - Left: +/- pi
   - Right: 0
    
   So from Left, clockwise, it starts at pi, goes to 0 when right, -pi back left again.

## Methods
 - *pause* not yet implemented
 - *resume* not yet implemented
