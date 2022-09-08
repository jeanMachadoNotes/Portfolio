/*Canvas JS*/
/*
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");



var grd = ctx.createRadialGradient(275, 145, 5, 275, 120, 30);
grd.addColorStop(0, "yellow");
grd.addColorStop(1, "rgba(256, 180, 0, .9)");


ctx.fillStyle = grd;
ctx.fillRect(0,0,600,400);


ctx.beginPath();
ctx.arc(275, 150, 30, 3.1, 2 * Math.PI)
ctx.stroke();

ctx.moveTo(0,150);
ctx.lineTo(600, 150);
ctx.stroke();
ctx.font = "45px Verdana";
ctx.strokeText("Sunrise Productions", 100, 200);

var x = document.getElementById("location");

function showPosition() {
    navigator.geolocation.getCurrentPosition(showLocation);
}


function showLocation(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + "Longitude: " + position.coords.longitude;
}
*/

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id); //#smiley
}

function drop(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");// passes #smiley
    ev.target.appendChild(document.getElementById(data));
}

function allowDrop(ev) {
    ev.preventDefault();
}

function showStorage() {
    var items = [];
    var keys = [];
    for (var i = 0; i < localStorage.length; i++) {
        items += Object.values(localStorage)[i] + "<br>"; 
        keys += Object.keys(localStorage)[i] + "<br>";
     }

    document.getElementById("lockeys").innerHTML = keys;
    document.getElementById("locstor").innerHTML = items;
} 

function clearStorage() {
    window.localStorage.clear();
    return
}



 


function updateStorage() {
   var user_input_id = document.getElementById("info_id").value;
   var user_input_data = document.getElementById("info").value;
   window.localStorage.setItem(user_input_id, user_input_data);
}