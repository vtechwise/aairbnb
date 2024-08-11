import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";

const Houses = () => {
  const projects = useLoaderData();

  return (
    <section className="my-[6rem]">
      <div className="capitalize border-b-2 pb-4">
        <h3 className="text-3xl font-bold">available houses</h3>
      </div>
      
        <div className="mt-[5rem] grid md:grid-cols-2 gap-x-[2rem] gap-y-[2rem]">
          {projects.map((project) => {
            const { id, image1, image2, image3, image4, cityName,price } = project;
            const images = [image1, image2, image3, image4];
            return (
              <article key={id}>
                <ImageCarousel images={images} cityName={cityName} id={id} />
                <h2>{cityName}</h2>
                <p className="text-primary mt-3">${price}</p>
              </article>
            );
          })}
        </div>
        
    </section>
  );
};

const ImageCarousel = ({ images, cityName, id }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section>
      <div className="carousel relative w-full">
        <Link to={`/singleHouse/${id}`}>
          <img
            src={images[currentIndex]}
            className="w-full rounded-xl"
            alt={`Slide ${currentIndex + 1} of ${cityName}`}
          />
        </Link>
        {/* <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"> */}
        <button
          onClick={prevSlide}
          className="btn btn-circle absolute left-5 top-[45%]  transform-none"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="btn btn-circle absolute right-5 top-[45%]  transform-none"
        >
          ❯
        </button>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Houses;
