const { Sequelize } = require("@sequelize");

const sequelize = new Sequelize({
  database: "conqtvms",
  user: "candidate",
  password: "NoTeDeSt^C10.6?SxwY882}",
  port: 3306,
  options: {
    dialect: "mysql",
    host: "nodejs-technical-test.cm30rlobuoic.ap-southeast-1.rds.amazonaws.com",
    storage: "./scoutout.sqlite",
  },
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
