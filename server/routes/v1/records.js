
exports.get = async function (req, res, next) {
  // TODO: read from db
  res.json(require('../../../records/2017.json'));
};
