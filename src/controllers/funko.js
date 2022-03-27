const { getConnection, sql } = require('../database/connection');
const { queries } = require('../database/quey.js');
const getFunkos = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllFunkos);
    res.json(result.recordset);
  } catch (error) {
    console.log(error);
  }
};

const getFunkoById = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input('id', req.params.id)
      .query(queries.getFunkoById);
    res.json(result.recordset[0]);
  } catch (error) {
    console.log(error);
  }
};
const postFunko = async (req, res) => {
  const { name, serie } = req.body;
  let { serilNumer } = req.body;
  if (name == null || serie == null) {
    return req.status(400).json({ msg: 'Bad request, please fill all fields' });
  }
  if (serilNumer == null) serilNumer = 0;
  try {
    const pool = await getConnection();

    await pool
      .request()
      .input('name', sql.VarChar, name)
      .input('serie', sql.VarChar, serie)
      .input('serilNumer', sql.Int, serilNumer)
      .query(queries.addNewFunko);
    res.json({ name, serie, serilNumer });
  } catch (error) {
    console.log(error);
  }
};

const putFunkoById = async (req, res) => {
  const { name, serie, serilNumer } = req.body;

  if (name == null || serie == null || serilNumer == null) {
    return req.status(400).json({ msg: 'Bad request, please fill all fields' });
  }
  try {
    const pool = await getConnection();

    await pool
      .request()
      .input('id', req.params.id)
      .input('name', sql.VarChar, name)
      .input('serie', sql.VarChar, serie)
      .input('serilNumer', sql.Int, serilNumer)
      .query(queries.updateFunko);
    res.json({ name, serie, serilNumer });
  } catch (error) {
    console.log(error);
  }
};
const deleteFunko = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input('id', req.params.id)
      .query(queries.deleteFunko);

    if (result.recordset === undefined)
      return res.json({ status: 404, msg: 'funko not find' });

    return res.json({ msg: 'funko deleted' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getFunkos,
  postFunko,
  putFunkoById,
  deleteFunko,
  getFunkoById,
};
