$(document).ready(function () {
    $('.ba-hero-slider').slick({
        speed: 2000,
        autoplay: true,
        arrows: false,
        dots: true,
        fade: true,
        cssEase: 'linear',
    });

    $('.ba-news-slider').slick({
        speed: 1500,
        autoplay: true,
        dots: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    });

    $('.ba-btn').hover(
        function () {
            $(this).addClass('animated rubberBand');
        },
        function () {
            $(this).removeClass('animated rubberBand');
        });

})

$(".ba-project__address, .ba-contacts__address").click(function(e){
    e.preventDefault();
})

$(".ba-menu__link").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('html').animate({ scrollTop: destination }, 1500);
});

$(".ba-hero__btn").click(function () {
    var destination = $('#projects').offset().top;
    $('html').animate({ scrollTop: destination }, 1000);
});

var map;
function initMap() {
    let coordinates = {lat: 40.6605757, lng: -73.8962152};
    let location = {lat: 40.675947, lng: -73.902180};

    map = new google.maps.Map(document.getElementById('map'), 
    {
        center: coordinates,
        zoom: 13.0,
        styles:[
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.business",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.local",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            }
          ],
          
    });

    var marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: "img/Pin.png",
      });

}