import { Op } from "sequelize";
import UserModel from "../../DB/models/User.model.js";

export const signup = async (req, res) => {
  try {
    const newUser = await UserModel.create(req.body);

    return res
      .status(201)
      .json({ message: "User registered successfully", newUser });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(409)
        .json({ message: "Email already exists! Please use another email." });
    }

    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findAll({
      where: {
        [Op.and]: [{ email: email }, { password: password }],
      },
    });
    if (user.length > 0) {
      return res
        .status(200)
        .json({ message: "User logged in successfully", user });
    }
    return res.status(400).json({ message: "email or password is incorrect" });
  } catch (error) {
    console.log(error);
  }
};
