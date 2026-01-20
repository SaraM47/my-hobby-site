import "./ArtBookCard.css";
import type { ArtBook } from "../data/artbooks";

interface ArtBookCardProps {
  book: ArtBook;
}

export const ArtBookCard = ({ book }: ArtBookCardProps) => {
  return (
    <article className="bookCard">
      {/* Book cover image */}
      <img
        src={book.image}
        alt={`Cover for ${book.title}`}
        className="bookImage"
      />
      <h2>{book.title}</h2>

      <p>Author: {book.author}</p>
      <p>Year of release: {book.releaseYear}</p>

      {/* Conditional operation rendering to display if the book has been read */}
      <p
        style={{
          fontWeight: book.isRead ? "bold" : "bold",
          color: book.isRead ? "green" : "#842029",
        }}
      >
        Read: {book.isRead ? "Yes" : "No"}
      </p>
    </article>
  );
};
