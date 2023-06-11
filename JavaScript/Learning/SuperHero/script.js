const SUPERHERO_TOKEN = "2223028768087580";
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`;

const newHero = document.getElementById("herobtn");
const heroImgDiv = document.getElementById("heroImg");
const searchBTn = document.getElementById("searchHero");
const searchInput = document.getElementById("searchInput");

const getSuperHero = (id, name) => {
  fetch(`${BASE_URL}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      getStats(json);
    })
    .catch((error) => {
      console.log("Error fetching superhero data:", error);
    });
};

const getSearchedSuperHero = (name) => {
  console.log(searchInput.value);
  fetch(`${BASE_URL}/search/${name}`)
    .then((response) => response.json())
    .then((json) => {
      const hero = json.results[0];
      getStats(hero);
    });
};

const getStats = (character) => {
  const name = `<h2>${character.name}</h2>`;
  const img = `<img src="${character.image.url}" height=200 width=200>`;
  const stats = Object.keys(character.powerstats).map((stat) => {
    return `<p>${stat}:${character.powerstats[stat]}</p>`;
  });
  heroImgDiv.innerHTML = `${name}${img}${stats}`;
  return stats.join("");
};

const randomHero = () => {
  const nuberOfHero = 731;
  return Math.floor(Math.random() * nuberOfHero) + 1;
};

newHero.onclick = () => getSuperHero(randomHero());
searchBTn.onclick = () => getSearchedSuperHero(searchInput.value);
