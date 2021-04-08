const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Portfolio extends Model {}

Portfolio.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        tools: {
            type: DataTypes.ARRAY,
            allowNull: false
        },
        github: {
            type: DataTypes.STRING,
            allowNull: false
        },
        deployment: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'portfolio'
    }
);

module.exports = Portfolio;
