require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: "Nodirbek1994",
    database: "passport_demo",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: "Nodirbek1994",
    database: "project",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql",
  },
};
