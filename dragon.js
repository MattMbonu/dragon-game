const TRAITS = require("./traits.json");

const DEFAULT_PROPS = {
  nickName: "unnamed",
  get birthDate() {
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
  constructor({ birthDate, nickName, traits } = {}) {
    this.birthDate = birthDate || DEFAULT_PROPS.birthDate;
    this.nickName = nickName || DEFAULT_PROPS.nickName;
    this.traits = traits || DEFAULT_PROPS.randomTraits;
  }
}

module.exports = Dragon;
