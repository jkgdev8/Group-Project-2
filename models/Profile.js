const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


// create our Post model
class Profile extends Model {
  static upvote(body, models) {
    return models.Vote.create({
      user_id: body.user_id,
      post_id: body.post_id
    }).then(() => {
      return Profile.findOne({
        where: {
          id: body.post_id
        },
        attributes: [
          'id',
          'subscription',
          'price',
          'date_payment',
          
        ],
        
      });
    });
  }
}

// create fields/columns for Profile model
Profile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    subscription: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      
    },
    date_payment: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'profile'
  }
);

module.exports = Profile;
