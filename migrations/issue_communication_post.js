const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "issue_communication_post",
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                unique: true,
                allowNull: false,
            },
            title: {
                type: Sequelize.STRING(200),
                allowNull: false,
            },
            thumb: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultVaule: 0,
            },
        },
        {
            timestamps: true,
            paranoid: true, //삭제일
        }
    );
};
