console.log("JAVASCRIPT");

function calculateSquareArea(size) {
    size = (document.getElementById("size").value);
    const area = size * size;
    document.getElementById("result").value = area;
}