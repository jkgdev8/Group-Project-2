const { Model, DataTypes } = require('sequelize');
const { Profile } = require('.');
const sequelize = require('../config/connection');


// create our Post model
class Username extends Model {
}

// create fields/columns for Profile model
Username.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },

    profile_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'profile',
      key: 'id'
      }
    },
  
    },
    {
     sequelize,
     freezeTableName: true,
     underscored: true,
     modelName: 'profile'
    }
  
);

module.exports = Username;