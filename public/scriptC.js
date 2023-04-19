// Huidige datum automatisch inladen
const dateInput = document.getElementById('date-from');
const dateOutput = document.getElementById("date-till");
// ✅ Using the visitor's timezone
dateInput.min = formatDate();
dateOutput.min = formatDate();

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date = new Date()) {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join('-');
}

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