import React from 'react'

const Schedule = () => {
  return (
    <div
      className="mx-auto max-w-7xl py-12 px-6 sm:py-16 lg:px-8"
      id="schedule"
    >
      <div className="divide-y-2 divide-gray-200">
        <h2 className="text-center lg:text-6xl font-bold tracking-tight text-[white] text-4xl pb-4">
          Schedule
        </h2>

        <h3 className="text-4xl text-center font-bold pb-4 tracking-tight text-[white] pt-4">
          To Be Announced
        </h3>
      </div>

      <p className="text-center tracking-tight text-[white] divide-solid divide-x divide-gray-50">
        We will release the schedule closer to the date of UnionHacks.
      </p>
    </div>
  );
}

export default Schedule;