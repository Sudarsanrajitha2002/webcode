(function ($) {  "use strict";  /* ..............................................      Loader  ................................................. */  $(window).on("load", function () {    $(".preloader").fadeOut();    $("#preloader").delay(550).fadeOut("slow");    $("body").delay(450).css({      overflow: "visible",    });  });  /* ..............................................      Navbar Collapse on Click  ................................................. */  $(".navbar-nav .nav-link").on("click", function () {    if ($(".navbar-toggler").is(":visible")) {      $(".navbar-collapse").collapse("hide");    }  });  /* ..............................................      Fixed Menu on Scroll  ................................................. */  $(window).on("scroll", function () {    if ($(this).scrollTop() > 50) {      $(".top-header").addClass("fixed-menu");    } else {      $(".top-header").removeClass("fixed-menu");    }  });  /* ..............................................      Properties Filter  ................................................. */  var $container = $(".container");  $container.imagesLoaded(function () {    var $grid = $(".properties-list").isotope({      itemSelector: ".properties-grid",    });    $(".properties-menu").on("click", "button", function () {      $(this).addClass("active").siblings().removeClass("active");      var filterValue = $(this).attr("data-filter");      $grid.isotope({ filter: filterValue });    });  });  /* ..............................................      Gallery Popup  ................................................. */  $(document).ready(function () {    $(".popup-gallery").magnificPopup({      delegate: "a",      type: "image",      tLoading: "Loading image #%curr%...",      mainClass: "mfp-img-mobile",      gallery: {        enabled: true,        navigateByImgClick: true,        preload: [0, 1], // Preload 0 before current, and 1 after current image      },      image: {        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',        titleSrc: function (item) {          return item.el.attr("title") + "<small>by Marsel Van Oosten</small>";        },      },    });  });  /* ..............................................      Owl Carousel  ................................................. */  $(document).ready(function () {    $(".owl-carousel").owlCarousel({      loop: true,      margin: 10,      dots: false,      responsiveClass: true,      responsive: {        0: {          items: 1,          nav: true,        },        600: {          items: 3,          nav: false,        },        1000: {          items: 4,          nav: true,          loop: false,          margin: 15,        },      },    });  });  /* ..............................................      Scroll to Top  ................................................. */  $(document).ready(function () {    $(window).scroll(function () {      if ($(this).scrollTop() > 100) {        $("#scroll-to-top").fadeIn();      } else {        $("#scroll-to-top").fadeOut();      }    });    $("#scroll-to-top").on("click", function () {      $("html, body").animate({ scrollTop: 0 }, 600);      return false;    });  });  /* ..............................................      Smooth Scroll  ................................................. */  $('a[href*="#"]:not([href="#"])').on("click", function () {    if (      location.pathname.replace(/^\//, "") ===        this.pathname.replace(/^\//, "") ||      location.hostname === this.hostname    ) {      var target = $(this.hash);      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");      if (target.length) {        $("html, body").animate(          {            scrollTop: target.offset().top - 65,          },          1000        );        return false;      }    }  });  /* ..............................................      Modal for Covering Areas  ................................................. */  const coveringAreas = {    Waterproofing: `      <ul>        <li>Roofs</li>        <li>Foundations</li>        <li>Underground Basements</li>        <li>Swimming Pools</li>        <li>Balconies</li>        <li>Terraces</li>        <li>Water Tanks</li>        <li>Retaining Walls</li>        <li>Wet Areas (Kitchens, Bathrooms)</li>      </ul>    `,    Painting: `      <ul>        <li>Ceilings</li>        <li>Walls (Interior and Exterior)</li>        <li>Fences and Gates</li>        <li>Furniture/Custom Woodwork</li>        <li>Metal Structures</li>        <li>Decorative Painting</li>        <li>Industrial Coatings</li>      </ul>    `,    Titaniums: `      <ul>        <li>Flooring Applications</li>        <li>Wall Claddings</li>        <li>Countertops</li>        <li>Industrial Use (Factories)</li>        <li>Custom Decor</li>        <li>Heavy-Duty Stairs</li>      </ul>    `,    Plumbing: `      <ul>        <li>Toilets</li>        <li>Kitchen Sinks</li>        <li>Shower Installations</li>        <li>Water Heaters</li>        <li>Drainage Systems</li>        <li>Water Supply Systems</li>        <li>Grey Water Recycling Systems</li>      </ul>    `,    Wiring: `      <ul>        <li>Lighting Systems</li>        <li>Power Outlets</li>        <li>Fans and Air Conditioning</li>        <li>Backup Generators</li>        <li>Switchboard Installations</li>        <li>Data and Networking Cabling</li>      </ul>    `,    "Electricians Works": `      <ul>        <li>Home Automation Systems</li>        <li>Electric Vehicle (EV) Charger Installation</li>        <li>Circuit Breakers and Fuse Systems</li>        <li>Solar Panel Integration</li>        <li>Surge Protection Systems</li>        <li>Security Systems (CCTV, Alarms)</li>      </ul>    `,    Gutters: `      <ul>        <li>Rainwater Harvesting</li>        <li>Downspouts</li>        <li>Gutter Guards Installation</li>        <li>Custom Gutters for Unique Roofs</li>        <li>Fascia Board Replacements</li>      </ul>    `,    "Steel Works": `      <ul>        <li>Custom Railings</li>        <li>Gates and Grills</li>        <li>Steel Roof Structures</li>        <li>Industrial Shelving</li>        <li>Safety Barriers</li>        <li>Steel Fencing</li>      </ul>    `,    "Aluminum Works": `      <ul>        <li>Windows and Sliding Doors</li>        <li>Partition Walls</li>        <li>Shop Fronts</li>        <li>Curtain Walls</li>        <li>Canopies and Awnings</li>      </ul>    `,    Tiling: `      <ul>        <li>Kitchens</li>        <li>Outdoor Patios</li>        <li>Swimming Pools</li>        <li>Driveways</li>        <li>Staircases</li>        <li>Fireplace Surrounds</li>      </ul>    `,  };  function showModal(category) {    document.getElementById("modalTitle").innerText = category;    document.getElementById("modalContent").innerHTML = coveringAreas[category];    document.getElementById("infoModal").style.display = "block";  }  function closeModal() {    document.getElementById("infoModal").style.display = "none";  }  // Attach event listeners to the gallery boxes  $(document).ready(function () {    $(".box-gallery").on("click", function () {      const category = $(this).find(".title").text();      showModal(category);    });    // Close modal    $(".close").on("click", closeModal);  });})(jQuery);