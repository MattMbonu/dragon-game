const Dragon = require("./dragon");

const fooey = new Dragon({ birthDate: new Date(), nickName: "fooey" });

const baloo = new Dragon({ birthDate: new Date(), nickName: "baloo" });
const nameLess = new Dragon();

console.log(fooey, baloo, nameLess);
