import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";


const CommentModel = sequelize.define("comment", {
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

export default CommentModel