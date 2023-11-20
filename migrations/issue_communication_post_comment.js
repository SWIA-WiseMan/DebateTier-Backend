const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "issue_communication_post_comment",
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                unique: true,
                allowNull: false,
            },
            content: {
                type: Sequelize.STRING(200),
                allowNull: false,
            },
            thumb: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultVaule: 0,
            },
            user_profile_url: {
                type: Sequelize.STRING(2048),
                allowNull: true,
            },
        },
        {
            timestamps: true,
            paranoid: true, //삭제일
        }
    );
};
