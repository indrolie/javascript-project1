console.log("JAVASCRIPT");

const button = document.getElementById("buttonGetTime");

const bornYear = () => {
  const age = 22;
  const time = new Date();
  const year = time.getFullYear();
  const result = year - age;

  document.getElementById("time").innerHTML = result;
};

button.addEventListener("click", bornYear);
