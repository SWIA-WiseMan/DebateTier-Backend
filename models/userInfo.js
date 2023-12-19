const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userInfo', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "유저 인덱스"
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "유저 이메일"
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "유저 이름"
    },
    profileUrl: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "유저 프로필 url"
    }
  }, {
    sequelize,
    tableName: 'user_info',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
