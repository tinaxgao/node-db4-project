const express = require('express')
const recipeRouter = require('./recipes/recipes-router')

const server = express()

server.use(express.json())

server.use('/api/recipes', recipeRouter)

server.use("*", (req, res) => {
    res.json({ api: "wired" });
  });

server.use((err, req, res, next) => {
    res.status(500).json({
      customMessage: "uh oh, something went wrong inside recipes router",
      message: err.message,
      stack: err.stack,
    });
  });

module.exports = server