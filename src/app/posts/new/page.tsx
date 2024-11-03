"use client";

import { createPost } from "@/utils/api";
import React, { useState } from "react";

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    image: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCreatePost = async () => {
    try {
      const { title, description, content, image } = formData;
      const newPost = await createPost(title, description, content, image);
      console.log("Post created successfully:", newPost);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white mt-10">
      <div className="bg-white py-12 px-16 shadow-xl w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-12 text-center text-blue-700">
          Create a New Post
        </h2>

        <div className="relative mb-4">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className={`peer h-10 mb-5 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 bg-transparent ${
              formData.title ? "py-6" : ""
            }`}
            placeholder=" "
          />
          <label
            className={`absolute left-0 top-2 text-gray-500 text-sm transition-all pointer-events-none peer-focus:text-blue-500 ${
              formData.title && "-top-5"
            }`}
          >
            Title (Required)
          </label>
        </div>

        <div className="relative mb-4">
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={`peer h-10 w-full mb-5 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 bg-transparent ${
              formData.description ? "py-6" : ""
            }`}
            placeholder=" "
          />
          <label
            className={`absolute left-0 top-2 text-gray-500 text-sm transition-all pointer-events-none peer-focus:text-blue-500 ${
              formData.description && "-top-5"
            }`}
          >
            Description (Optional)
          </label>
        </div>

        <div className="relative mb-6">
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className={`peer h-10 w-full border-b-2 mb-5 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 bg-transparent ${
              formData.image ? "py-6" : ""
            }`}
            placeholder=" "
          />
          <label
            className={`absolute left-0 top-2 text-gray-500 text-sm transition-all pointer-events-none peer-focus:text-blue-500 ${
              formData.image && "-top-5"
            }`}
          >
            Image URL (Optional)
          </label>
        </div>
        <div className="relative mb-4">
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            className={`peer h-32 w-full border-b-2 mb-5 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 bg-transparent ${
              formData.content ? "py-6" : ""
            }`}
            placeholder=" "
          />
          <label
            className={`absolute left-0 top-2 text-gray-500 text-sm transition-all pointer-events-none peer-focus:text-blue-500 ${
              formData.content && "-top-5"
            }`}
          >
            Content (Required)
          </label>
        </div>

        <button
          onClick={handleCreatePost}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Create Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
