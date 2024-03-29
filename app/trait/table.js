const pool = require("../../databasePool");

class TraitTable {
  static getTraitId({ traitType, traitValue }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT id FROM trait WHERE "traitType" = $1 AND "traitValue" = $2`,
        [traitType, traitValue],
        (err, res) => {
          if (err) reject(err);

          resolve({ traitId: res.rows[0].id });
        }
      );
    });
  }
}

module.exports = TraitTable;
