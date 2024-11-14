import bannerImg from "../../assets/book.png";
const Banner = () => {
  return (
    <div>
      <div className="my-5">
        <div className="bg-base-200 rounded-lg flex md:flex-row flex-col gap-5  w-full justify-between items-center  p-10 ">
          <div className="order-2 md:order-1 ">
            <h1 className="lg:text-5xl text-3xl font-bold md:mb-10 mb-5 font-serif ">
              Books to freshen up <br /> your bookshelf
            </h1>

            <button className="py-3 px-6 rounded-md bg-green-400 ">
              Get Started
            </button>
          </div>
          <div className="order-1 md:order-2 ">
            <img className="lg:max-w-sm   " src={bannerImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
