/**
 * Middleware that adds supports for async
 * @reference https://medium.com/@Abazhenov/using-async-await-in-express-with-node-8-b8af872c0016
 * @example router.get('/users/:id', asyncMiddleware(async (req, res, next) => { ... }));
 */
module.exports = function asyncMiddleware (fn) {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(next);
  };
};
