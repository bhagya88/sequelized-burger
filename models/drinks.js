'use strict';
module.exports = function(sequelize, DataTypes) {
  var drinks = sequelize.define('drinks', {
    drink_name: DataTypes.STRING,
    burgerId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        drinks.belongsTo(models.burgers);
      }
    }
  });
  return drinks;
};