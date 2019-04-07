'use strict';
module.exports = (sequelize, DataTypes) => {
  var Farm = sequelize.define('Farm', {
    farmcode: {type: DataTypes.STRING, validate: {is: /[A-Z]{3}/}},
    year: DataTypes.INTEGER,
    state: DataTypes.STRING,
	  address: DataTypes.STRING,
    county: DataTypes.STRING,
    latitude: DataTypes.DECIMAL,
    longitude: DataTypes.DECIMAL,
    note: DataTypes.TEXT,
    additional_contact: DataTypes.STRING
  }); 

  Farm.associate = function (models) {
    models.Farm.belongsTo(models.Farmer, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Farm;
};