'use strict';
module.exports = (sequelize, DataTypes) => {
  var Farmer = sequelize.define('Farmer', {
    lastname: DataTypes.STRING
  });

  Farmer.associate = function(models) {
    models.Farmer.hasMany(models.Farm);
  };
  return Farmer;
};