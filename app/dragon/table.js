const pool = require("../../databasePool");

class DragonTable {
  static storeDragon(dragon) {
    return new Promise((resolve, reject) => {
      pool.query(
        'INSERT INTO dragon(nickname,birthdate,"generationId") VALUES($1,$2,$3)  RETURNING id',
        [dragon.nickName, dragon.birthDate, dragon.generationId],
        (err, res) => {
          if (err) {
            return reject(err);
          }
          const dragonId = res.rows[0].id;
          resolve({ dragonId });
        }
      );
    });
  }
}

module.exports = DragonTable;
