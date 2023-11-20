const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "issue_communication_news",
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                unique: true,
                allowNull: false,
            },
            news_title: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            news_content: {
                type: Sequelize.STRING(2048),
                allowNull: false,
            },
            is_showed: {
                type: Sequelize.BOOLEAN,
                defaultVaule: false,
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
