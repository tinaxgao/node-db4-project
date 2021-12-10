const router = require("express").Router();

router.use("*", (req, res, next) => {
  res.json({ api: "wired" });
});

router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "uh oh, something went wrong inside recipes router",
    message: err.message,
    stack: err.stack
  });
});

module.exports = router;
