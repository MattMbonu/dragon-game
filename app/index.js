const GenerationEngine = require("./generation/GenerationEngine");
const express = require("express");
const app = express();
const dragonRouter = require("./api/dragon");
const generationRouter = require("./api/generation");

const engine = new GenerationEngine();

app.locals.engine = engine;

app.use("/dragon", dragonRouter);
app.use("/generation", generationRouter);

engine.start();
module.exports = app;
