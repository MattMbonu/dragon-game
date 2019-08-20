const TRAITS = require("../../data/traits.json");

const DEFAULT_PROPS = {
  dragonId: undefined,
  nickname: "unnamed",
  generationId: undefined,
  get birthdate() {
    return new Date();
  },
  get randomTraits() {
    const traits = [];
    TRAITS.forEach(TRAIT => {
      const traitType = TRAIT.type;
      const traitValues = TRAIT.values;
      const traitValue =
        traitValues[Math.floor(Math.random() * traitValues.length)];
      traits.push({ traitType, traitValue });
    });
    return traits;
  }
};

class Dragon {
  constructor({ dragonId, generationId, birthdate, nickname, traits } = {}) {
    this.generationId = generationId || DEFAULT_PROPS.generationId;
    this.birthdate = birthdate || DEFAULT_PROPS.birthdate;
    this.nickname = nickname || DEFAULT_PROPS.nickname;
    this.traits = traits || DEFAULT_PROPS.randomTraits;
    this.dragonId = dragonId || DEFAULT_PROPS.dragonId;
  }
}

module.exports = Dragon;
