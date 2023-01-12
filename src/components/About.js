import React from 'react'

const About = () => {
  return (
    <div className="mx-auto max-w-7xl py-12 px-6 sm:py-16 lg:px-8 ">
      <div className="divide-y-2 divide-gray-200">
        <h2 className="text-center lg:text-6xl font-bold tracking-tight text-[white] sm:text-4xl pb-4">
          About
        </h2>

        <h3 className="text-4xl font-bold pb-4 tracking-tight text-[white] pt-4">
          What is UnionHacks?
        </h3>
      </div>

      <p className="text-left  text-[white] text-lg">
        Experience the ultimate in networking and innovation at UnionHacks,
        Union High School's premier hackathon! Join us for 16 hours of
        unparalleled opportunities to connect with like-minded individuals from
        diverse backgrounds, skill sets, and goals. Indulge in delicious,
        complimentary food and a wide array of engaging games and competitions
        for the chance to win incredible prizes. Get inspired by industry
        leaders and experts in the tech field as you engage in thought-provoking
        conversations and gain valuable insights from business executives,
        advocates, and real-life software engineers. Compete against other teams
        to showcase your creativity and problem-solving skills as you build the
        most innovative solutions to real-world challenges. Leave feeling
        fulfilled, having made lifelong connections, walked away with amazing
        prizes, and gained valuable experience and knowledge from our
        distinguished guest speakers.
      </p>

      <h3 className="text-4xl font-bold pb-4 tracking-tight text-[white] pt-4">
        When and where is UnionHacks?
      </h3>
      <p className="text-left  text-[white] text-lg">
        UnionHacks will be held in the Big Gymnasium of Union High School. As
        well as some classrooms.
      </p>

      <h3 className="text-4xl font-bold pb-4 tracking-tight text-[white] pt-4">
        Who pays for this?
      </h3>
      <p className="text-left  text-[white] text-lg">
        We have amazing sponsors who funded this event so it is free for
        everyone!
      </p>
    </div>
  );
}

export default About