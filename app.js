// $(document).ready(function() {

//     let $textBox = $('#firstBox') // make box that moves a variable 
//     let textBoxTop = $textBox.offset().top; // stores how far from the top of the page the textbox is along the scroll path
//     let textBoxBottom = $textBox.offset().top + $textBox.outerHeight(); // stores how far from the bottom of the page the textbox is along the scroll path
//     let textBoxCenter = $textBox.offset().top + ($textBox.outerHeight() / 2)  //stores the center of the text box to the middle of the viewport
//     let $image = $('img');

//     $(window).on('scroll', (event) => {
    
//       let $window = $(window); //the window height is what you see
//       let scrollTop = $window.scrollTop(); //how many pixels down from the top of the page we've scrolled
//       let scrollBottom = $window.scrollTop() + $(window).innerHeight(); //stores where you are from the bottom of the page 
//       let scrollCenter = $window.scrollTop() + ($window.innerHeight() / 2);
      
//       console.log(scrollTop, textBoxTop);


//       if (scrollTop >= textBoxTop) {
//         $textBox.addClass('visible');
//         $image.addClass('active');
//       } else {
//         $textBox.removeClass('visible')
//         $image.removeClass('active');
//       }
    
//     })
      

// })

// //stacking images on top of each other in it's own div to transition and fade into each other then wire it up to go through scroll detection
// // when that specific text box hits the point of the trigger 

// //event that hires on scroll - you'll read the distance between the top of the viewport and the top of the page (as you scroll down the number gets bigger)
// //trying to figure how to tell when the top of the text box and the top of the viewport when you scroll
// //all that is is a calculation between viewport to page top and textbox top to page top




