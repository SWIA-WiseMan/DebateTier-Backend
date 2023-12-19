const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('issueCommunicationPost', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "id. 게시글 인덱스"
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "작성자 인덱스"
    },
    title: {
      type: DataTypes.STRING(200),
      allowNull: false,
      comment: "게시글 제목"
    },
    thumb: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "좋아요 수"
    },
    isPopular: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "인기글 여부 default 0"
    },
    fileUploadUrl: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "파일 s3 url"
    }
  }, {
    sequelize,
    tableName: 'issue_communication_post',
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
