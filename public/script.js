// Huidige datum automatisch inladen
const dateInput = document.getElementById('date-from')
const dateOutput = document.getElementById("date-till")

// Automatisch einddatum meeveranderen
if(dateInput) {
    dateInput.onchange = () => {
        dateOutput.value = dateInput.value
    }
}

// Invalid
const inputs = document.querySelectorAll("input, select, textarea")

inputs.forEach(input => { 
    input.addEventListener( 
        "invalid", 
        event => { 
            input.classList.add("invalid")
        }, 
        false 
    ); 
});

//map

//map maken
var map = L.map('map').setView([52.2129919, 5.2793703], 7)

L.tileLayer('https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=6ws7wF90PofV2LnNfOXL', {
    maxZoom: 19,
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map)



//markers maken

map.on('zoomend', zoomLevel)

function zoomLevel (e) {
    console.log(e.target._zoom)
    if(e.target._zoom < 11){
        bliep();
        console.log("zoom kleiner dan 11");
        console.log(WicherGroot)
        var WicherGroot = L.marker([51.915775, 4.477979]).addTo(map)

        console.log(WicherGroot)
        if(Wicher){map.removeLayer(Wicher)}
    } else {
        var Wicher = L.polygon([
        [51.915790, 4.477962], 
        [51.915821, 4.478087], 
        [51.915760, 4.478125], 
        [51.915728, 4.477995]  
        ]).addTo(map)
        if(WicherGroot){map.removeLayer(WicherGroot)}
    }
}

function toggleWicherPin () {
    // zoom level kleiner dan 11 dan weghalen anders tonen
    // console.log("kom ik hier")
} 

function toggleWicherRectangle() {
    // zoom level groter dan 11 dan weghalen anders tonen

}
 
if(1){
var WafaGroot = L.marker([51.9200524, 4.4660027]).addTo(map)
}
else{
var Wafa = L.polygon([
[], //linksboven
[], //rechtsboven
[], //rechtsonder
[]  //linksonder
]).addTo(map)
}

map.removeLayer(Wa)

if(1){
var KarelGroot = L.marker([52.3653432, 4.864459999999999]).addTo(map)
}
else{
var Karel = L.polygon([
[], //linksboven
[], //rechtsboven
[], //rechtsonder
[]  //linksonder
]).addTo(map)
}

if(1){
var AhmedGroot  = L.marker([51.91511389999999, 4.3975444]).addTo(map)
}
else{
var Ahmed = L.polygon([
[], //linksboven
[], //rechtsboven
[], //rechtsonder
[]  //linksonder
]).addTo(map)
}

if(1){
var ManonGroot = L.marker([51.9147605, 4.398279]).addTo(map)
}
else{
var Manon = L.polygon([
[], //linksboven
[], //rechtsboven
[], //rechtsonder
[]  //linksonder
]).addTo(map)
}




