import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import PostModel from "./Post.model.js";
import CommentModel from "./comment.model.js";

const UserModel = sequelize.define("user", {
  fullName: {
    type: DataTypes.VIRTUAL,
    set(v){
      const [ firstName, lastName]  = v.split(" ");
      this.setDataValue("firstName", firstName);
      this.setDataValue("lastName", lastName);
    },

    get(v){
      return ` ${this.getDataValue("firstName")} ${this.getDataValue("lastName")}`
    }
  },
  firstName :{
    type: DataTypes.STRING,
    allowNull: false,
  }
  ,
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM("user", "admin"),
    allowNull: false,
  },
});

UserModel.hasMany(PostModel, { foreignKey: "userId", onDelete: "CASCADE", onUpdate: "CASCADE" });
UserModel.hasMany(CommentModel, { foreignKey: "userId", onDelete: "CASCADE", onUpdate: "CASCADE" });

CommentModel.belongsTo(UserModel, { foreignKey: "userId" });
CommentModel.belongsTo(PostModel, { foreignKey: "postId" }); 

PostModel.belongsTo(UserModel, { foreignKey: "userId" });

PostModel.hasMany(CommentModel, { foreignKey: "postId", onDelete: "CASCADE", onUpdate: "CASCADE" });

export default UserModel;
