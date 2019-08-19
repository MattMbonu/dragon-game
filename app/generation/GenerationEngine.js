const Generation = require(".");

class GenerationEngine {
  constructor() {
    this.generation = null;
    this.timer = null;
  }
  buildNewGeneration() {
    this.generation = new Generation();

    console.log("new generation", this.generation);
    this.timer = setTimeout(
      () => this.buildNewGeneration(),
      this.generation.expiration.getTime() - Date.now()
    );
  }
  start() {
    this.buildNewGeneration();
  }
  stop() {
    clearTimeout(this.timer);
  }
}

module.exports = GenerationEngine;
