var DataTypes = require("sequelize").DataTypes;
var _issueCommunicationPost = require("./issueCommunicationPost");
var _issueCommunicationPostComment = require("./issueCommunicationPostComment");
var _userInfo = require("./userInfo");

function initModels(sequelize) {
  var issueCommunicationPost = _issueCommunicationPost(sequelize, DataTypes);
  var issueCommunicationPostComment = _issueCommunicationPostComment(sequelize, DataTypes);
  var userInfo = _userInfo(sequelize, DataTypes);

  issueCommunicationPostComment.belongsTo(issueCommunicationPost, { as: "post", foreignKey: "postId"});
  issueCommunicationPost.hasMany(issueCommunicationPostComment, { as: "issue_communication_post_comments", foreignKey: "postId"});
  issueCommunicationPostComment.belongsTo(userInfo, { as: "writer", foreignKey: "writerId"});
  userInfo.hasMany(issueCommunicationPostComment, { as: "issue_communication_post_comments", foreignKey: "writerId"});

  return {
    issueCommunicationPost,
    issueCommunicationPostComment,
    userInfo,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
