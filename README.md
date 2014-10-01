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
  [float]
   - negatives are down
   - positives are up
   - +/- pi is left, 0 is right


method *pause* not yet implemented
method *resume* not yet implemented
