"use client";

import React, { useState, useEffect } from "react";
import { fetchPosts } from "@/utils/api";
import PostCard from "@/components/PostCard/PostCard";
import { Post } from "@/types/post";

const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10;

  useEffect(() => {
    const loadPosts = async () => {
      const { posts, totalPages } = await fetchPosts(currentPage, limit);
      setPosts(posts);
      setTotalPages(totalPages);
    };
    loadPosts();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="px-10 py-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <div className="flex justify-center mt-20 space-x-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-300"
        >
          Previous
        </button>
        <span className="text-lg font-semibold">
          {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostsPage;
