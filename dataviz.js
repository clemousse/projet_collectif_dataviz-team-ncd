//projet dataviz

//set the map with leaflet
let map = L.map("map", {
  zoomSnap: 0.1,
  renderer: L.svg(),
}).setView([0, 0], 1.6);

//set the tile openstreetmap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  minZoom: 1.6,
  maxZoom: 18,
  attribution: "© OpenStreetMap",
}).addTo(map);

//create a red polyline from an array of LatLng points => for the trajectory
let latlngs = [
  [
    [45.51, -122.68],
    [37.77, -122.43],
    [34.04, -118.2],
  ],
  [
    [40.78, -73.91],
    [41.83, -87.62],
    [32.76, -96.72],
  ],
];
let polyline = L.polyline(latlngs, { color: "red" }).addTo(map);

// zoom the map to the polyline
// map.fitBounds(polyline.getBounds());

// let corner1 = L.latLng(40.712216, -74.22655);
// let corner2 = L.latLng(40.774, -74.125);
// let bounds = L.latLngBounds(corner1, corner2);
// let imageUrl = './img-icon/iss.png';
// L.imageOverlay(imageUrl, bounds).addTo(map);

//iss icon on the map
let issIcon = L.icon({
  iconUrl: "./img-icon/iss.png",
  iconSize: [33, 30], // size of the icon => width/height
  //popupAnchor:[-3, -76] // point from which the popup should open relative to the iconAnchor
  //shadowSize:[50, 64], // size of the shadow
  //iconAnchor:[22, 94], // point of the icon which will correspond to marker's location
  //shadowAnchor:[4, 62],  // the same for the shadow
  //shadowUrl:'leaf-shadow.png'
});
L.marker([48.3607, 92.3166], { icon: issIcon }).addTo(map); //lat,long
