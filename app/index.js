const GenerationEngine = require("./generation/GenerationEngine");
const express = require("express");
const app = express();
const dragonRouter = require("./api/dragon");
const generationRouter = require("./api/generation");

const engine = new GenerationEngine();

app.locals.engine = engine;

app.use("/dragon", dragonRouter);
app.use("/generation", generationRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    type: "error",
    message: err.message
  });
});

engine.start();
module.exports = app;
