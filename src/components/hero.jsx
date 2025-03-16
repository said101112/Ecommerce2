import Image3 from "../../public/images/sale-cnpHUeHf.png";
import Image2 from "../../public/images/portrait-happy-lady-sunglasses-standing-with-colorful-shopping-bags-hands-pink-background-young-woman-standing-white-shirt-denim-shorts-removebg.png";
import Image1 from "../../public/images/women-NhG2D3pl.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageLIST = [
  {
    id: "1",
    img: Image1,
    title: "Update 50% off All Men's Wear",
    description:
      "Enjoy a massive 50% discount on all men's wear for a limited time! Upgrade your wardrobe with stylish and high-quality outfits at unbeatable prices. Don't miss out—shop now!",
  },
  {
    id: "2",
    img: Image2,
    title: "30% Off All Women's Wear",
    description:
      "Refresh your wardrobe with our latest women's collection at 30% off! From casual to elegant styles, find the perfect outfit at a great price. Hurry, limited-time offer!",
  },
  {
    id: "3",
    img: Image3,
    title: "70% Off on All Products Sale",
    description:
      "The biggest sale of the season is here! Enjoy up to 70% off on all products—fashion, accessories, and more. Stock up on your favorites before the deal ends!",
  },
 
];

export function Hero() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative all overflow-hidden">
     
      <div className="h-[800px] w-[700px] bg-orange-300 absolute -top-96 rotate-45 flex rounded-3xl -z-20 right-0"></div>

      
      <div className="container mx-auto px-52 py-16 sm:py-24">
        <Slider {...settings}>
          {ImageLIST.map((element) => (
            <div key={element.id} className="grid grid-cols-2 items-center gap-8">
              <div className=" grid grid-cols-2 items-center ">
              
              <div className="">
                <h1 className="text-4xl sm:text-5xl font-bold">{element.title}</h1>
                <p className="text-lg mt-4">{element.description}</p>
                <button className="mt-6 cursor-pointer py-4 px-6 rounded-2xl text-white bg-red-500 ">
                  Explore More
                </button>
              </div>
             
              <div className="flex justify-center">
                <img
                  src={element.img}
                  className="w-[500px] h-[480px] object-contain"
                  alt={element.title}
                />
              </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
