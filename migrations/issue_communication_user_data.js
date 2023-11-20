const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "issue_communication_user_data",
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                unique: true,
                allowNull: false,
            },
            title: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            content: {
                type: Sequelize.STRING(200),
                allowNull: false,
            },
            file_upload_url: {
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
