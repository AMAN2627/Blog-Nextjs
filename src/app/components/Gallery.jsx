import React from "react";

const images = [
  {
    src: "/images/img1.jpg",
    title: "Arashiyama Bamboo Grove",
    line1: "Walk through towering bamboo stalks.",
    line2: "A serene path filled with whispers of nature.",
    line3: "One of Kyoto's most iconic sights.",
  },
  {
    src: "/images/img2.jpg",
    title: "Fushimi Inari Shrine",
    line1: "Thousands of vibrant torii gates.",
    line2: "A spiritual journey into the hills.",
    line3: "Dedicated to the Shinto god of rice.",
  },
  {
    src: "/images/img3.jpg",
    title: "Kinkaku-ji (Golden Pavilion)",
    line1: "A temple wrapped in gold leaf.",
    line2: "Reflects beautifully on the surrounding pond.",
    line3: "Tranquility and elegance combined.",
  },
  {
    src: "/images/img4.jpg",
    title: "Gion District",
    line1: "Home to geisha culture and tea houses.",
    line2: "Traditional streets with wooden buildings.",
    line3: "A glimpse into old Kyoto life.",
  },
  {
    src: "/images/img5.jpg",
    title: "Philosopher's Path",
    line1: "A peaceful walk along a canal.",
    line2: "Perfect during cherry blossom season.",
    line3: "Named after a famous Kyoto philosopher.",
  },
  {
    src: "/images/img6.jpg",
    title: "Kiyomizu-dera Temple",
    line1: "Perched on a hillside with scenic views.",
    line2: "No nails used in its wooden stage.",
    line3: "A UNESCO World Heritage site.",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-heading text-center text-gray-800 mb-8">
        Kyoto Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 group"
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4 text-gray-700 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 opacity-90">
              <h3 className="text-lg font-semibold mb-1 text-center">
                {img.title}
              </h3>
              <p className="text-sm text-center">{img.line1}</p>
              <p className="text-sm text-center">{img.line2}</p>
              <p className="text-sm text-center">{img.line3}</p>
              <div className="mt-2 text-center">
                <a
                  href="#"
                  className="text-accent font-medium hover:underline transition"
                >
                  Read more →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
