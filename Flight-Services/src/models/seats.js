'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane,{
        foreignKey : 'airplaneId',
        onDelete : 'CASCADE'

      })
    }
  }
  Seats.init({
    airplaneId:{

    type: DataTypes. INTEGER,
    allowNull : false},
    row: {type : DataTypes.INTEGER,
      allowNull:false},
    column: {type : DataTypes.STRING,
      allowNull : false},
    type: {type:DataTypes.ENUM,
      values : ['buissness','economy','premium-economy','first-class'],
      default : 'economy',
      allowNull : false}
  }, {
    sequelize,
    modelName: 'seats',
  });
  return Seats;
};