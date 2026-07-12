import CommentModel from "../../DB/models/comment.model.js";
import PostModel from "../../DB/models/Post.model.js";
import UserModel from "../../DB/models/User.model.js";

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

export const getPostAndAllComments = async (req, res) => {
  // 💡 تم تصحيح rea إلى res
  try {
    // ✅ أضفنا await هنا لأن دالة findAll بتاخد وقت في قاعدة البيانات
    const post = await PostModel.findAll({
      include: [
        {
          model: CommentModel,
          include:{
             model: UserModel,
          attributes: ["fullName", "firstName", "lastName"],
          }
        },
        {
          model: UserModel,
          attributes: ["fullName", "firstName", "lastName"],
        },
      ],
    });

    return res.status(200).json({ post });
  } catch (error) {
    return res.status(500).json({ message: "Error", error: error.message });
  }
};
