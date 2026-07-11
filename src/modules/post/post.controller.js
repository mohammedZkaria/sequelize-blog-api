import PostModel from "../../DB/models/Post.model.js";

export const addPost = async (req, res) => {
  try {
    const { title, content, userId } = req.body;
    console.log({ title, content, userId });

    const newPost = await PostModel.create({ title, content, userId });

    return res
      .status(201)
      .json({ message: "Post created successfully", newPost });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await PostModel.findByPk(id);
    
    if (!post) {
      return res.status(404).json({ message: "post not found" });
    }
    await post.destroy();
    return res.status(200).json({ message: "post deleted successfully" });
  } catch (error) {
    console.error(error);
  }
};
