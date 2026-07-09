import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";

const PostModel = sequelize.define("post", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

export default PostModel