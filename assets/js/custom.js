// owl carousel script 

$(document).ready(function(){
    $(".banner_coursel").owlCarousel({
        items:1,
        nav:false,
        navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
        loop:true,
        smartSpeed:1000,
        autoplay:true,
        responsive : {
          // breakpoint from 768 up
          768 : {
            nav:true,
             autoplay:true
          }
      }
    });
});


// range slider 

$(function() {
    $("#year-range").slider({
      step: 1,
      range: true, 
      min: 1995, 
      max: 2024, 
      values: [1995, 2024], 
      slide: function(event, ui)
      {$("#priceRange").val(ui.values[0] + " - " + ui.values[1]);}
    });
    $("#priceRange").val($("#year-range").slider("values", 0) + " - " + $("#year-range").slider("values", 1));
    
  });

  $(function() {
    $("#price-range").slider({
      step: 1,
      range: true, 
      min: 120, 
      max: 10800, 
      values: [120, 10800], 
      slide: function(event, ui)
      {$("#yearRange").val(ui.values[0] + " - " + ui.values[1]);}
    });
    $("#yearRange").val($("#price-range").slider("values", 0) + " - " + $("#price-range").slider("values", 1));
    
  });
  


  var wpAppClose = document.getElementById('wpClose');
var wpAppSec = document.getElementById('wa_img');

if (wpAppClose !== null)
    wpAppClose.addEventListener("click",function(){
        console.log("OK")
        document.getElementById('wa_img').style.display = "none"
});


// testimonial carousel 
jQuery(document).ready(function($) {
  "use strict";
  //  TESTIMONIALS CAROUSEL HOOK
  $('#customers-testimonials').owlCarousel({
      loop: true,
      center: true,
      items: 2,
      margin: 0,
      autoplay: false,
      dots:true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1170: {
          items: 2
        }
      }
  });
});




