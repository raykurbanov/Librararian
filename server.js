const express = require("express");
const sequelize = require("./config/connection");
const app = express();
const api = require("./api/api");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api", api);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () =>
    console.log(`Server is listenning at: http://localhost:${PORT}`)
  );
});
