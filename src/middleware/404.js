'use strict';

const notFoundHandler = (req, res, next) => {
  res.status(404).send('There\'s no there there');
};

module.exports = notFoundHandler;