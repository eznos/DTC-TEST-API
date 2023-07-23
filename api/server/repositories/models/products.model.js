const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const products = sequelize.define(
        "products",
        {
            id: {
                unique: true,
                allowNull: false,
                primaryKey: true,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                field: "id",
                comment: "ไอดีของตาราง",
            },
            name: {
                allowNull: false,
                type: DataTypes.STRING,
                field: "name",
            },
            price: {
                allowNull: false,
                type: DataTypes.INTEGER,
                field: "price",
            },
            amount: {
                allowNull: false,
                type: DataTypes.INTEGER,
                field: "amount",
            },
            type: {
                allowNull: false,
                type: DataTypes.ENUM,
                values: ["desk", "hanging", "pocket","poster"],
                field: "type",
            },
            image: {
                type: DataTypes.STRING,
                field: "image",
            },
            deleted: {
                type: DataTypes.BOOLEAN,
                field: "deleted",
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
                field: "created_at",
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
                field: "updated_at",
            },
        },
        {
            sequelize,
            modelName: "products",
            tableName: "products",
            timestamps: true,
        }
    );

    return products;
};
