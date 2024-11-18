const container = document.querySelector("#product-container");

render(pokemons);

const search = document.querySelector(".search");

search.addEventListener("input", (e) => {
  let searchInput = e.target.value.toLowerCase();
  const searchArray = pokemons.filter((item) =>
    item.name.toLowerCase().includes(searchInput)
  );

  render(searchArray.length ? searchArray : pokemons);
});

function render(array) {
  container.innerHTML = "";

  array.map((item) => {
    const card = document.createElement("div");
    card.classList.add("productes");

    const id = document.createElement("strong");
    id.textContent = item.id;

    const titles = document.createElement("h1");
    titles.textContent = item.title;

    const subTitle = document.createElement("h2");
    subTitle.textContent = item.name;

    const img = document.createElement("img");
    img.src = item.img;

    const name = document.createElement("h3");
    name.textContent = item.type[0];

    const firstText = document.createElement("p");
    firstText.textContent = item.candy_count;

    const secondText = document.createElement("p");
    secondText.textContent = `Weight: ${item.weight}`;

    const bold = document.createElement("b");
    bold.textContent = `Abilities: ${item.weaknesses.forEach((element) => {
      return element;
    })}`;

    const clock = document.createElement("h4");
    clock.textContent = item.spawn_time;

    card.append(
      id,
      titles,
      subTitle,
      img,
      name,
      firstText,
      secondText,
      bold,
      clock
    );

    container.append(card);
  });
}

const sort = document.getElementById("sort");

sort.addEventListener("change", (e) => {
  let sortInput = e.target.value;
  console.log(sort);

  if (sortInput === "a-z") {
    let ABC = pokemons.sort((a, b) => a.name.localeCompare(b.name));
    render(ABC.length ? ABC : pokemons);
  } else if (sortInput === "z-a") {
    let ZYX = pokemons.sort((a, b) => b.name.localeCompare(a.name));
    render(ZYX.length ? ZYX : pokemons);
  }
})

const category = document.querySelector('#category');

category.addEventListener('change', (e) => {
  let categoryInput = e.target.value;
  let categoryFilter = pokemons.filter(
    item => item.type[0].toLowerCase() == categoryInput.toLowerCase()
  );
  render(categoryFilter)
})