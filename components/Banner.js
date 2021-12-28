import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-screen">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-2xl font-extrabold text-gray-700 mb-3">
          Not sure where to go? Perfect.
        </p>

        <button
          className="text-white bg-red-500 px-10 py-4 shadow-md 
        rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
        >
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
