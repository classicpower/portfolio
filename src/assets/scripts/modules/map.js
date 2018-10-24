const GoogleMapsLoader = require('google-maps');
GoogleMapsLoader.KEY = 'AIzaSyBw6BYEWm9ft20VkdRBtctm5pTSccf52Ro';

GoogleMapsLoader.load(function (google) {
  const map = new google.maps.Map(el, options);
  // const image = {
  //   url: "assets/images/icons/sprite.svg#map_marker",
  //   size: new google.maps.Size(50, 40)
  // };
  var markerIcon = {
    url: 'assets/images/icons/sprite.svg#map_marker',
    scaledSize: new google.maps.Size(50, 40),
    anchor: new google.maps.Point(20, 40)
  };
  new google.maps.Marker({
    position: { lat: 59.97691746, lng: 30.33769971 },
    map: map,
    icon: markerIcon,
    title: 'Я живу на Лесной'
  });
});
const el = document.querySelector('.contacts__map');
const options = {
  zoom: 16,
  center: { lat: 59.97691746, lng: 30.33769971 },
  styles: [
    {
      featureType: "all",
      elementType: "labels.text.fill",
      stylers: [
        {
          saturation: 36
        },
        {
          color: "#333333"
        },
        {
          lightness: 40
        }
      ]
    },
    {
      featureType: "all",
      elementType: "labels.text.stroke",
      stylers: [
        {
          visibility: "on"
        },
        {
          color: "#ffffff"
        },
        {
          lightness: 16
        }
      ]
    },
    {
      featureType: "all",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#fefefe"
        },
        {
          lightness: 20
        }
      ]
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#fefefe"
        },
        {
          lightness: 17
        },
        {
          weight: 1.2
        }
      ]
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f5f5"
        },
        {
          lightness: 20
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f5f5"
        },
        {
          lightness: 21
        }
      ]
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#dedede"
        },
        {
          lightness: 21
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#ffffff"
        },
        {
          lightness: 17
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#ffffff"
        },
        {
          lightness: 29
        },
        {
          weight: 0.2
        }
      ]
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#ffffff"
        },
        {
          lightness: 18
        }
      ]
    },
    {
      featureType: "road.local",
      elementType: "geometry",
      stylers: [
        {
          color: "#ffffff"
        },
        {
          lightness: 16
        }
      ]
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [
        {
          color: "#f2f2f2"
        },
        {
          lightness: 19
        }
      ]
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#e9e9e9"
        },
        {
          lightness: 17
        }
      ]
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#86a77a"
        }
      ]
    }
  ],
  mapTypeControl: false,
  zoomControl: true,
  streetViewControl: true,
  fullscreenControl: true,
};
