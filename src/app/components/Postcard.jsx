export default function Postcard() {
  return (
    <section className="max-w-4xl mx-auto my-12 px-6 opacity-0 animate-fade-in-up">
      <h1 className="text-bold text-center text-4xl">Post Card</h1>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row transition duration-500 hover:shadow-2xl">
        <img
          src="/images/postcard.jpg"
          alt="Kyoto Postcard"
          className="w-full md:w-1/2 h-80 object-cover transform transition-transform duration-500 hover:scale-105"
        />
        <div className="p-6 md:w-1/2 flex flex-col justify-center bg-gradient-to-br from-white via-gray-100 to-white">
          <h3 className="text-center font-bold text-3xl text-primary mb-4">
            A Postcard from Kyoto
          </h3>
          <p className="text-gray-700 leading-relaxed text-center md:text-left">
            “The scent of incense floats through the ancient streets, where
            tradition and tranquility meet. Kyoto’s spirit is timeless — a
            gentle reminder of beauty in stillness.”
          </p>
        </div>
      </div>
    </section>
  );
}
