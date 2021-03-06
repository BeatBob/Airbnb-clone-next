import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64 font-bold text-gray-700">{title}</h3>
        <p className="font-semibold text-gray-500">{description}</p>

        <button
          className="text-xl text-white bg-red-500 py-2 px-4
        rounded-lg mt-5 font-bold"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
