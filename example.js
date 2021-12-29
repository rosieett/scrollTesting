// MOVING ONE TEXT BOX AT A TIME

//make text box a variable
let $textBox = $('#firstBox')
let textBoxTop = $textBox.offset().top;
let textBoxBottom = $textBox.offset().top + $textBox.outerHeight();
let textBoxCenter = $textBox.offset().top + ($textBox.outerHeight() / 2)

$(window).on('scroll', (event) => {

  let $window = $(window);
  let scrollTop = $window.scrollTop();
  let scrollBottom = $window.scrollTop() + $(window).height();
  let scrollCenter = $window.scrollTop() + ($window.height() / 2)

  if (scrollCenter >= textBoxTop) {
    $textBox.addClass('visible')
  } else {
    $textBox.removeClass('visible')
  }

})

// NONE SHOULD BE VISIBLE - OPACITY 0 TO START, add in a class visible so that it shows up to that scroll point and the jquery controls whats visible and hwats not
// position absolute
//last item for zindex for top to bottom - the last item in the div is on top so class active 
// 3 items your stacking order where 3 is on top and 1 is on the bottom
// if you add class: active to image 1 and give it a high zindex becomes 1, 3, 2 - because they have the natural stacking order - be aware with stacking order

// CSS

main { padding: 800px 60px 500px 60px; }

#text-we-care-about {
  padding: 50px;
 }

.visible {
  color: red;
}

//HTML
<main>

<div id="text-we-care-about">

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et nibh nec felis volutpat lacinia quis non leo. Vivamus
        sit amet ex velit. Nullam sollicitudin ut justo sed ullamcorper. Proin fermentum ullamcorper nisl, ac semper lacus porta
        non. Quisque porta purus eu neque egestas, et cursus libero maximus. Curabitur nec egestas erat. Aenean enim tortor,
        blandit eu mattis eget, maximus ac lorem. Nunc pellentesque mattis scelerisque. Pellentesque posuere commodo dui, eu
        sodales velit finibus et. In quis tortor rutrum, faucibus diam eget, fermentum risus. Proin maximus interdum bibendum.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque a hendrerit
        ligula, ac rhoncus risus. Integer et volutpat risus. Ut laoreet facilisis egestas. Integer ullamcorper vehicula arcu
        quis finibus.</p>
</div>

</main>

//use javacscript to pair arrays from the paragraph to the images