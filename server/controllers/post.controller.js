import Post from "../models/post.model.js";

// Create a new post
export const createPost = async (req, res) => {
  const { title, body, category } = req.body;

  if (!title || !body || !category) {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  try {
    const post = new Post({
      title,
      body,
      author: req.user.id, // Assuming req.user is set after JWT authentication
      category,
    });

    await post.save();
    res.status(201).json({ message: "Post created successfully", post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("author", "username");
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update an existing post
export const updatePost = async (req, res) => {
  const { postId } = req.params;
  const { title, body, category } = req.body;

  try {
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Check if the user is the author
    if (post.author.toString() !== req.user.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    post.title = title || post.title;
    post.body = body || post.body;
    post.category = category || post.category;

    await post.save();
    res.status(200).json({ message: "Post updated successfully", post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete a post
export const deletePost = async (req, res) => {
  const { postId } = req.params;

  try {
    const post = await Post.findByIdAndDelete(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Check if the user is the author
    if (post.author.toString() !== req.user.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const searchPosts = async (req, res) => {
  const { query } = req.query;
  const { category } = req.body;

  try {
    const searchConditions = [];

    // Add title and body search conditions if `query` is a string
    if (typeof query === "string" && query.trim() !== "") {
      searchConditions.push(
        { title: { $regex: query, $options: "i" } },
        { body: { $regex: query, $options: "i" } }
      );
    }

    // Add category search condition if `category` is a string
    if (typeof category === "string" && category.trim() !== "") {
      searchConditions.push({ category: { $regex: category, $options: "i" } });
    }

    // If no valid search conditions, return empty result
    if (searchConditions.length === 0) {
      return res.status(400).json({ message: "Invalid search criteria" });
    }

    const posts = await Post.find({
      $or: searchConditions,
    }).populate("author", "username");

    // Handle case where no posts are found
    if (posts.length === 0) {
      return res.status(404).json({ message: "No posts found" });
    }

    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
