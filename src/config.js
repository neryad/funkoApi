require('dotenv').config();
// config();

module.exports = {
  port: process.env.PORT || 3000,
  dbUser: process.env.DBUSER || '',
  dbPassword: process.env.DBPASSWORD || '',
  dbServer: process.env.DBSERVER || '',
  dbDatabase: process.env.DBDATABASE || '',
};
