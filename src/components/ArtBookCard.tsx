import "./ArtBookCard.css";
import type { ArtBook } from "../data/artbooks";

interface ArtBookCardProps {
    book: ArtBook;
}

export const ArtBookCard = ({ book } : ArtBookCardProps) => {
    return (
        <article className="bookCard">
            <h2>{book.title}</h2>

            <p>Författare: {book.author}</p>
            <p>Utgivningsår: {book.releaseYear}</p>

            {/* Conditional operation rendering to display if the book has been read */}
            <p>Läst: {book.isRead ? "Ja" : "Nej"}</p>

        </article>
    )
}