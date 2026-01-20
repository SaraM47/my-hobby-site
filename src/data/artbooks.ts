// Definition of the Artbook interface for artbooks collection with id, title, author, releaseYear, and isRead properties
export interface ArtBook { 
    id : number, // integer
    title : string, // string of title of the book
    author : string, // string of author of the book
    releaseYear : number, // integer of release year
    isRead : boolean, // boolean indicating if the book has been read
}

// Sample data for artbooks collection with 6 entries 
export const artbooks : ArtBook[] = [
    {
        id: 1,
        title: "WEIBO NATIVE ILLUSTRATION",
        author: "WEIBO",
        releaseYear: 2024,
        isRead: true,
    },
    {
        id: 2,
        title: "VIOLA - The art of Senbon Umishima",
        author: "Senbon Umishima",
        releaseYear: 2024,
        isRead: false,
    },
    {
        id: 3,
        title: "Singing with the Seasons, Dancing with the Flowers - Hinata Art Collection",
        author: "Hinato",
        releaseYear: 2024,
        isRead: true,
    },
    {
        id: 4,
        title: "Narano ArtWorks Collection – The other side of the boundary – THE VISUAL",
        author: "Narano",
        releaseYear: 2024,
        isRead: true,
    },
    {
        id: 5,
        title: "Birthdat – Buchi ArtWorks",
        author: "Buchi",
        releaseYear: 2024,
        isRead: false,
    },
    {
        id: 6,
        title: "Sugary Girls – The art of Eku Uekura – Sweet and delicious clothing store",
        author: "Eku Uekura",
        releaseYear: 2023,
        isRead: false,
    }
]