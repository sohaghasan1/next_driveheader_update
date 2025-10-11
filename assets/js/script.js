$(document).ready(function(){
  $(".carousel_block").owlCarousel({
    items: 1,
    dots: true,
    smartSpeed: 1500,
    loop: true,
  });
});

$(document).ready(function(){
  $(".ad_carousel").owlCarousel({
    items: 2,
    nav: true,
    smartSpeed: 500,
    loop: true,
  });
});


// toggle js animation 

$(document).ready(function () {
  $('.example5').click(function () {
    $('.example5').toggleClass("active");
    event.stopPropagation();
    // $('.menu-drop').slideToggle(600);
    // do stuff with menu here
  });
  $(document).click(function (e) {
    $('.example5').removeClass("active");
    // $('.menu-drop').slideUp(600);
    // undo stuff with menu here
  });
});

// filter 
  // Handle toggle groups (like Arrival, Price, Year)
  document.querySelectorAll(".toggle-group").forEach(group => {
    const buttons = group.querySelectorAll(".btn");
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("btn-danger", "active"));
        buttons.forEach(b => b.classList.add("btn-outline-secondary"));
        btn.classList.remove("btn-outline-secondary");
        btn.classList.add("btn-danger", "active");
      });
    });
  });


  // list - grid view js 

  document.addEventListener("DOMContentLoaded", function () {
      const toggleBtn = document.getElementById("toggleViewBtn");
      const viewIcon = document.getElementById("viewIcon");

      toggleBtn.addEventListener("click", function () {
        if (viewIcon.classList.contains("fa-border-all")) {
          viewIcon.classList.remove("fa-border-all");
          viewIcon.classList.add("fa-table-list");
        } else {
          viewIcon.classList.remove("fa-table-list");
          viewIcon.classList.add("fa-border-all");
        }
      });
    });



  document.addEventListener("DOMContentLoaded", function () {
    const countrySelect = document.getElementById("country");
    const countryBoxes = document.querySelectorAll(".country-info");

    countrySelect.addEventListener("change", function () {
      const selected = this.value;

      countryBoxes.forEach(box => {
        if (box.getAttribute("data-country") === selected) {
          box.classList.remove("d-none");
        } else {
          box.classList.add("d-none");
        }
      });
    });
  });


  // sorting button 
document.addEventListener("DOMContentLoaded", function () {
    const ascIcon = document.getElementById("ascIcon");
    const descIcon = document.getElementById("descIcon");

    let sortState = "none"; // "asc", "desc", "none"

    document.getElementById("sortToggle").addEventListener("click", function () {
      if (sortState === "none" || sortState === "desc") {
        sortState = "asc";
        ascIcon.classList.add("active");
        descIcon.classList.remove("active");
      } else {
        sortState = "desc";
        ascIcon.classList.remove("active");
        descIcon.classList.add("active");
      }

      // Optional: You can use sortState to handle real sorting later
      console.log("Current sort:", sortState);
    });
  });

  // pagination active class 

  document.addEventListener("DOMContentLoaded", function () {
    const paginationLinks = document.querySelectorAll(".search_page_pagination a");

    paginationLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        paginationLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
      });
    });
  });


  // select optios 

   $(document).ready(function() {
    $('.select2').select2({
      allowClear: true
    });
  });


  // filter toggle 

document.addEventListener("DOMContentLoaded", function () {
  const sectionMap = {
    "search-form-filter": "search_form_section",
    "sort_button": "sorting_section",
    "search_car": "search_by_car_card"
  };

  let currentVisible = null;

  Object.keys(sectionMap).forEach(buttonId => {
    const button = document.getElementById(buttonId);
    const sectionId = sectionMap[buttonId];
    const section = document.getElementById(sectionId);
    const wrapper = document.getElementById("wrap_" + sectionId);

    button.addEventListener("click", () => {
      // Close current section if it's not the same one
      if (currentVisible && currentVisible !== section) {
        const currentWrapper = document.getElementById("wrap_" + currentVisible.id);
        currentVisible.classList.remove("active");
        setTimeout(() => {
          currentVisible.classList.add("d-none");
          currentWrapper.classList.add("d-none");
        }, 400);
      }

      const isVisible = section.classList.contains("active");

      if (isVisible) {
        section.classList.remove("active");
        setTimeout(() => {
          section.classList.add("d-none");
          wrapper.classList.add("d-none");
        }, 400);
        currentVisible = null;
      } else {
        wrapper.classList.remove("d-none");
        section.classList.remove("d-none");
        setTimeout(() => {
          section.classList.add("active");
        }, 10);
        currentVisible = section;
      }
    });
  });
});


var wpAppClose = document.getElementById('wpClose');
var wpAppSec = document.getElementById('wa_img');

if (wpAppClose !== null)
    wpAppClose.addEventListener("click",function(){
        console.log("OK")
        document.getElementById('wa_img').style.display = "none"
});


// accordion and tabs 

//POTENZA var
var POTENZA = {};

 (function($){
  "use strict";

 /*************************
      Predefined Variables
*************************/
   var $window = $(window),
        $document = $(document),
        $body = $('body'),
        $countdownTimer = $('.countdown'),
        $counter = $('.counter');
/*************************
          Tabs
*************************/
 POTENZA.tabs = function () {
       var $tabsdata = $("#tabs li[data-tabs]"),
           $tabscontent = $(".tabcontent"),
           $tabsnav = $(".tabs li");

      $tabsdata.on('click', function () {
        $(this).parent().parent().find('.active').removeClass('active');
        $(this).parent().parent().find('.tabcontent').hide();
        var tab = $(this).data('tabs');
        $(this).addClass('active');
        $('#' + tab).fadeIn().show();
      });

      $tabsnav.on('click', function () {
          var  cur = $tabsnav.index(this);
          var elm =  $(this).parent().parent().find('.tabcontent:eq('+cur+')');
          elm.addClass("pulse");
          setTimeout(function() {
                elm.removeClass("pulse");
          }, 220);
      });
      $("li[data-tabs]").each(function() {
         $(this).parent().parent().find('.tabcontent').hide().filter(':first').show();
       });
   }

/*************************
      Accordion
*************************/
  POTENZA.accordion = function () {
     var   $acpanel = $(".accordion > .accordion-content"),
           $acsnav = $(".accordion > .accordion-title > a");

          $acpanel.hide().first().slideDown("easeOutExpo");
          $acsnav.first().addClass("active");
          $acsnav.on('click', function () {
              var $this = $(this).parent().next(".accordion-content");
              $acsnav.removeClass("active");
              $(this).addClass("active");
              $acpanel.not($this).slideUp("easeInExpo");
              $(this).parent().next().slideDown("easeOutExpo");
              return false;
        });
  }

/****************************************************
     POTENZA Window load and functions
****************************************************/

  //Document ready functions
    $document.ready(function () {

        POTENZA.tabs(),
        POTENZA.accordion()
    });

})(jQuery);


var mixer = mixitup('#blog_post');
var mixer = mixitup('#gallery', {
    selectors: {
      control: '.filter'
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("toggleFilter");
  const secondRow = document.getElementById("filter-row-2");

  btn.addEventListener("click", function (e) {
    e.preventDefault();
    secondRow.classList.toggle("show");
    btn.textContent = secondRow.classList.contains("show") ? "Close Filter" : "Open Filter";
  });
});