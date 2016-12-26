/*
 * Animated Scrolling with jQuery 1.2
 * http://www.learningjquery.com/2007/09/animated-scrolling-with-jquery-12
 *
 * (c) Copyright 2006&ndash;2010 Learning jQuery and participating authors.
 * Creative Commons &mdash; Attribution-ShareAlike 2.5 Generic
 * http://creativecommons.org/licenses/by-sa/2.5/
 */
$(document).ready(function(){
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000, 'easeInOutExpo');
       return false;
      }
    }
  });
});

