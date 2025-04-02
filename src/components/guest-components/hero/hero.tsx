import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96">
      {/* Background Image */}

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center p-6 md:p-10 lg:p-16 text-white text-center">
        {/* Discount Text */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
          5% <span className="text-orange-400">off</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mt-2 text-black">
          Book up to 4 nights and enjoy 5% off
        </p>
        <p className="text-base md:text-lg lg:text-xl mt-1 flex items-center text-black">
          <span className="mr-2">📍</span> Lagos, Nigeria
        </p>

        {/* Search Button */}
        <button className="mt-6 bg-white text-gray-800 font-semibold py-3 px-6 rounded-full flex items-center hover:bg-gray-100 transition">
          <span className="mr-2">🔍</span> Start your search
        </button>
      </div>
    </div>
  );
};

export default Banner;