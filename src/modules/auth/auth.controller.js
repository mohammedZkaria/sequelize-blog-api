import UserModel from "../../DB/models/User.model.js";

export const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const newUser = await UserModel.create({ firstName, lastName, email, password });
    
    return res.status(201).json({ message: "User registered successfully", newUser });

  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(409).json({ message: "Email already exists! Please use another email." });
    }

    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
};
