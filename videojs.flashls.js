(function(window, videojs, undefined){
  'use strict';

  videojs.flashls = function(options){
    options = options || {};

    // set the swf url to the flashls fork of video-js.swf
    //  to download the forked swf, go here: https://github.com/mangui/video-js-swf
    if(options.swfUrl){
      videojs.options.flash.swf = options.swfUrl;
    }

    videojs.options.flash.flashVars = videojs.options.flash.flashVars || {};

    // v0.4.1.1 of mangui/video-js.swf is broken when capleveltostage=true, where it only plays the first level in the
    //  playlist regardless of the bandwidth it can handle, so we set capleveltostage=false.
    //  more info can be found here: https://github.com/mangui/flashls/issues/351
    videojs.options.flash.flashVars.hls_capleveltostage = false;

    // with v0.4.1.1 the seeking would jump pretty far back, so switching the mode to be more accurate versus using
    //   the closest keyframe
    videojs.options.flash.flashVars.hls_seekmode = "ACCURATE";

    // we need to set "flash" as a higher priority tech than "html5", so that when
    //  videojs boots up, it tries to handle the m3u8 source with the flash handler
    videojs.options.techOrder = ['flash','html5'];

    // register a source handler for m3u8 files, so that videojs knows the flashls' video-js.swf
    //  can handle playing m3u8 files.
    videojs.Flash.registerSourceHandler({
      canHandleSource: function(source){
        return source.type === 'application/x-mpegURL' ? 'maybe' : '';
      },
      handleSource: function(source, tech){
        tech.setSrc(source.src);
      }
    });

    return videojs;
  };

})(window, window.videojs, document);