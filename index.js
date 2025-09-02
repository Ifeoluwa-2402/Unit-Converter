const input = document.getElementById("input")
const  convert = document.getElementById("convert")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")
function convertLength() {
    const meter  = input.value * 0.3048
    const feet =  input.value * 3.28084
    const result = `${input.value} meters = ${feet.toFixed(3)} feet | ${input.value} feet = ${meter.toFixed(3)} meters`
    length.textContent = result
}
function convertVolume() {
    const gallon  = input.value * 0.264172
    const liter =  input.value * 3.78541
    const result = `${input.value} liters = ${gallon.toFixed(3)} gallons | ${input.value} gallon = ${liter.toFixed(3)} liters`
    volume.textContent = result
}
function convertMass() {
    const pound  = input.value * 2.20462
    const kilo =  input.value * 0.453592
    const result = `${input.value} kilos = ${pound.toFixed(3)} pounds | ${input.value} pounds = ${kilo.toFixed(3)} kilos`
    mass.textContent = result
}
convert.addEventListener('click', function() {
    if(input.value === "") {
        alert("Please enter a number")
    } else if (isNaN(input.value)) {
        alert("Invalid input. Please enter a valid number.")
        input.value = ""
        return
    }
    convertLength()
    convertVolume()
    convertMass()
    input.value = ""
})

