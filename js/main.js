/* <!-- hamburger-menu --> */
function show_silde() {
    var toggle_btn = document.getElementById("toggle_btn");
    var slide = document.getElementById("slide");
    if (toggle_btn.checked == true) {
        slide.style.display = "block";
    } else {
        slide.style.display = "none";
    }
}


/* <!-- accordion dropdown --> */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var add = this.firstElementChild.firstElementChild;
var sub = this.lastElementChild.lastElementChild;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      sub.style.display = "none";
      add.style.display = "block";
    } else {
      panel.style.display = "block";
      sub.style.display="block"
      add.style.display = "none";
    }

});
}


 // ------------- owlCarousel slider --------------

 // ------------- slider --------------

 $('.project_carousel').owlCarousel({
    loop: true,
    margin: 30,
    items: 5,
    // autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
    }

})

 $('.expertise_carousel').owlCarousel({
  rtl:true,
  // onChanged: handleCarouselChange,
    loop: true,
    margin: 30,
    items: 4,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
    }

})

var owl_content = document.getElementsByClassName("owl_content");

// // Add click events to your custom navigation
$('.my_owl-prev').click(function () {
  $('.owl-carousel').trigger('prev.owl.carousel');
});

$('.my_owl-next').click(function () {
  $('.owl-carousel').trigger('next.owl.carousel');
});




// ----------============tried====================
// // Add click events to your custom navigation

// function handleCarouselChange(event) {
//   var currentIndex = event.item.index||0;

//   // Log the index of the active item
//   console.log("Active item index:", currentIndex);

// //   var items=document.getElementsByClassName('owl_content_box')
// // if(items[currentIndex].className==`owl_content_box owl_content_box_${currentIndex}`){
// //   items[currentIndex].className='hllww'
// //   console.log(items[currentIndex].className='hllww');
// // }

// }


// let children = owl_content.children
// console.log(children);
 
// // Function to update content box visibility
// function updateContentBoxVisibility() {
//   var currentIndex = $('.owl-carousel').find('.owl-item.active').index();

//   // Reset display for all content boxes
//   $('.owl_content').css('display', 'none');

//   // Show the corresponding content box
//   $('.owl_content').eq(currentIndex).css('display', 'block');
// }

// // Apply only on small devices
// if (window.matchMedia('(max-width: 767px)').matches) {
//   // Event handler for the 'prev' button
//   $('.my_owl-prev').click(function () {
//     $('.owl-carousel').trigger('prev.owl.carousel');
//     updateContentBoxVisibility();
//   });

//   // Event handler for the 'next' button
//   $('.my_owl-next').click(function () {
//     $('.owl-carousel').trigger('next.owl.carousel');
//     updateContentBoxVisibility();
//   });

//   // Initial content box visibility setup
//   updateContentBoxVisibility();
// }


