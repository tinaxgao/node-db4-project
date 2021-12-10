exports.seed = function (knex, Promise) {
  return knex("ingredients").insert([
    { ingredient_name: "Potatoes", ingredient_unit: "g" },
    { ingredient_name: "Butter", ingredient_unit: "g" },
    { ingredient_name: "Salt", ingredient_unit: "g" },
    { ingredient_name: "Water", ingredient_unit: "g" },
    { ingredient_name: "Coconut Milk", ingredient_unit: "g" },
    { ingredient_name: "Macaroni Pasta", ingredient_unit: "g" },
    { ingredient_name: "Cheese Sauce", ingredient_unit: "g" },
    { ingredient_name: "Cinnamon", ingredient_unit: "g" },
    { ingredient_name: "Red Wine", ingredient_unit: "g" },
    { ingredient_name: "Fruits", ingredient_unit: "g" },
    { ingredient_name: "Cloves", ingredient_unit: "g" },
  ]);
};
