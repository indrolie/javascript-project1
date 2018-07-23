console.log("JAVASCRIPT");

function calculateTubeVolume(radius, height) {

    const phi = Math.PI;

    width = (document.getElementById("radius").value);
    height = (document.getElementById("height").value);
    const volume = phi * width * width * height;
    document.getElementById("result").value = volume;
}