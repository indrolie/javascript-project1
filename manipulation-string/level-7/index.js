console.log("JAVASCRIPT");

const a = "hELLo wORLd";

function titlecase(str) {
    b = str.toString();

    return b.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

console.log(titlecase(a));