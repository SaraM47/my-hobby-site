import weiboImg from "../assets/artbooks/weibo.png"
import violaImg from "../assets/artbooks/viola.png"
import hinataImg from "../assets/artbooks/hinata.png"
import naranoImg from "../assets/artbooks/narano.png"
import buchiImg from "../assets/artbooks/buchi.png"
import ekuImg from "../assets/artbooks/eku.png"
import waccaImg from "../assets/artbooks/wacca.png"
import kazunokoImg from "../assets/artbooks/kazunoko.png"

// Definition of the Artbook interface for artbooks collection with id, title, author, releaseYear, isRead and image properties
export interface ArtBook { 
    id : number, // integer
    title : string, // string of title of the book
    author : string, // string of author of the book
    releaseYear : number, // integer of release year
    isRead : boolean, // boolean indicating if the book has been read
    image : string // string of image URL
}

// Sample data for artbooks collection with 6 entries 
export const artbooks : ArtBook[] = [
    {
        id: 1,
        title: "WEIBO NATIVE ILLUSTRATION",
        author: "WEIBO",
        releaseYear: 2024,
        isRead: true,
        image: weiboImg,
    },
    {
        id: 2,
        title: "VIOLA - The art of Senbon Umishima",
        author: "Senbon Umishima",
        releaseYear: 2024,
        isRead: false,
        image: violaImg,
    },
    {
        id: 3,
        title: "Singing with the Seasons, Dancing with the Flowers - Hinata Art Collection",
        author: "Hinata",
        releaseYear: 2024,
        isRead: true,
        image: hinataImg,
    },
    {
        id: 4,
        title: "Narano ArtWorks Collection – The other side of the boundary – THE VISUAL",
        author: "Narano",
        releaseYear: 2024,
        isRead: true,
        image: naranoImg,
    },
    {
        id: 5,
        title: "Birthday – Buchi ArtWorks",
        author: "Buchi",
        releaseYear: 2024,
        isRead: false,
        image: buchiImg,
    },
    {
        id: 6,
        title: "Sugary Girls – The art of Eku Uekura – Sweet and delicious clothing store",
        author: "Eku Uekura",
        releaseYear: 2023,
        isRead: false,
        image: ekuImg,
    },
    {
        id: 7,
        title: "wacca works – Oyogu yume wo mita (I dreamed of swimming",
        author: "wacca",
        releaseYear: 2023,
        isRead: true,
        image: waccaImg,
    },
    {
        id: 8,
        title: "Aoboshi",
        author: "Kazunoko",
        releaseYear: 2023,
        isRead: true,
        image: kazunokoImg,
    }
]