import React from "react";
import Slider from "react-slick";

const testimonials = [
  {
    id: 1,
    reviewer: "Ruvimbo",
    feedback: "I'm happy with the age-appropriate titles",
    avatar: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    reviewer: "Annabelle",
    feedback: "Please add more ballerina story books",
    avatar: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    reviewer: "KJ",
    feedback: "I love all the books here 🤓",
    avatar: "https://picsum.photos/103/103",
  },
];

const sliderConfig = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  pauseOnHover: true,
  pauseOnFocus: true,
  responsive: [
    {
      breakpoint: 10000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const TestimonialCard = ({ testimonial }) => (
  <div className="p-6 my-6">
    <div className="shadow-lg py-8 px-6 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
      <div>
        <img
          className="rounded-full w-20 h-20"
          src={testimonial.avatar}
          alt={`${testimonial.reviewer}'s avatar`}
        />
      </div>
      <div className="mt-4">
        <p className="text-gray-500 text-sm">{testimonial.feedback}</p>
        <h1 className="text-xl font-bold text-black/80 dark:text-light">
          {testimonial.reviewer}
        </h1>
      </div>
      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
        ,,
      </p>
    </div>
  </div>
);

const TestimonialSection = () => (
  <section className="py-10" data-aos="fade-up" data-aos-duration="300">
    <div className="container">
      <div className="text-center mb-20 max-w-[600px] mx-auto">
        <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          What our readers say
        </p>
        <h1 className="text-3xl font-bold">Testimonials</h1>
        <p className="text-xs text-gray-400">
          "Books from this collection have become my child’s favorite bedtime
          companions! Watching their imagination grow and hearing them
          excitedly talk about the characters is priceless. We’re so grateful
          for these wonderful stories that inspire a lifelong love of reading!"
          – A Happy Parent
        </p>
      </div>
      <div
        className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
        data-aos="zoom-in"
        data-aos-duration="300"
      >
        <Slider {...sliderConfig}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </Slider>
      </div>
    </div>
  </section>
);

export default TestimonialSection;
