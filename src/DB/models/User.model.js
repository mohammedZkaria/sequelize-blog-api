import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";

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
},{
  paranoid : true ,
  
});

export default UserModel;
