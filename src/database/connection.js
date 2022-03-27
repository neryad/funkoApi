const sql = require('mssql');
const config = require('../config.js');

const dbSettings = {
  user: config.dbUser,
  password: config.dbPassword,
  server: config.dbServer,
  database: config.dbDatabase,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

const getConnection = async () => {
  try {
    const pool = await sql.connect(dbSettings);
    console.log('Connected!!');
    return pool;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getConnection,
  dbSettings,
  sql,
};
