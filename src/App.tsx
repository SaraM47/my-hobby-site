import "./App.css";
import banner from "./assets/banner.png";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ArtBookCard } from "./components/ArtBookCard";
import { artbooks } from "./data/artbooks";

export default function App() {
  return (
    <>
      <Header title="Art Books Collection" bannerURL={banner} />
      <main className="main">
        <div className="grid">
          {/* Mapping through the artbooks array to render ArtbooksCard for each book */}
          {artbooks.map((book) => (
            <ArtBookCard key={book.id} book={book} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
