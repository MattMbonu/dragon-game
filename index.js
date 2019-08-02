const GenerationEngine = require("./GenerationEngine");

const engine = new GenerationEngine();

// const gooby = generation.newDragon();

// console.log("dragon", gooby);

engine.start();

setTimeout(() => engine.stop(), 15000);
