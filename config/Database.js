import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  // using mysql database (add databasename, username and password)
  // host: "localhost",
  // dialect: "mysql",

  // using sqlite database
  dialect: "sqlite",
  storage: "Database/e-judging.sqlite",
});

(async () => {
  try {
    await sequelize.sync({ sync: true });
    await sequelize.authenticate();

    console.log("Connection to the database has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

export default sequelize;
