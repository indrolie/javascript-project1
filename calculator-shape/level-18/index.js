console.log("JAVASCRIPT");

const calculate = document.getElementById("button-calculate");

calculate.onclick = function calculateTubeVolume() {

    const phi = Math.PI;

    const radius = Number(document.getElementById("radius").value);
    const height = Number(document.getElementById("height").value);
    const volume = phi * radius * radius * height;
    document.getElementById("result").value = volume;
}