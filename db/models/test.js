'use strict';
const Sequelize = require('sequelize');
const db = require('../db');
const Student = require('./student');

const Test = db.define('tests', {
  subject: {
    type: Sequelize.STRING,
    allowNull: false
  },
  grade: {
    type: Sequelize.NUMBER,
    allowNull: false
  },
  subject: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

module.exports = Test;
