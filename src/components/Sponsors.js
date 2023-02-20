import React from 'react'

const Sponsors = () => {
  return (
    <div
      className="mx-auto max-w-7xl py-12 px-6 sm:py-16 lg:px-8"
      id="sponsors"
    >
      <div className="divide-y-2 divide-gray-200">
        <h2 className="text-center lg:text-6xl font-bold tracking-tight text-[white] text-4xl pb-4">
          Sponsors
        </h2>

        <h3 className="text-4xl text-center flex items-center justify-around flex-wrap font-bold pb-4 tracking-tight text-[white] pt-4">
          {/* To Be Announced */}
          <a href="https://www.dairyqueen.com/en-us/locations/nj/union/2625-morris-ave/11368/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Dairy_Queen_logo.svg/1200px-Dairy_Queen_logo.svg.png"
              className="h-40 text-center"
            ></img>
          </a>
          <a href="https://www.johnnynapkins.com/">
            <img
              src="https://popmenucloud.com/cdn-cgi/image/width=300,height=300,format=auto,fit=scale-down/xtsfmgdi/0f7c5dc2-b3e8-40d9-a9f2-77e72b707a02.png"
              className="h-40 text-center"
            ></img>
          </a>
          <a href="https://www.chick-fil-a.com/locations/nj/union-township">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Chick-fil-A_Logo.svg/2560px-Chick-fil-A_Logo.svg.png"
              className="h-40 text-center"
            ></img>
          </a>
          <a href="https://www.lifeenhancementwellness.com/">
            <img
              src="https://www.lifeenhancementwellness.com/storage/app/media/_LOGO/logo.jpg"
              className="h-40 text-center"
            ></img>
          </a>
          <a href="https://www.pepesbbq.com/">
            <img
              src="https://images.getbento.com/accounts/3e45c57b8fe5af66d274affea2de3952/media/images/78318peps_logo.png"
              className="h-40 text-center my-8"
            ></img>
          </a>
          <a href="https://cozycornerdeli.net/">
            <img
              src="https://cozycornerdeli.net/wp-content/uploads/logo.png"
              className="h-40 text-center"
            ></img>
          </a>
          <a href="https://slingshotahead.com/">
            <img
              src="https://slingshotahead.com/static/media/logo.b48a5d634df9ae0a5456.png"
              className="h-40 text-center"
            ></img>
          </a>
        </h3>
      </div>

      <p className="text-center tracking-tight text-[white] divide-solid divide-x divide-gray-50">
        If you'd like to sponsor us, email us at{" "}
        <a
          className="text-[#0e9fe1] hover:text-[#26a8e4] "
          href="mailto: unionhacks.team@gmail.com"
        >
          unionhacks.team@gmail.com
        </a>
      </p>
    </div>
  );
}

export default Sponsors;