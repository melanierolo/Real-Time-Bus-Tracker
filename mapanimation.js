// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
];

// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1IjoibWVsYW5pZTAxMjUiLCJhIjoiY2t2bW03c21pZHJjZjJvbW5kN281d2U1MiJ9.t1xGblXyF1o88I61PXVmqw';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.104081, 42.365554],
  zoom: 14,
});

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
var marker = new mapboxgl.Marker({ color: 'red', rotation: 30 })
    .setLngLat([-71.091542, 42.358862])
    .addTo(map);

// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
  setTimeout(() =>{
    if (counter >= busStops.length) return; 
    marker.setLngLat(busStops[counter]); 
    counter++; 
    move( ) ; 
  },800);
  console.log(marker);
}

// Show list of all bus stops
function busStop1() {
new mapboxgl.Marker().setLngLat(busStops[0]).addTo(map);
console.log(marker);
}
function busStop2() {
  new mapboxgl.Marker().setLngLat(busStops[1]).addTo(map);
  console.log(marker);
  }
function busStop3() {
new mapboxgl.Marker().setLngLat(busStops[2]).addTo(map);
console.log(marker);
}
function busStop4() {
  new mapboxgl.Marker().setLngLat(busStops[3]).addTo(map);
  console.log(marker);
}
function busStop5() {
    new mapboxgl.Marker().setLngLat(busStops[4]).addTo(map);
    console.log(marker);
}
function busStop6() {
      new mapboxgl.Marker().setLngLat(busStops[5]).addTo(map);
      console.log(marker);
}
function busStop7() {
        new mapboxgl.Marker().setLngLat(busStops[6]).addTo(map);
        console.log(marker);
}
function busStop8() {
  new mapboxgl.Marker().setLngLat(busStops[7]).addTo(map);
  console.log(marker);
}
function busStop9() {
  new mapboxgl.Marker().setLngLat(busStops[8]).addTo(map);
  console.log(marker);
}
function busStop10() {
  new mapboxgl.Marker().setLngLat(busStops[9]).addTo(map);
  console.log(marker);
  }
function busStop11() {
    new mapboxgl.Marker().setLngLat(busStops[10]).addTo(map);
    console.log(marker);
}
function busStop12() {
new mapboxgl.Marker().setLngLat(busStops[11]).addTo(map);
console.log(marker);
}

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move };
}
