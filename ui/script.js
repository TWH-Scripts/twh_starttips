


var responsiveSlider = function() {
  var quotes = [ 
    "Don't drink and ride",
    "Sometimes it takes only one act of kindness and caring to change a person's life.",
    "Need some information? Have a look at the local bulletin board"
    // Add more quotes as needed 
  ];
    
  
    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  
    shuffleArray(quotes);
  
    var slider = document.getElementById("slider");
    var slideList = document.getElementById("slideWrap");
  
    // Dynamically generate slides
    quotes.forEach(function(quote) {
      var li = document.createElement("li");
      li.textContent = quote;
      slideList.appendChild(li);
    });
  
    var items = slideList.querySelectorAll("li").length;
    var count = 1;
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
  
    var updateSlidePosition = function() {
      var slideWidth = slider.offsetWidth;
      slideList.style.left = "-" + (count - 1) * slideWidth + "px";
    };
  
    window.addEventListener('resize', updateSlidePosition);
  
    var autoSlideInterval;
    var slideIntervalTime = 8000;
  
    var startAutoSlide = function() {
      autoSlideInterval = setInterval(nextSlide, slideIntervalTime);
    };
  
    var resetAndStartAutoSlide = function() {
      clearInterval(autoSlideInterval);
      startAutoSlide();
    };
  
    var prevSlide = function() {
      if (count > 1) {
        count--;
      } else {
        count = items;
      }
      updateSlidePosition();
      resetAndStartAutoSlide();
    };
  
    var nextSlide = function() {
      if (count < items) {
        count++;
      } else {
        count = 1;
      }
      updateSlidePosition();
      resetAndStartAutoSlide();
    };
  
    next.addEventListener("click", nextSlide);
    prev.addEventListener("click", prevSlide);
  
    startAutoSlide();
    updateSlidePosition(); // Initial position update
};

window.addEventListener('message', function (event) {
    $('body').animate({ opacity: event.data.show ? 1 : 0 }, 500);
    switch (event.data.action) {
        case 'startup':
            console.log("startup js");
            //responsiveSlider();
    }
});

window.onload = function() {
    responsiveSlider();
  }