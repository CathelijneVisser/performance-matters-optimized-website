// Huidige datum automatisch inladen
const dateInput = document.getElementById('date-from');
const dateOutput = document.getElementById("date-till");

// Automatisch einddatum meeveranderen
dateInput.onchange = () => {
    dateOutput.value = dateInput.value
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