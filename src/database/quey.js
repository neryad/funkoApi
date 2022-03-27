const queries = {
  getAllFunkos: 'Select * FROM funkos',
  getFunkoById: 'SELECT * FROM funkos where id = @id',
  addNewFunko:
    'INSERT INTO funkos (name,serie,serilNumer) VALUES (@name,@serie,@serilNumer);',
  updateFunko:
    'UPDATE funkos set name = @name,serie = @serie, serilNumer = @serilNumer WHERE id = @id;',
  deleteFunko: 'DELETE FROM funkos WHERE id = @id',
};

module.exports = { queries };
