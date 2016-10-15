/*
 * Animate at waypoint, requires jQuery
 */

var inview = new Waypoint.Inview({
  element: $('#inview-example')[0],
  enter: function(direction) {
    console.log('Enter triggered with direction ' + direction)
  },
  entered: function(direction) {
    console.log('Entered triggered with direction ' + direction)
  },
  exit: function(direction) {
    console.log('Exit triggered with direction ' + direction)
  },
  exited: function(direction) {
    console.log('Exited triggered with direction ' + direction)
  }
})
$(function(){

// var waypoint = new Waypoint({
//   element: document.getElementById('waypoint'),
//   handler: function(direction) {
//     console.log('Scrolled to waypoint!')
//   },
//   offset: 128
// })


  // function onScrollInit(items, trigger) {
  //   items.each(function() {
  //     var osElement = $(this),
  //       osAnimationClass = osElement.attr('data-os-animation'),
  //       osAnimationDelay = osElement.attr('data-os-animation-delay');
  //       osElement.css({
  //         '-webkit-animation-delay':  osAnimationDelay,
  //         '-moz-animation-delay':     osAnimationDelay,
  //         'animation-delay':          osAnimationDelay
  //       });
  //
  //     var osTrigger = (trigger) ? trigger : osElement;
  //     osTrigger.waypoint(function(){
  //       osElement.addClass('animated').addClass(osAnimationClass);
  //       console.log(osElement);
  //     }, {
  //       // triggerOnce: true,
  //       // context:"document.body",
  //       offset: '10%;'
  //     });
  //   });
  // }

  // onScrollInit($('.c-band'));

});
