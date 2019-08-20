const { Router } = require("express");
const DragonTable = require("../dragon/table");

const router = new Router();

router.get("/new", async (req, res) => {
  try {
    const dragon = req.app.locals.engine.generation.newDragon();
    const { dragonId } = await DragonTable.storeDragon(dragon);
    dragon.dragonId = dragonId;
    res.json({ dragon });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
