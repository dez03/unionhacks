import React from 'react'

const merch = [
  {
    id: 1,
    name: "t-shirt dark",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "t-shirt light",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "long sleeve dark",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "long sleeve light",
    image: "https://via.placeholder.com/150",
  },
]

const Merch = () => {
  return (
    <div className="mx-auto max-w-7xl py-12 px-6 sm:py-16 lg:px-8" id="merch">
      <div className="divide-y-2 divide-gray-200">
        <h2 className="text-center lg:text-6xl font-bold tracking-tight text-[white] sm:text-4xl pb-4">
          Merch
        </h2>

        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-x-8 justify-items-center mt-6">
          {merch.map((item) => (
            <div key={item.id} className="my-10">
              <a href="#">
                <img
                  className=""
                  src={item.image}
                  alt={`${item.name}`}
                />
              </a>
              <div className="text-center text-[#0e9fe1] text-bold">
                <h3>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Merch;