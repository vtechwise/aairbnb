import { createClient } from "contentful";
import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "../component/Navbar";

export const loader = async () => {
  const client = createClient({
    space: "ksfxcfvyl7x6",
    environment: "master",
    accessToken: "au6fcFMVekJ_r24KeA220yMpTJVph5J2i4hv4l8srCg",
  });
  try {
    const response = await client.getEntries({
      content_type: "rentalHouses",
    });

    const projects = response.items.map((item) => {
      const {
        bookingContact,
        cityName,
        firstImage,
        secondImage,
        description,
        thirdImage,
        forthImage,
        whatThePlaceOffer,
        price,
      } = item.fields;

      const image1 = firstImage.fields.file.url;
      const image2 = secondImage.fields.file.url;
      const image3 = thirdImage.fields.file.url;
      const image4 = forthImage.fields.file.url;

      const id = item.sys.id;

      return {
        id,
        image1,
        image2,
        image3,
        image4,
        price,
        cityName,
        description,
        whatThePlaceOffer,
        bookingContact,
      };
    });

    return projects;
  } catch (error) {
    return error;
  }
};

const SingleHouse = () => {
  const projects = useLoaderData();
  const { id } = useParams();

  const singleHouse = projects.find((project) => project.id === id);

  const {
    image1,
    image2,
    image3,
    image4,
    cityName,
    bookingContact,
    description,
    price,
    whatThePlaceOffer,
  } = singleHouse;

  // Prepare images array for carousel
  const images = [image1, image2, image3, image4];

  // Carousel state
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
    <>
      <Navbar />
      <section className="max-w-4xl mx-auto px-6 mb-[6rem]">
        <div className="mt-[6rem]">
          {/* Carousel */}
          <div className="carousel relative w-full mb-8">
            <img
              src={images[currentIndex]}
              className="w-full rounded-xl object-cover"
              alt={`Slide ${currentIndex + 1}`}
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <button onClick={prevSlide} className="btn btn-circle">
                ❮
              </button>
              <button onClick={nextSlide} className="btn btn-circle">
                ❯
              </button>
            </div>
          </div>

          {/* House Details */}
          <div className="flex mt-[3rem] justify-between flex-col md:flex-row">
            <h2 className="font-semibold text-xl">{cityName}</h2>
            <p className="font-bold text-primary">${price} per night</p>
          </div>
          <p className="max-w-2xl mt-[1rem]">{description}</p>
          <div>
            <h2 className="capitalize text-xl font-bold my-4">What We Offer</h2>
            <ul className="mt-[1rem] grid md:grid-cols-2 gap-y-4">
              {whatThePlaceOffer.map((item, index) => (
                <li key={index} className="font-semibold">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-y-4 md:grid-cols-2 items-center mt-[3rem]">
            <h3 className="text-lg">Proceed with booking, send an email to</h3>
            <button className="btn btn-primary">{bookingContact}</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleHouse;
