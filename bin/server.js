const app = require("../app/index");

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`connected on port ${port}`);
});
