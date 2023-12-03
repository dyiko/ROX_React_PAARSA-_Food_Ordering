async function loadMap() {
  // Replace 'YOUR_API_KEY' with your actual Google Maps API key
  const script = document.createElement("script");
  script.src =
    "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=geometry;";
  document.head.appendChild(script);

  script.onload = () => {
    initMap();
  };
}

let map;

async function initMap() {
  // The location of PAARSA Food Ordering new delhi
  const position = {
    lat: "28.6139",
    lng: "77.2090",
  };
  map = new google.maps.Map(document.querySelector(".google-map"), {
    zoom: 4,
    center: position,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    map: map,
    position: position,
    title: "PAARSA Food Ordering new delhi",
  });
}

loadMap();
