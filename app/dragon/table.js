const pool = require("../../databasePool");
const DragonTraitTable = require("../dragonTrait/table");

class DragonTable {
  static storeDragon(dragon) {
    return new Promise((resolve, reject) => {
      pool.query(
        'INSERT INTO dragon(nickname,birthdate,"generationId") VALUES($1,$2,$3)  RETURNING id',
        [dragon.nickname, dragon.birthdate, dragon.generationId],
        (err, res) => {
          if (err) {
            return reject(err);
          }
          const dragonId = res.rows[0].id;

          Promise.all(
            dragon.traits.map(({ traitType, traitValue }) => {
              return DragonTraitTable.storeDragonTrait({
                dragonId,
                traitType,
                traitValue
              });
            })
          )
            .then(() => resolve({ dragonId }))
            .catch(err => reject(err));
        }
      );
    });
  }
  static getDragon({ dragonId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `
        SELECT birthdate, nickname, "generationId" 
        FROM dragon 
        WHERE dragon.id = $1
  `,
        [dragonId],
        (err, res) => {
          if (err) return reject(err);
          if (res.rows.length === 0) return reject(new Error("no dragon"));
          resolve(res.rows[0]);
        }
      );
    });
  }
}

module.exports = DragonTable;
