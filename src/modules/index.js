import CommentModel from "../DB/models/comment.model.js";
import PostModel from "../DB/models/Post.model.js";
import UserModel from "../DB/models/User.model.js";

// إنشاء العلاقات هنا بشكل مباشر وطبيعي جداً
UserModel.hasMany(PostModel, { foreignKey: "userId", onDelete: "CASCADE" });
PostModel.belongsTo(UserModel, { foreignKey: "userId" });

UserModel.hasMany(CommentModel, { foreignKey: "userId", onDelete: "CASCADE" });
CommentModel.belongsTo(UserModel, { foreignKey: "userId" });

PostModel.hasMany(CommentModel, { foreignKey: "postId", onDelete: "CASCADE" });
CommentModel.belongsTo(PostModel, { foreignKey: "postId" });

// تصديرهم جميعاً من مكان واحد كـ سنترال للموديلات
export { UserModel, PostModel, CommentModel };