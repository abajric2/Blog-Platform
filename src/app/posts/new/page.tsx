"use client";

import { createPost } from "@/utils/api";
import React from "react";

const CreatePost = () => {
  const handleCreatePost = async () => {
    try {
      const title = "T Title";
      const content = "This is a sample content.";
      const description = "Desc";
      const image = "https://example.com/sample-image.jpg";

      const newPost = await createPost(title, description, content, image);
      console.log("Post created successfully:", newPost);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div>
      <button onClick={handleCreatePost}>Create Post</button>
    </div>
  );
};

export default CreatePost;
