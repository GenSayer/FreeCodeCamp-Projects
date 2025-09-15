// Code partially inspired by and borrowed from codeManS pokemon tutorial 

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const creatureName = document.getElementById("creature-name");
const creatureID = document.getElementById("creature-id");
const creatureWeight = document.getElementById("weight");
const creatureHeight = document.getElementById("height");
const creatureSpecialName = document.getElementById("special-name");
const creatureSpecialDescription = document.getElementById("special-description");
const creatureHP = document.getElementById("hp");
const creatureAttack = document.getElementById("attack");
const creatureDefense = document.getElementById("defense");
const creatureSpecialAttack = document.getElementById("special-attack");
const creatureSpecialDefense = document.getElementById("special-defense");
const creatureSpeed = document.getElementById("speed");
const creatureTypes = document.getElementById("types");


// Get the creature
const getCreature = async () => {
  try {
    const creatureNameOrId = searchInput.value.toLowerCase();
    const res = await fetch(`https://rpg-creature-api.freecodecamp.rocks/api/creature/${creatureNameOrId}`);
    const data = await res.json();
    setCreatureInfo(data);
  } catch (err) {
    alert("Creature not found");
    console.log(err);
  }
}

// Set the creature info
const setCreatureInfo = data => {
  const {name, id, weight, height, stats, special, types} = data;

  // Get the info
  creatureName.textContent = `${name.toUpperCase()}`;
  creatureID.textContent = `#${id}`;
  creatureWeight.textContent = `Weight: ${weight}`;
  creatureHeight.textContent = `Height: ${height}`;
  creatureSpecialName.textContent = special.name;
  creatureSpecialDescription.textContent = special.description;

  // Get the stats
  creatureHP.textContent = stats[0].base_stat;
  creatureAttack.textContent = stats[1].base_stat;
  creatureDefense.textContent = stats[2].base_stat;
  creatureSpecialAttack.textContent = stats[3].base_stat;
  creatureSpecialDefense.textContent = stats[4].base_stat;
  creatureSpeed.textContent = stats[5].base_stat;

  // Get the types
  creatureTypes.innerHTML = types.map(obj => {  
   return `<span class="type ${obj.name}">${obj.name}</span>`
  }).join("");
}

// Add Event Listener for searching
searchForm.addEventListener('submit', e => {
  e.preventDefault();
  getCreature();
});
