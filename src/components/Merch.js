import React from "react";

const merch = [
  {
    id: 1,
    name: "Short sleeve cotton tee",
    price: "$21",
    href: "https://www.spcustomgear.com/productdetails/32821/00a-new-item-unionhacks-club-short-sleeve-cotton-tee",
    image:
      "https://www.spcustomgear.com/images/products/32821-VW5pb25IYWNrcyBDbHViIC0gU2hvcnQgU2xlZXZlIENvdHRvbiBUZWU=.jpg.ashx?w=400",
  },
  {
    id: 2,
    name: "long sleeve cotton tee",
    price: "$24",
    href: "https://www.spcustomgear.com/productdetails/32822/00b-new-item-unionhacks-club-long-sleeve-cotton-tee",
    image:
      "https://www.spcustomgear.com/images/products/32822-VW5pb25IYWNrcyBDbHViIC0gTG9uZyBTbGVldmUgQ290dG9uIFRlZQ==.jpg.ashx?w=400",
  },
  {
    id: 3,
    name: "hooded sweatshirt",
    price: "$35",
    href: "https://www.spcustomgear.com/productdetails/32823/00c-new-item-unionhacks-club-hooded-sweatshirt",
    image:
      "https://www.spcustomgear.com/images/products/32823-VW5pb25IYWNrcyBDbHViIC0gSG9vZGVkIFN3ZWF0c2hpcnQ=.jpg.ashx?w=400",
  },
];

const Merch = () => {
  return (
    <div className="mx-auto max-w-7xl py-12 px-6 sm:py-16 lg:px-8 " id="Merch">
      
      <div className="divide-y-2 divide-gray-200 flex flex-col">
        <h2 className="text-center lg:text-6xl font-bold tracking-tight text-[white] text-4xl pb-4">
          Merch
        </h2>

        <div className="items-center justify-between px-24 flex flex-col lg:flex-row">
          {merch.map((item) => (
            <div key={item.id} className="my-5 w-64">
              <div className="w-full overflow-hidden rounded-lg relative bg-[#111111]">
                <a href={item.href} target="_blank">
                  <img
                    className="hover:scale-105 duration-200 w-96 h-full object-fit cursor-pointer"
                    src={item.image}
                    alt={`${item.name}`}
                  />
                </a>
              </div>
              <div className="capitalize mt-4 text-[#0e9fe1] text-bold flex justify-between">
                <h3 className="text-white">{item.name}</h3>
                <h3>{item.price}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Merch;
