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
const inputs = document.querySelectorAll("input, select, textarea"); 

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
