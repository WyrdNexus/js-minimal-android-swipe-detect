js-minimal-android-swipe-detect
===============================

 - Minimal JS object for detecting touch/swipe via a callback function with arguments: direction and distance.
  - Only fired on touchend.
  - Works on PC/mac browsers as well.
  - Currently only tested on Chrome, FF, IE8, IE9, Android 4.2

## Implementation
```js
  var s = new uiSwipe({
   // optional parameters - see sample.html
   swipeRight: function(){
    alert("Swiped Right!");
   },
   minDistance: 100,  // sets Minimum Distance of swipe to ~100px
   mouseSwipe: true   // enables detection for mouse instead of just touch
  });
```

## Parameters
 swipeRight func()
 swipeLeft  func()
 swipeUp    func()
 swipeDown  func()
 swipeAll   func(  (radians)direction, (pixels)distance  )
 minDistance  (number) [val] > 1 (pixels) -OR- [val] < 1 (percent of page width)
 mouseSwipe   (bool) default:false  only detect touch 

## Methods
 - *pause* not yet implemented
 - *resume* not yet implemented
