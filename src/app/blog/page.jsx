import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BlogPage() {
  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto my-12 px-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          Kyoto Travel Blog
        </h1>
        <p className="mt-4 text-lg text-gray-600 hover:text-gray-800 transition duration-300">
          Explore the charm, history, and hidden corners of Kyoto through these
          featured blog posts.
        </p>

        {/* Blog Posts */}
        <div className="space-y-8">
          <article className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-2">
              1. A Morning in Arashiyama Bamboo Grove
            </h2>
            <p className="text-gray-600">
              Stroll through towering bamboo stalks in Arashiyama and discover
              the peaceful atmosphere of Kyoto’s western district. A perfect
              spot for reflection and photography.
            </p>
          </article>

          <article className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-2">
              2. Gion District: The Heart of Traditional Kyoto
            </h2>
            <p className="text-gray-600">
              Step into the old world of geishas, teahouses, and lantern-lit
              alleys. Gion offers a timeless glimpse into Kyoto's cultural soul.
            </p>
          </article>

          <article className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-2">
              3. Fushimi Inari Shrine: 10,000 Red Torii Gates
            </h2>
            <p className="text-gray-600">
              Hike through the iconic red gates of Fushimi Inari Taisha. Learn
              the spiritual significance and enjoy panoramic views of Kyoto from
              the mountain trails.
            </p>
          </article>

          <article className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-2">
              4. Kyoto's Hidden Cafes & Matcha Spots
            </h2>
            <p className="text-gray-600">
              From traditional tea houses to modern matcha cafés, Kyoto is a
              haven for green tea lovers. Discover quiet spots for a peaceful
              break.
            </p>
          </article>

          <article className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-2">
              5. Autumn Colors at Tofuku-ji Temple
            </h2>
            <p className="text-gray-600">
              Visit Kyoto in fall to witness stunning maple leaves at Tofuku-ji.
              The vibrant reds and golds transform temple gardens into living
              artwork.
            </p>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
