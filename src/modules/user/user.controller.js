import UserModel from "../../DB/models/User.model.js";
import { Sequelize, Op } from "sequelize";

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { fullName, password, role } = req.body;

  const user = await UserModel.findByPk(id);
  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }
  user.fullName = fullName;
  user.password = password;
  user.role = role;
  await user.save();
  return res.status(200).json({ message: "user updated successfully" });
};

export const search = async (req, res) => {
  try {
    const { fullName, email } = req.query;

const users = await UserModel.findAll({
  where: {
    [Sequelize.Op.or]: [
      {
        firstName: {
          [Sequelize.Op.like]: `%${fullName || ''}%`, 
        },
      },
      {
        email: {
          [Sequelize.Op.like]: `%${email || ''}%`, 
        },
      },
    ],
  },
});

    if (!users) {
      return res.status(404).json({ message: "user is not found" });
    }

    return res.status(200).json({ message: "users found successfully", users });
  } catch (error) {
    console.log(error);
  }
};
