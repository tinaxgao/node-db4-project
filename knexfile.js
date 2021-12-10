const sharedConfig = {
  client: "sqlite3",
  migrations: { directory: "./data/migrations" },
  useNullAsDefault: true, // needed for sqlite
  pool: {
    afterCreate: (conn, done) => {
      // runs after a connection is made to the sqlite engine
      conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
    },
  },
};

module.exports = {
  development: {
    ...sharedConfig,
    connection: {
      filename: "./data/recipes.db3",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
  // testing: {
  //   ...sharedConfig,
  //   connection: { filename: "" },
  // },
  production: {},
};
