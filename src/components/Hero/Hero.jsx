import React from "react";
import Book6 from "../../assets/books/book6.jpg";
import Book7 from "../../assets/books/book7.jpg";
import Book8 from "../../assets/books/book8.jpg";



import Vector from "../../assets/website/blue-pattern.png";

const ImageList = [
  {
    id: 6,
    img: Book6,
    title: "Bea Baila",
    description:
      "She may be short and plump, but her dreams of dancing are as boundless as her spirit. Grace isn't in the size of the dancer—it's in the passion of the dance.",
    author: "Luciano Lozano",
    },
  {
    id: 7,
    img: Book7,
    title: "I don't want to be quiet",
    description:
      "Stairs are for stomping, spoons are for drumming, tins are for clanging and balloons are for popping, my Mum really hates that but I'm not STOPPING.",
    author: "Laura Ellen Anderson",
    },
  {
    id: 8,
    img: Book8,
    title: "I don't want curly hair",
    description:
      "I try using big books to weigh down the curls, but NO, it does NOTHING to flatten these TWIRLS.",
    author: "Laura Ellen Anderson",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const [imageId, setImageId] = React.useState(Book6);
  const [title, setTitle] = React.useState("Bea Baila");
  const [author, setAuthor] = React.useState("Luciano Lozano");
  const [description, setDescription] = React.useState(
    "She may be short and plump, but her dreams of dancing are as boundless as her spirit. Grace isn't in the size of the dancer—it's in the passion of the dance."
  );
  
  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
  };

  React.useEffect(() => {
    console.log("Current author:", author);
  }, [author]);
  
  return (
    <>
      <div
        className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
        style={bgImage}
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div
              data-aos-once="true"
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
            >
              <h1
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              >
                {title}
                <p class="bg-clip-text text-transparent bg-gradient-to-b from-primary text-right text-sm to-secondary">
                   by {author}
                </p>{""}
              </h1>
              <p
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-delay="100"
                className="text-sm "
              >
                {description}
              </p>
              <div>
                <button
                  onClick={handleOrderPopup}
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                >
                  Download Now
                </button>
              </div>
            </div>
          
            <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <img
                  data-aos="zoom-in"
                  data-aos-once="true"
                  src={imageId}
                  alt="img"
                  className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                />
              </div>
              <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full">
                {ImageList.map((item) => (
                  <img
                    data-aos="zoom-in"
                    data-aos-once="true"
                    src={item.img}
                    onClick={() => {
                      setImageId(item.img);
                      setTitle(item.title);
                      setDescription(item.description);
                      setAuthor(item.author);
                    }}
                    alt="img"
                    className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
                  />
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
