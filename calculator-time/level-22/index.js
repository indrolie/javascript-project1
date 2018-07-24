console.log("JAVASCRIPT");

const button = document.getElementById("buttonGetTime");

const getTime = () => {
  const time = new Date();

  document.getElementById("time").innerHTML = time;
};

button.addEventListener("click", getTime);
