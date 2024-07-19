'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  note.init(
    {
    userId: DataTypes.STRING,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    color:DataTypes.STRING,
    isArchive : DataTypes.BOOLEAN,
    isTrash : DataTypes.BOOLEAN
},
{
  sequelize,
  modelName: 'note'
}
);
return note;
};