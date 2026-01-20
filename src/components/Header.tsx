import "./Header.css";

// Defining the props for the Header component
interface HeaderProps {
  title: string;
  bannerURL: string;
}

// Header component to display the title and banner image
export const Header = ({ title, bannerURL }: HeaderProps) => {
  return (
    <header className="header">
      <h1 className="headerTitle">{title}</h1>

      <div className="banner">
        <img
          src={bannerURL}
          alt="Banner image of art books books are standing on the bookshelf"
        />
      </div>
    </header>
  );
};
