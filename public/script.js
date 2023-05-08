// Huidige datum automatisch inladen
const dateInput = document.getElementById("date-from");
const dateOutput = document.getElementById("date-till");

// Automatisch einddatum meeveranderen
if(dateInput){
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

var map = L.map('map').setView([52.2129919, 5.2793703], 7)

L.tileLayer('https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=6ws7wF90PofV2LnNfOXL', {
    maxZoom: 19,
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map)


//icon maken



//markers maken

var WicherGroot = L.marker([51.915775, 4.477979], {icon: marker})
var WafaGroot = L.marker([51.9200524, 4.4660027], {icon: marker})
var KarelGroot = L.marker([52.3653432, 4.864459999999999], {icon: marker})
var AhmedGroot = L.marker([51.91511389999999, 4.3975444], {icon: marker})
var ManonGroot = L.marker([51.9147605, 4.398279], {icon: marker})



//layers

var markersGroot = L.layerGroup([WicherGroot, WafaGroot, KarelGroot, AhmedGroot, ManonGroot]).addTo(map)


















// var Wicher = L.polygon([
//     [51.915790, 4.477962],
//     [51.915821, 4.478087],
//     [51.915760, 4.478125],
//     [51.915728, 4.477995]
// ]).addTo(map)


// var markersKlein = L.layerGroup([Wicher])
// var layerControl = L.control.layers(markersGroot)

// map.on('zoomend', zoomLevel)

// function zoomLevel(e) {
//     console.log(e.target._zoom)
//     if (e.target._zoom < "11") {
//         console.log("zoom kleiner dan 11");

//         if (Wicher) { map.removeLayer(Wicher) }
//     } else {
//         console.log("zoom groter dan 11")
//         .addTo(map)
//         console.log(WicherGroot)
//         if (WicherGroot) { map.removeLayer(WicherGroot) }
//     }
// }

// function toggleWicherPin() {
//     // zoom level kleiner dan 11 dan weghalen anders tonen
//     // console.log("kom ik hier")
// }

// function toggleWicherRectangle() {
//     // zoom level groter dan 11 dan weghalen anders tonen

// }

// if (1) {

// }
// else {
//     var Wafa = L.polygon([
//         [], //linksboven
//         [], //rechtsboven
//         [], //rechtsonder
//         []  //linksonder
//     ]).addTo(map)
// }


// if (1) {

// }
// else {
//     var Karel = L.polygon([
//         [], //linksboven
//         [], //rechtsboven
//         [], //rechtsonder
//         []  //linksonder
//     ]).addTo(map)
// }

// if (1) {

// }
// else {
//     var Ahmed = L.polygon([
//         [], //linksboven
//         [], //rechtsboven
//         [], //rechtsonder
//         []  //linksonder
//     ]).addTo(map)
// }

// if (1) {

// }
// else {
//     var Manon = L.polygon([
//         [], //linksboven
//         [], //rechtsboven
//         [], //rechtsonder
//         []  //linksonder
//     ]).addTo(map)
// }




inputs.forEach(input => { 
    input.addEventListener( 
        "invalid", 
        event => { 
            input.classList.add("invalid"); 
        }, 
        false 
    ); 
});

// More info button
const infoIcons = document.querySelectorAll(".info-icon")
// const infoTexts = document.querySelector(".sz-id-<%= smartzone.id %>")

infoIcons.forEach(infoIcon => {
    infoIcon.addEventListener("click", (event) => {
        const moreInfoText = document.getElementById(infoIcon.dataset.szid);

        moreInfoText.classList.toggle("show-more-info")
        console.log(moreInfoText.offsetHeight)
        // zoek het sz-id uit de dataset van het infoIcon adhv event.target
        // combineer het id met sz-id-[betreffende-id]
        // document.querysel op de class in stap 2
        // toggle de gewenste class op het element
    })
})

// Like button
const likeButtons = document.querySelectorAll(".favorite-button")

likeButtons.forEach(likeButton => {
    likeButton.addEventListener("click", heartAnimation)
    // likeButton.addEventListener("animationend", heartAnimation)
    
    function heartAnimation () {
        likeButton.classList.toggle("heart-animation")
    }
})

// Search button
const searchButtons = document.querySelectorAll(".search-button")

searchButtons.forEach(searchButton => {
    searchButton.addEventListener("click", searchAnimation)
    searchButton.addEventListener("animationend", searchAnimation)
    
    function searchAnimation () {
        searchButton.classList.toggle("search-animation")
    }
})
