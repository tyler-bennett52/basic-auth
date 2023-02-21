'use strict';

function errorHandler(err, req, res, next) {
  res.status(500).send({
    path: req.path,
    method: req.method,
    query: req.query,
    error: err.message,
  });
}

module.exports = errorHandler;