import React from "react";
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import Book4 from "../../assets/books/book4.jpg";
import Book5 from "../../assets/books/book5.jpg";
import { FaStar } from "react-icons/fa6";

const booksData = [
  {
    id: 1,
    img: Book1,
    title: "When dragons are dreaming ",
    rating: 5.0,
    author: "James Mayhew & Lindsey Gardiner",
  },
  {
    id: 2,
    img: Book2,
    title: "I love you just the way you are",
    rating: 4.5,
    author: "Tammi Salzano",
  },
  {
    id: 3,
    img: Book3,
    title: "My body belongs to me",
    rating: 4.7,
    author: "Pro Familia",
  },
  {
    id: 4,
    img: Book4,
    title: "La Cancion de les Nubes",
    rating: 4.4,
    author: "Fortuna",
  },
  {
    id: 5,
    img: Book5,
    title: "El Dragon de las Estrellas",
    rating: 4.5,
    author: "Muriel Bourgeios",
  },
];

const Books = () => {
  return (
    <>
      <div className="mt-14 mb-12">
        <div className="container">
          {/* header */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Little Readers
            </p>
            <h1 className="text-3xl font-bold">Top Books</h1>
            <p className="text-xs text-gray-400">
            "Storytime Magic: Tales That Make Growing Up Amazing!"
            </p>
          </div>

          {/* Body section */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
              {/* Card */}
              {booksData.map(({ id, img, title, rating, author }) => (
                <div key={id} className="div space-y-3">
                  <img
                    src={img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md "
                  />
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-gray-700">{author}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span>{rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button className="text-center mt-10 cursor-pointer  bg-primary text-white py-1 px-5 rounded-md">
                View All Books
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
