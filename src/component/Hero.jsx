import heroImg from "../assets/banner.jpg";

const Hero = () => {
  return (
    <div className="my-[6rem]">
      <div>
        <h1 className="text-4xl font-semibold font italic">
          Book Your Next <span className="text-primary">Adventure</span> Today
        </h1>
        <p className="max-w-2xl pt-4 text-[.8rem] md:text-xl">
          Discover unique stays that make every trip unforgettable. Whether
          you're seeking a cozy cottage or a luxurious villa, find your perfect
          getaway with ease. Book your next adventure today!
        </p>
      </div>
      <div className=" h-[15rem] sm:h-[20rem] rounded-xl mt-[2rem]">
        <img
          src={heroImg}
          alt=""
          className="h-[100%] w-[100%] object-cover rounded-xl"
        />
      </div>
    </div>
  );
};
export default Hero;
