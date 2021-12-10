const recipes = [
  { recipe_name: "Mashed Potatoes" },
  { recipe_name: "Mulled Wine" },
  { recipe_name: "Mac & Cheese" },
]

exports.seed = async function (knex) {
  await knex("recipes").insert(recipes);
};
