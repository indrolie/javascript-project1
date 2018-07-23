console.log("JAVASCRIPT");

const r = 4;
const t = 7;

function calculateCircleArea(r) {
    const CircleArea = 3.14 * r * r;
    return CircleArea
}

function calculateTubeVolume(CircleArea) {
    const TubeVolume = CircleArea * t;
    return TubeVolume
}

const result = calculateTubeVolume(calculateCircleArea(r));
console.log(result);