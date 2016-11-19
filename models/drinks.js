'use strict';
module.exports = function(sequelize, DataTypes) {
  var drinks = sequelize.define('drinks', {
    drink_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return drinks;
};