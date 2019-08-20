const Generation = require(".");
const GenerationTable = require("./table");

class GenerationEngine {
  constructor() {
    this.generation = null;
    this.timer = null;
  }
  buildNewGeneration() {
    const generation = new Generation();
    GenerationTable.storeGeneration(generation)
      .then(({ generationId }) => {
        this.generation = generation;
        this.generation.generationId = generationId;
        console.log("new generation", this.generation);
        this.timer = setTimeout(
          () => this.buildNewGeneration(),
          this.generation.expiration.getTime() - Date.now()
        );
      })
      .catch(err => console.error(err));
  }
  start() {
    this.buildNewGeneration();
  }
  stop() {
    clearTimeout(this.timer);
  }
}

module.exports = GenerationEngine;
