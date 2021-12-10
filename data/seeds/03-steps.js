exports.seed = function (knex, Promise) {
  return knex("steps").insert([
    { step_number: 1, step_instructions: "Boil potatoes", recipe_id: 1 },
    {
      step_number: 2,
      step_instructions: "Mash potatoes with liquids & seasonings",
      recipe_id: 1,
    },
    { step_number: 1, step_instructions: "Open wine", recipe_id: 2 },
    {
      step_number: 2,
      step_instructions: "Boil wine with fruits & spices",
      recipe_id: 2,
    },
    { step_number: 1, step_instructions: "Boil pasta", recipe_id: 3 },
    { step_number: 2, step_instructions: "Mix with cheese", recipe_id: 3 },
  ]);
};
