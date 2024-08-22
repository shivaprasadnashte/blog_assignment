import Comment from "../models/comment.model.js";
import Post from "../models/post.model.js";

export const addComment = async (req, res) => {
  const { body, postId } = req.body;
  const userId = req.user._id; // Assuming the user is authenticated and authMiddleware is used

  if (!body || !postId) {
    return res.status(400).json({ message: "Please provide all required fields" });
  }

  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const comment = new Comment({
      body,
      post: postId,
      author: userId,
    });

    await comment.save();
    post.comments.push(comment._id);
    await post.save();

    res.status(201).json({ message: "Comment added successfully", comment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


export const deleteComment = async (req, res) => {
    const { commentId } = req.params;
    const userId = req.user._id;
  
    try {
      const comment = await Comment.findById(commentId);
  
      if (!comment) {
        return res.status(404).json({ message: "Comment not found" });
      }
  
      if (comment.author.toString() !== userId.toString()) {
        return res.status(403).json({ message: "Unauthorized action" });
      }
  
      await Comment.findByIdAndDelete(commentId);
  
      // Remove the comment from the post's comments array
      await Post.findByIdAndUpdate(comment.post, {
        $pull: { comments: commentId }
      });
  
      res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };

  
  export const updateComment = async (req, res) => {
    const { commentId } = req.params;
    const { body } = req.body;
    const userId = req.user._id;
  
    try {
      const comment = await Comment.findById(commentId);
  
      if (!comment) {
        return res.status(404).json({ message: "Comment not found" });
      }
  
      if (comment.author.toString() !== userId.toString()) {
        return res.status(403).json({ message: "Unauthorized action" });
      }
  
      comment.body = body || comment.body;
      await comment.save();
  
      res.status(200).json({ message: "Comment updated successfully", comment });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };

  

  export const getCommentById = async (req, res) => {
    const { commentId } = req.params;
  
    try {
      const comment = await Comment.findById(commentId).populate('author', 'username').populate('post', 'title');
  
      if (!comment) {
        return res.status(404).json({ message: "Comment not found" });
      }
  
      res.status(200).json(comment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
  