'use strict';
var models = require('../models');
module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return models.burgers.bulkCreate([
        {burger_name: "Veggie Burger"},
        {burger_name: "Paneer Burger"},
        {burger_name: "Avacado Burger"},
        {burger_name: "Noodle Burger"},
        {burger_name: "Eggplant Burger"}
      ])
  },

  down: function (queryInterface, Sequelize) {


    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

    return models.burgers.destroy({truncate:true},{where:{burger_name:["Veggie Burger","Paneer Burger","Avacado Burger","Noodle Burger","Eggplant Burger"]}});

  }
};
