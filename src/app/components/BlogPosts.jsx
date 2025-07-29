"use client"; // since it uses state and effects

import React, { useEffect, useState } from "react";

export default function BlogPosts() {
  const [posts, setPosts] = useState([]);
  const [expandedPostIds, setExpandedPostIds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=4")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setError(true);
        setLoading(false);
      });
  }, []);

  const toggleExpand = (id) => {
    setExpandedPostIds((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  const truncate = (text, limit = 120) =>
    text.length > limit ? text.substring(0, limit) + "..." : text;

  return (
    <section className="max-w-4xl mx-auto my-12 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Latest Blog Posts
      </h2>

      {loading && <p className="text-center">Loading posts...</p>}
      {error && (
        <p className="text-center text-red-500">Failed to load blog posts.</p>
      )}

      {!loading && !error && (
        <div className="space-y-6">
          {posts.map((post) => {
            const isExpanded = expandedPostIds.includes(post.id);
            return (
              <div
                key={post.id}
                className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-xl transition duration-300 group"
              >
                <h3
                  className="text-xl font-semibold mb-2 text-gray-900 cursor-pointer group-hover:text-primary transition"
                  onClick={() => toggleExpand(post.id)}
                >
                  {post.title}
                </h3>
                <p className="text-gray-700 mb-2">
                  {isExpanded ? post.body : truncate(post.body)}
                </p>
                <button
                  onClick={() => toggleExpand(post.id)}
                  className="text-accent hover:underline font-medium transition"
                >
                  {isExpanded ? "Show less" : "Read more →"}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
