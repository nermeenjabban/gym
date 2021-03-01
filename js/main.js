
function initMap() {
    var Damascus = {lat: -25.344, lng: 131.036};
    var map = new google.maps.Map(
        document.querySelector(".map"), {zoom: 4, center: Damascus});
    var marker = new google.maps.Marker({position: Damascus, map: map});
  }

  $("#navbar a, .btn").on("click", function(event) {
    if(this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;
      $("html, body").animate({scrollTop: $(hash).offset().top - 100}, 800);
    }
  });
  
  
  
  
  window.addEventListener("scroll", function() {
    if(window.scrollY > 150) {
      document.querySelector("#navbar").style.opacity = 0.9;
    } else {
      document.querySelector("#navbar").style.opacity = 1;
    }
  });