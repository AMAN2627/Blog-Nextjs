import Hero from "./components/Hero";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Postcard from "./components/Postcard";
import BlogPosts from "./components/BlogPosts";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Gallery />
      <Postcard />
      <BlogPosts />
      <ContactForm />
      <Footer />
    </div>
  );
}
