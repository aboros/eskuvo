$(function () { // wait for document ready

  // init
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
    }
  });


  // get all slides
  var elements = document.querySelectorAll(".fader")
/*
  // create scene for every slide
  for (var i=0; i<elements.length; i++) {
    new ScrollMagic.Scene({
      triggerElement: elements[i],
      offset: 100
    })
    .setVelocity(elements[i], {opacity: 1}, {duration: 800})
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: elements[i],
      offset: -100
    })
    .setVelocity(elements[i], {opacity: 0}, {duration: 800})
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
  }
*/
/*
  new ScrollMagic.Scene({
    triggerElement: "#s-1",
  })
  .setVelocity("#header", {fontSize: "14px"}, {duration: 400})
  .addIndicators()
  .addTo(controller);
*/
});
