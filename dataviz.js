//projet dataviz

//set the map with leaflet
<<<<<<< HEAD
let map = L.map('map', {
    zoomSnap: 0.1,
    renderer: L.svg()
=======
let map = L.map("map", {
  zoomSnap: 0.1,
  renderer: L.svg(),
>>>>>>> 4e484d64602470978c470b373caacb22d7d35fea
}).setView([0, 0], 1.6);

//set the tile openstreetmap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  minZoom: 1.6,
  maxZoom: 18,
  attribution: "© OpenStreetMap",
}).addTo(map);

let latlngs = [];
let issIcon = L.icon({
<<<<<<< HEAD
    iconUrl: './img-icon/iss.png',
    iconSize: [33, 30] // size of the icon => width/height
    //popupAnchor:[-3, -76] // point from which the popup should open relative to the iconAnchor
    //shadowSize:[50, 64], // size of the shadow
    //iconAnchor:[22, 94], // point of the icon which will correspond to marker's location
    //shadowAnchor:[4, 62],  // the same for the shadow
    //shadowUrl:'leaf-shadow.png'
=======
  iconUrl: "./img-icon/iss.png",
  iconSize: [33, 30], // size of the icon => width/height
  //popupAnchor:[-3, -76] // point from which the popup should open relative to the iconAnchor
  //shadowSize:[50, 64], // size of the shadow
  //iconAnchor:[22, 94], // point of the icon which will correspond to marker's location
  //shadowAnchor:[4, 62],  // the same for the shadow
  //shadowUrl:'leaf-shadow.png'
>>>>>>> 4e484d64602470978c470b373caacb22d7d35fea
});
let marker = L.marker([48.856614, 2.3522219], { icon: issIcon });

async function callIss() {
<<<<<<< HEAD
    let response = await fetch('http://api.open-notify.org/iss-now.json');
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body and parse it => json object
        map.removeLayer(marker);
        let json = await response.json();
        let lat = json.iss_position.latitude;
        let lon = json.iss_position.longitude;
        latlngs.push([lat, lon]);
        //console.log(latlngs);
        // geolocalize iss with lat and long and the icon
        marker = L.marker([lat, lon], { icon: issIcon });
        map.addLayer(marker);//lat,long

        //create a red polyline from an array of LatLng points => for the trajectory
        let polyline = L.polyline(latlngs, { color: 'red' }).addTo(map);
=======
  let response = await fetch("http://api.open-notify.org/iss-now.json");
  if (response.ok) {
    // if HTTP-status is 200-299
    // get the response body and parse it => json object
    map.removeLayer(marker);
    let json = await response.json();
    let lat = json.iss_position.latitude;
    let lon = json.iss_position.longitude;
    latlngs.push([lat, lon]);
    //console.log(latlngs);
    // geolocalize iss with lat and long and the icon
    marker = L.marker([lat, lon], { icon: issIcon });
    map.addLayer(marker); //lat,long

    //create a red polyline from an array of LatLng points => for the trajectory
    let polyline = L.polyline(latlngs, { color: "red" }).addTo(map);
>>>>>>> 4e484d64602470978c470b373caacb22d7d35fea

    // zoom the map to the polyline
    // map.fitBounds(polyline.getBounds());
    // let corner1 = L.latLng(40.712216, -74.22655);
    // let corner2 = L.latLng(40.774, -74.125);
    // let bounds = L.latLngBounds(corner1, corner2);
    // let imageUrl = './img-icon/iss.png';
    // L.imageOverlay(imageUrl, bounds).addTo(map);

<<<<<<< HEAD
        setTimeout(callIss, 5000);
    } else {
        alert("HTTP-Error: " + response.status);
    }
}
callIss();

 /*async function picOfTheDay() {
    let result = await fetch("https://api.nasa.gov/planetary/apod?api_key=eUSAP5eKNXwhnyXVdH3GRvZkeEUgF1poWEDJbe4A")
        .then(result => result.json())
        .then(data => {

            const img = document.getElementById("img");
            img.src = data.url;
            
        })
}*/

//fetch("https://api.nasa.gov/planetary/apod?api_key=eUSAP5eKNXwhnyXVdH3GRvZkeEUgF1poWEDJbe4A")
//.then(reponse => reponse.json())
//.then(reponse2 => console.table(reponse2))

var req = new XMLHttpRequest();
var url = "https://api.nasa.gov/planetary/apod?api_key=";
var api_key = "eUSAP5eKNXwhnyXVdH3GRvZkeEUgF1poWEDJbe4A";
=======
    setTimeout(callIss, 5000);
  } else {
    alert("HTTP-Error: " + response.status);
  }
}
callIss();

// API APOD de la NASA

var req = new XMLHttpRequest();
var url = "https://api.nasa.gov/planetary/apod?api_key=";
var api_key = "5B6oJsSCQyekXZvNOKpsUhRPl1e7FHqjIAyHpybk";
>>>>>>> 4e484d64602470978c470b373caacb22d7d35fea

req.open("GET", url + api_key);
req.send();

<<<<<<< HEAD
req.addEventListener("load", function(){
	if(req.status == 200 && req.readyState == 4){
  	var response = JSON.parse(req.responseText);
=======
req.addEventListener("load", function () {
  if (req.status == 200 && req.readyState == 4) {
    var response = JSON.parse(req.responseText);
>>>>>>> 4e484d64602470978c470b373caacb22d7d35fea
    document.getElementById("title").textContent = response.title;
    document.getElementById("date").textContent = response.date;
    document.getElementById("pic").src = response.hdurl;
    document.getElementById("explanation").textContent = response.explanation;
  }
<<<<<<< HEAD
})

=======
});
>>>>>>> 4e484d64602470978c470b373caacb22d7d35fea
