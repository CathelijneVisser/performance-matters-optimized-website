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

if(1){
var WicherGroot = L.marker([51.915775, 4.477979]).addTo(map);
}
else{
var Wicher = L.polygon([
[51.915790, 4.477962], //linksboven
[51.915821, 4.478087], //rechtsboven
[51.915760, 4.478125], //rechtsonder
[51.915728, 4.477995]  //rechtsboven
]).addTo(map)
}
 
if(){
var WafaGroot = L.marker([51.9200524, 4.4660027]).addTo(map)
}
else{
var Wafa = L.polygon([
[],
[],
[],
[]
]).addTo(map)
}

if(){
var KarelGroot = L.marker([52.3653432, 4.864459999999999]).addTo(map)
}
else{
var Karel = L.polygon([
[],
[],
[],
[]
]).addTo(map)
}

if(){
var AhmedGroot  = L.marker([51.91511389999999, 4.3975444]).addTo(map)
}
else{
var Ahmed = L.polygon([
[],
[],
[],
[]
]).addTo(map)
}

if(){
var ManonGroot = L.marker([51.9147605, 4.398279]).addTo(map)
}
else{
var Manon = L.polygon([
[],
[],
[],
[]
]).addTo(map)
}




