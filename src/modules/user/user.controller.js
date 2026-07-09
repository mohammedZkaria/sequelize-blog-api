import UserModel from "../../DB/models/User.model.js";

export const updateUser = async (req, res) => {
    const {id} = req.params ;
    const {fullName , password , role } = req.body ;

    const user = await UserModel.findByPk(id) ;
    if (!user) {
        return res.status(404).json({message : "user not found"})
    }
    user.fullName = fullName ;
    user.password = password ;
    user.role = role ;
    await user.save() ;
    return res.status(200).json({message : "user updated successfully"})

};