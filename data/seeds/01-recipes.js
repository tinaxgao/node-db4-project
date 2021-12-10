exports.seed = function (knex, Promise) {
  return knex("recipes").insert([
    { recipe_name: "Mashed Potatoes" },
    { recipe_name: "Mulled Wine" },
    { recipe_name: "Mac & Cheese" },
  ]);
};
