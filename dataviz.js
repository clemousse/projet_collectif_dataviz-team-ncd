// projet dataviz

//set the map with leaflet
let map = L.map('map', {
  zoomSnap: 0.1,
  renderer: L.svg()
}).setView([0, 0], 1.6);

// set the tile openstreetmap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 1.6,
    maxZoom: 18,
    attribution: '© OpenStreetMap'
}).addTo(map);

let latlngs = [], latlngs2 = [];
let issIcon = L.icon({
  iconUrl: './img-icon/iss.png',
  iconSize: [33, 30] // size of the icon => width/height
  //popupAnchor:[-3, -76] // point from which the popup should open relative to the iconAnchor
  //shadowSize:[50, 64], // size of the shadow
  //iconAnchor:[22, 94], // point of the icon which will correspond to marker's location
  //shadowAnchor:[4, 62],  // the same for the shadow
  //shadowUrl:'leaf-shadow.png'
});
let marker = L.marker([48.856614, 2.3522219], { icon: issIcon });

async function callIss() {
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

        // compare iss's lon with map's lon to avoid the red line back
        if (lon<180 & lon>=0) {
            //console.log("dans les plus");
            latlngs.push([lat,lon]);
            // create a red polyline from an array of LatLng points => for the trajectory
            L.polyline(latlngs,{color:'red'}).addTo(map);
        } else if (lon<0){
            //console.log("dans les moins");
            latlngs2.push([lat,lon]);
            L.polyline(latlngs2,{color:'red'}).addTo(map);
        }
        setTimeout(callIss,5000);
    } else {
        alert("HTTP-Error: "+response.status);
    }
}
callIss();

//async function picOfTheDay() {
//let result = await fetch("https://api.nasa.gov/planetary/apod?api_key=eUSAP5eKNXwhnyXVdH3GRvZkeEUgF1poWEDJbe4A")
//.then(result => result.json())
//.then(data => {

//const img = document.getElementById("img");
//img.src = data.url;

///})
//}

//fetch("https://api.nasa.gov/planetary/apod?api_key=eUSAP5eKNXwhnyXVdH3GRvZkeEUgF1poWEDJbe4A")
//.then(reponse => reponse.json())
//.then(reponse2 => console.table(reponse2))

var req = new XMLHttpRequest();
var url = "https://api.nasa.gov/planetary/apod?api_key=";
var api_key = "eUSAP5eKNXwhnyXVdH3GRvZkeEUgF1poWEDJbe4A";

req.open("GET", url + api_key);
req.send();

req.addEventListener("load", function () {
  if (req.status == 200 && req.readyState == 4) {
    var response = JSON.parse(req.responseText);
    document.getElementById("title").textContent = response.title;
    document.getElementById("date").textContent = response.date;
    document.getElementById("pic").src = response.hdurl;
    document.getElementById("explanation").textContent = response.explanation;
  }
})



/*btn.onclick =() => {
  fetch("https://api.nasa.gov/planetary/apod?start_date=2022-07-01&end_date=2022-07-20&api_key=eUSAP5eKNXwhnyXVdH3GRvZkeEUgF1poWEDJbe4A")
  .then(answer => answer.json())
  .then(data =>{
    const img = document.createElement("img");
    img.src = data.url;
    img.width = "100";
    output.appendChild(img);
  })

}
function randomDate(){
  let inputDate = document.getElementById("btn").value;
  var req = new XMLHttpRequest();
  var url = "https://api.nasa.gov/planetary/apod?date=" + inputDate + "api_key=";
  var api_key = "eUSAP5eKNXwhnyXVdH3GRvZkeEUgF1poWEDJbe4A";
  
  req.open("GET", url + api_key);
  req.send();
  
  req.addEventListener("load", function(){
    if(req.status == 200 && req.readyState == 4){
      var response = JSON.parse(req.responseText);
      document.getElementById("title").textContent = response.title;
      document.getElementById("date").textContent = response.date;
      document.getElementById("pic").src = response.hdurl;
      document.getElementById("explanation").textContent = response.explanation;
    }
  })
}
randomDate();*/
