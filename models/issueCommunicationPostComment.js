const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('issueCommunicationPostComment', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "id. 댓글 인덱스"
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "post_id. 게시글 인덱스",
      references: {
        model: 'issue_communication_post',
        key: 'id'
      }
    },
    writerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "writer_id. 작성자 인덱스",
      references: {
        model: 'user_info',
        key: 'id'
      }
    },
    contene: {
      type: DataTypes.STRING(200),
      allowNull: false,
      comment: "content. 댓글 내용"
    },
    thumbs: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "thumb. 댓글 좋아요 수"
    }
  }, {
    sequelize,
    tableName: 'issue_communication_post_comment',
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
      {
        name: "FK_issue_communication_post_comment_postId_issue_communiication_",
        using: "BTREE",
        fields: [
          { name: "postId" },
        ]
      },
      {
        name: "FK_issue_communication_post_comment_writerId_user_info_id",
        using: "BTREE",
        fields: [
          { name: "writerId" },
        ]
      },
    ]
  });
};
