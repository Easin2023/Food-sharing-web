import { Button, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Banner = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  const btn = (
    <>
      <Button color="danger" variant="ghost" className="lg:h-14 md:h-7 md:text-[10px] lg:text-xl mr-4">
        learn more
      </Button>
      <Link to="/signUp">
        <Button
          radius="md"
          className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg md:h-7 md:text-[10px] lg:text-xl lg:h-14"
        >
          sign up
        </Button>
      </Link>
    </>
  );

  return (
    <div className="carousel w-full max-h-[800px]">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
          <div data-aos="fade-right"  className="flex-1">
            <h1 className="lg:text-5xl md:text-3xl text-2xl leading-snug font-bold mt-52 ml-28">
              The Joy of{" "}
              <span className="text-orange-500">
                Food
                <br />
                Sharing
              </span>
              Bringing Communities Together
            </h1>
            <p className="mt-5 lg:text-[15px] text-[10px] ml-28">
              Food sharing is not just about nourishing our bodies; it's about
              nourishing our souls and fostering connections.
            </p>
            <div className="ml-36 mt-4">{btn}</div>
          </div>
          <div data-aos="fade-left" className="flex-1 my-6">
            <Image
              className="w-2/3 mx-auto rounded-xl my-10 shadow-2xl"
              isZoomed
              src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D"
            ></Image>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
          <div data-aos="fade-right" className="flex-1">
            <h1 className="lg:text-5xl md:text-3xl text-2xl leading-snug font-bold mt-52 ml-28">
              Pass the Plate Exploring <br /> the Art of{" "}
              <span className="text-orange-500">Food Sharing</span>
            </h1>
            <p className="mt-5 lg:text-[15px] text-[10px] ml-28">
              Food sharing is not just about nourishing our bodies; it's about
              nourishing our souls and fostering connections.
            </p>
            <div className="ml-36 mt-4">{btn}</div>
          </div>
          <div data-aos="fade-left" className="flex-1 my-6">
            <Image
              className="w-2/3 mx-auto rounded-xl my-10 shadow-2xl"
              isZoomed
              src="https://i.ibb.co/s5rvh0B/sebastian-coman-photography-r3-ZRvv-CZKDk-unsplash.jpg"
            ></Image>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
          <div data-aos="fade-right" className="flex-1">
            <h1 className="lg:text-5xl md:text-3xl text-2xl leading-snug font-bold mt-52 ml-28">
              From Potlucks to Picnics <br />
              Embracing <span className="text-orange-500">
                Food Sharing
              </span>{" "}
              Traditions
            </h1>
            <p className="mt-5 lg:text-[15px] text-[10px] ml-28">
              Food sharing is not just about nourishing our bodies; it's about
              nourishing our souls and fostering connections.
            </p>
            <div className="ml-36 mt-4">{btn}</div>
          </div>
          <div data-aos="fade-left" className="flex-1 my-6">
            <Image
              className="w-2/3 mx-auto rounded-xl my-10 shadow-2xl"
              isZoomed
              src="https://i.ibb.co/pLFfq9L/kyle-nieber-e-E-ff-Apg7o-I-unsplash.jpg"
            ></Image>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
          <div data-aos="fade-right" className="flex-1">
            <h1 className="lg:text-5xl md:text-3xl text-2xl leading-snug font-bold mt-52 ml-28">
              Sharing is Caring <br /> The Power of Community{" "}
              <span className="text-orange-500">Food Sharing</span>
            </h1>
            <p className="mt-5 lg:text-[15px] text-[10px] ml-28">
              Food sharing is not just about nourishing our bodies; it's about
              nourishing our souls and fostering connections.
            </p>
            <div className="ml-36 mt-4">{btn}</div>
          </div>
          <div data-aos="fade-left" className="flex-1 my-6">
            <Image
              className="w-2/3 mx-auto rounded-xl my-10 shadow-2xl"
              isZoomed
              src="https://i.ibb.co/gJDxqZ0/mason-dahl-7-Ax-Xb-Zek-DE-unsplash.jpg"
            ></Image>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
