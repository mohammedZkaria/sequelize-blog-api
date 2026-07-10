import PostModel from "../../DB/models/Post.model.js";

export const addPost = async (req, res) => {
    try {
        const { title, content, userId } = req.body;
        console.log({ title, content, userId });
        

        const newPost = await PostModel.create({ title, content, userId });

        return res.status(201).json({ message: "Post created successfully", newPost });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};