const pool = require("../databasePool");
const TRAITS = require("../data/traits.json");

TRAITS.forEach(TRAIT => {
  const traitType = TRAIT.type;
  const traitValues = TRAIT.values;
  traitValues.forEach(traitValue => {
    pool.query(
      `INSERT INTO trait("traitType","traitValue") VALUES($1,$2) RETURNING id`,
      [traitType, traitValue],
      (err, res) => {
        if (err) {
          console.error(err);
        }
        const traitId = res.rows[0].id;
        console.log(`Inseted trait with id: ${traitId}`);
      }
    );
  });
});
