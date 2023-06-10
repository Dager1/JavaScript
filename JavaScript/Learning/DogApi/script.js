const dogIngDiv = document.getElementById("dogImg");
const dogBtn = document.getElementById("refresh");

const newDog = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((json) => {
      console.log(json.message);
      dogIngDiv.innerHTML = `<img src='${json.message}' height=300 width=300>`;
    });
};

dogBtn.onclick = () => {
  newDog();
};
