import CommentModel from "../../DB/models/comment.model.js"

export const addComment = async (req ,res) => {
    try{
        const newComment = await CommentModel.create(req.body);
        return res.status(201).json({message:"comment created successfully", newComment});
    }catch(error){
        return res.status(500).json({message:"Internal server error", error: error.message});
    }
}

export const deleteComment = async (req ,res) => {
    try{
        const {id} = req.params;
        const comment = await CommentModel.findByPk(id);
        if(!comment){
            return res.status(404).json({message:"comment not found"});
        }
        await comment.destroy();
        return res.status(200).json({message:"comment deleted successfully"});
    }catch(error){
        console.log(error);
    }
}

export const updateComment = async (req ,res) => {
    try{
        const {id} = req.params;
        const {content} = req.body;
        const comment = await CommentModel.findByPk(id);
        if(!comment){
            return res.status(404).json({message:"comment not found"});
        }
        comment.content = content;
        await comment.save();
        return res.status(200).json({message:"comment updated successfully"});
    }catch(error){
        console.log(error);
    }
}

export const getAllComments = async (req ,res) => {
    try{
        const {id} = req.params;
        const comments = await CommentModel.findAll({where:{postId:id}});
        if(!comments){
            return res.status(404).json({message:"comments not found"});
        }
        return res.status(200).json({message:"comments found successfully", comments});
    }catch(error){
        console.log(error);
    }
}