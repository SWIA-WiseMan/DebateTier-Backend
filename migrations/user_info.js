const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "user_info",
        {
            user_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                unique: true,
                allowNull: false,
            },
            user_email: {
                type: Sequelize.STRING(100),
                allowNull: false,
                unique: true,
            },
            user_name: {
                type: Sequelize.STRING(100),
                allowNull: false,
                unique: true,
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
