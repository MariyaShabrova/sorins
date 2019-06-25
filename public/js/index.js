/* Bs carousel interval below keeps motion to a minumum on the page when scroll magic is also integrated. Alternatively, remove data-ride="carousel" to stop automatic sliding. 
NOTE:when users interact with the carousel, by default Bs starts slide animations when next or indicators are clicked or tapped, regardless if the data-ride="carousel" is not present */
$('.carousel').carousel({
  interval: 10000
})

// init/setup var for ScrollMagic controller
var controller = new ScrollMagic.Controller();

  // loop through each .project element
  $('.milestone').each(function(){
    console.log(this);
    // build a scene
    var scene = new ScrollMagic.Scene({
      triggerElement: this.children[0],
      duration:'60%' // responsive duration vs. viewport sizes
    })
    .setClassToggle(this, 'fade-in')
    .addIndicators({
      name:'fade scene'
    }) // this requires plugin to display indicators for debugging
   .addTo(controller);                     
});

// FOR LATER: build tween options
// uses the GSAP greensock animation plugin for tweens
// along with use of the scrollmagic plugin