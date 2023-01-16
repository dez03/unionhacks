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

        <h3 className="text-4xl text-center font-bold pb-4 tracking-tight text-[white] pt-4">
          To Be Announced
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