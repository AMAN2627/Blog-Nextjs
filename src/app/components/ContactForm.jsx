"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const { name, email, comment } = formData;
    if (!name || !email || !comment) {
      alert("Please fill in all fields.");
      return;
    }
    setComments((prev) => [...prev, formData]);
    setFormData({ name: "", email: "", comment: "" });
  };

  return (
    <section
      id="contact"
      className="bg-white max-w-2xl mx-auto my-12 p-6 rounded-lg shadow-md"
    >
      <h3 className="text-center text-2xl font-heading text-primary mb-6">
        Leave a comment
      </h3>
      <label className="text-primary font-medium">Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-3 mb-4 border rounded focus:outline-none focus:border-accent"
      />
      <label className="text-primary font-medium">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-3 mb-4 border rounded focus:outline-none focus:border-accent"
      />
      <label className="text-primary font-medium">Comment</label>
      <textarea
        name="comment"
        value={formData.comment}
        onChange={handleChange}
        rows="4"
        className="w-full p-3 mb-4 border rounded resize-none focus:outline-none focus:border-accent"
      ></textarea>
      <button
        onClick={handleSubmit}
        className="block mx-auto px-6 py-2 rounded-md bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-semibold hover:brightness-110 transition"
      >
        Submit
      </button>

      {comments.length > 0 && (
        <div className="mt-8">
          <h4 className="text-lg font-semibold text-primary mb-2">Comments:</h4>
          <ul>
            {comments.map((c, i) => (
              <li
                key={i}
                className="mb-3 bg-gray-100 p-3 rounded border-l-4 border-accent"
              >
                <p className="font-medium">{c.name}</p>
                <p className="font-medium">{c.email}</p>
                <p className="text-sm text-gray-600">{c.comment}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
