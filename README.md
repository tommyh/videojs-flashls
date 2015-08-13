# videojs-flashls

## Introduction

The [flashls project](https://github.com/mangui/flashls) brings HLS support to many video players (flowplayer, videojs, osmf, etc).
It has support for videojs, but it takes some effort to wire it up.  This plugin makes the integration easier.

## Installation

1. Download the fork of video-js.swf created for flashls: [https://github.com/mangui/video-js-swf/blob/master/dist/video-js.swf]

  Why? For flashls to work with videojs, [mangui](https://github.com/mangui) has made a fork of the
  [video-js.swf](https://github.com/mangui/video-js-swf) which adds in HLS support.

  To see the flashls/videojs demo, go [here](http://www.flashls.org/videojs/flash_demo.html)

2. Install the `videojs.flashls.js` script in your application.


## Usage

All you need todo is call the `flashls` plugin and pass it the url for the `video-js.swf` asset.

Warning: you MUST initialize the `flashls` plugin before you initialize your video player, otherwise the plugin won't work.
Why?  When you initialize your video player, it examines your video sources and determines what player tech to use.
The `flashls` plugin adds a tech adapter to videojs, so this must happen before the player determines what player tech to use.


```js
// init the flashls plugin
videojs.flashls({swfUrl: "http://localhost:3000/path/to/flashls/video-js.swf"});

// init your player
videojs("video_id", {}).ready(function(){
	console.log("player is ready!");
});
```


## TODO

* Allow the user to pass in/override "hls_*" configuration options
* Commonjs/browserify support
* Automated tests: unit tests (karma + mocha) + integration (sauce + selenium + different versions of videojs)
* npm and bower support
