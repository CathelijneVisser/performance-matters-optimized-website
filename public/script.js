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
}).addTo(map);

