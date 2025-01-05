import React, { useState } from "react";
import Logo from "../../assets/website/logo.png";
import DarkMode from "./DarkMode";
import { FaCaretDown } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Seller",
    link: "/#services",
  },
];

const DropdownLinks = [
  {
    name: "Read free book",
    link: "/assets/pdf/pdf1.pdf",
    target: "_self",
  },
  {
    name: "Colouring Book",
    link: "/assets/pdf/pdf2.pdf",
    target: "_self",
  },
  {
    name: "Authors",
    link: null,
    onClick: "handleAuthorsClick", // Custom click for "Authors"
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [childrenBooks, setChildrenBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch data for "Authors" on click
  const handleAuthorsClick = () => {
    setLoading(true); // Show loading indicator
    fetch("https://best-childrens-books.p.rapidapi.com/books/timegoodreads", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "573808f1ebmsh90bc694f698126fp19f963jsn66ff00c47fad", // Replace with your actual API key
        "x-rapidapi-host": "best-childrens-books.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data); // Debugging
        setChildrenBooks(data);
      })
      .catch((error) => {
        console.error("Error fetching authors data:", error);
        alert("Failed to load authors. Please try again later."); 
      })
      .finally(() => {
        setLoading(false); // Hide loading indicator
      });
  };

  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-600 dark:text-white duration-200">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                <img src={Logo} alt="Logo" className="w-10" />
                eBooks
              </a>
            </div>
            <div className="flex justify-between items-center gap-4">
              <div>
                <DarkMode />
              </div>
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      aria-label={`Navigate to ${menu.name}`}
                      className={`inline-block py-4 px-4 duration-200 ${
                        window.location.hash === menu.link
                          ? "text-primary font-bold"
                          : "hover:text-primary"
                      }`}
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
                <li className="group relative cursor-pointer">
                  <a
                    href="#"
                    className="flex h-[72px] items-center gap-[2px]"
                    aria-label="Quick Links"
                  >
                    Quick Links{" "}
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </a>
                  <div className="absolute left-0 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block">
                    <ul className="space-y-3">
                      {DropdownLinks.map((data) => (
                        <li key={data.name}>
                          {data.link ? (
                            <a
                              href={data.link}
                              target={data.target || "_self"}
                              rel={
                                data.target === "_blank"
                                  ? "noopener noreferrer"
                                  : ""
                              }
                              aria-label={`Navigate to ${data.name}`}
                              className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                            >
                              {data.name}
                            </a>
                          ) : (
                            <button
                              onClick={
                                data.onClick === "handleAuthorsClick"
                                  ? handleAuthorsClick
                                  : null
                              }
                              className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                              aria-label={`Show ${data.name}`}
                            >
                              {data.name}
                            </button>
                          )}
                        </li>
                      ))}
                      {loading && <li>Loading...</li>}
                      {childrenBooks.length > 0 && (
                        <li>
                          <ul className="space-y-3 mt-2">
                            {childrenBooks.map((book, index) => (
                              <li key={index}>
                                <a
                                  href={book.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                                >
                                  {book.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      )}
                    </ul>
                  </div>
                </li>
              </ul>
              <button
                onClick={() => handleOrderPopup()}
                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
              >
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;













/*import React, { useEffect, useState } from "react";
import Logo from "../../assets/website/logo.png";
import DarkMode from "./DarkMode";
import { FaCaretDown } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Seller",
    link: "/#services",
  },
];

const DropdownLinks = [
  {
    name: "Read free book",
    link: "/assets/pdf/pdf1.pdf",
    target: "_self",
  },
  {
    name: "Colouring Book",
    link: "/assets/pdf/pdf2.pdf",
    target: "_self",
  },
  {
    name: "Authors",
    link: null, // No href, handled by onClick
    onClick: "handleAuthorsClick",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [childrenBooks, setChildrenBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch data for "Authors" when clicked
  const handleAuthorsClick = () => {
    setLoading(true);
    fetch("https://best-childrens-books.p.rapidapi.com/books/timegoodreads", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "573808f1ebmsh90bc694f698126fp19f963jsn66ff00c47fad", // Replace with your actual API key
        "x-rapidapi-host": "best-childrens-books.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setChildrenBooks(data);
      })
      .catch((error) => {
        console.error("Error fetching authors data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-600 dark:text-white duration-200">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                <img src={Logo} alt="Logo" className="w-10" />
                eBooks
              </a>
            </div>
            <div className="flex justify-between items-center gap-4">
              <div>
                <DarkMode />
              </div>
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      aria-label={`Navigate to ${menu.name}`}
                      className={`inline-block py-4 px-4 duration-200 ${
                        window.location.hash === menu.link
                          ? "text-primary font-bold"
                          : "hover:text-primary"
                      }`}
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
                <li className="group relative cursor-pointer">
                  <a
                    href="#"
                    className="flex h-[72px] items-center gap-[2px]"
                    aria-label="Quick Links"
                  >
                    Quick Links{" "}
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </a>
                  <div className="absolute left-0 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block">
                    <ul className="space-y-3">
                      {DropdownLinks.map((data) => (
                        <li key={data.name}>
                          {data.link ? (
                            <a
                              href={data.link}
                              target={data.target || "_self"}
                              rel={
                                data.target === "_blank"
                                  ? "noopener noreferrer"
                                  : ""
                              }
                              aria-label={`Navigate to ${data.name}`}
                              className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                            >
                              {data.name}
                            </a>
                          ) : (
                            <button
                              onClick={
                                data.onClick === "handleAuthorsClick"
                                  ? handleAuthorsClick
                                  : null
                              }
                              className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                              aria-label={`Show ${data.name}`}
                            >
                              {data.name}
                            </button>
                          )}
                        </li>
                      ))}
                      {loading && <li>Loading...</li>}
                      {childrenBooks.length > 0 && (
                        <li>
                          <ul className="space-y-3 mt-2">
                            {childrenBooks.map((book, index) => (
                              <li key={index}>
                                <a
                                  href={book.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                                >
                                  {book.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      )}
                    </ul>
                  </div>
                </li>
              </ul>
              <button
                onClick={() => handleOrderPopup()}
                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
              >
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;*/




















