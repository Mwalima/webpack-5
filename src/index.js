const elvenShieldRecipe = {
    leatherStripes: 10,
    metalRims: 10,
    moonStones: 4
}

console.log(elvenShieldRecipe)

// to check is website is running try
// node dist/main.js
const elvenGauntletRecipe = {
    ...elvenShieldRecipe,
    leather: 1,
    refinedMoonstone: 4,
}

console.log(elvenGauntletRecipe)