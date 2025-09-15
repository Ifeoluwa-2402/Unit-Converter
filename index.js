const input = document.getElementById("input")
const convert = document.getElementById("convert")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")
function convertLength(value) {
    const meter  = value * 0.3048
    const feet =  value * 3.28084
    const result = `${value} meters = ${feet.toFixed(3)} feet |
                    ${value} feet = ${meter.toFixed(3)} meters`
    length.textContent = result
}
function convertVolume(value) {
    const gallon  = value * 0.264172
    const liter =  value * 3.78541
    const result = `${value} liters = ${gallon.toFixed(3)} gallons | 
                    ${value} gallon = ${liter.toFixed(3)} liters`
    volume.textContent = result
}
function convertMass(value) {
    const pound  = value * 2.20462
    const kilo =  value* 0.453592
    const result = `${value} kilos = ${pound.toFixed(3)} pounds | 
                    ${value} pounds = ${kilo.toFixed(3)} kilos`
    mass.textContent = result
}
convert.addEventListener('click', function() {
    if(input.value === "") {
        alert("Please enter a number")
        input.value = ""
        return
    } else if (isNaN(input.value)) {
        alert("Invalid input. Please enter a valid number.")
        input.value = ""
        return
    }
    convertLength(input.value)
    convertVolume(input.value)
    convertMass(input.value)
    input.value = ""
})