const router = require("express").Router();
const Recipe = require("./recipes-model");

router.get("/:recipe_id", (req, res, next) => {
  Recipe.getRecipeById(req.params.recipe_id)
    .then((r) => {
      res.status(200).json(r);
    })
    .catch(next);
});





module.exports = router;
