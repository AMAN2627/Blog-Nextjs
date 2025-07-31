
export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto my-12 px-4" id="home">
      <h2 className="text-center text-3xl font-heading text-primary mb-8 relative">
        KYOTO: A beautiful Kyoto travel blog
        <span className="block w-20 h-1 bg-accent mx-auto mt-2"></span>
      </h2>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        <img
          src="/images/home.jpg"
          alt="Kyoto Home"
          className="w-full md:w-1/2 h-96 object-cover transition-transform hover:scale-105 duration-300"
        />
        <div className="p-6 md:w-1/2">
          <p className="mb-4 text-gray-600">
            Kyoto, Japan's ancient capital, offers a serene escape from modern
            life. With over 2,000 temples and gardens, the city moves at the
            pace of flowing water and rustling bamboo.
          </p>
          <p className="mb-4 text-gray-600">
            Morning walks through Arashiyama's bamboo forest or evening tea
            ceremonies provide perfect moments of tranquility. The absence of
            skyscrapers preserves breathtaking views of the surrounding
            mountains.
          </p>
          <p className="text-gray-600">
            Locals practice "mono no aware" - appreciating the beauty of
            impermanence. This philosophy creates an atmosphere where visitors
            naturally slow down and savor each moment.
          </p>
        </div>
      </div>
    </section>
  );
}
