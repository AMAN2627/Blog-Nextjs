"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const { name, email, phone, comment } = formData;
    if (!name || !email || !phone || !comment) {
      alert("Please fill in all fields.");
      return;
    }
    setComments((prev) => [...prev, formData]);
    setFormData({ name: "", email: "", phone: "", comment: "" });
  };

  return (
    <section
      className="bg-white max-w-3xl mx-auto my-16 px-8 py-10 rounded-2xl shadow-xl border border-gray-200"
    >
      <h3 className="text-center text-3xl font-bold text-blue-900 mb-8">
        💬 Get in Touch
      </h3>

      <form className="space-y-6">
        <div className="relative">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder=" "
            className="peer w-full px-4 pt-6 pb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
          />
          <label className="absolute left-4 top-2 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all duration-200">
            Full Name
          </label>
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder=" "
            className="peer w-full px-4 pt-6 pb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
          />
          <label className="absolute left-4 top-2 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all duration-200">
            Email Address
          </label>
        </div>

        <div className="relative">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder=" "
            className="peer w-full px-4 pt-6 pb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
          />
          <label className="absolute left-4 top-2 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all duration-200">
            Phone Number
          </label>
        </div>

        <div className="relative">
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            placeholder=" "
            rows="5"
            className="peer w-full px-4 pt-6 pb-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
          ></textarea>
          <label className="absolute left-4 top-2 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all duration-200">
            Your Message
          </label>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-md font-medium hover:brightness-110 transition"
        >
          ✉️ Send Message
        </button>
      </form>

      {comments.length > 0 && (
        <div className="mt-10">
          <h4 className="text-xl font-semibold text-blue-900 mb-4">
            📝 Comments:
          </h4>
          <ul className="space-y-4">
            {comments.map((c, i) => (
              <li
                key={i}
                className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-600"
              >
                <p className="font-bold">
                  {c.name} ({c.email})
                </p>
                <p className="text-sm text-gray-600 mb-1">📞 {c.phone}</p>
                <p className="text-gray-700">{c.comment}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
