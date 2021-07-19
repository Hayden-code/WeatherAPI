var userLocation = document.getElementById("searchBar").value

function getData(){
    console.log(userLocation)
    getApi(userLocation)
    console.log("getData function")
}


function getApi(location) {
//    var requestUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + location + ',uk&APPID=a2ed3b4099d908145e7796d864a76ce2';
    console.log("getApi funciton")
    console.log(location)
    fetch (requestUrl)
        .then (function(response) {
         return response.json;
    })
        .then (function (data) {
            console.log(data)

        })

}















var searchBar = document.getElementById("cityName");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    searchBar.innerHTML = "Geolocation is not supported by this browser.";
    console.log("yo")
  }

}

function showPosition(position) {
  searchBar.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}