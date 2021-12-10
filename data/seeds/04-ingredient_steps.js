exports.seed = function (knex, Promise) {
  return knex("ingredient_steps").insert([
    { step_id: 1, ingredient_id: 1, quantity: 5 },
    { step_id: 1, ingredient_id: 2, quantity: 6 },
    { step_id: 1, ingredient_id: 3, quantity: 4 },
    { step_id: 1, ingredient_id: 4, quantity: 5 },
    { step_id: 1, ingredient_id: 5, quantity: 15 },

    { step_id: 2, ingredient_id: 6, quantity: 2 },
    { step_id: 2, ingredient_id: 7, quantity: 1 },

    { step_id: 3, ingredient_id: 8, quantity: 7 },
    { step_id: 3, ingredient_id: 9, quantity: 3 },
    { step_id: 3, ingredient_id: 10, quantity: 8 },
    { step_id: 3, ingredient_id: 11, quantity: 5 },
  ]);
};
