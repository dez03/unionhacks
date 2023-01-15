import React from 'react'

const About = () => {
  return (
    <div className="mx-auto max-w-7xl py-12 px-6 sm:py-16 lg:px-8 " id="about">
      <div className="divide-y-2 divide-gray-200">
        <h2 className="text-center lg:text-6xl font-bold tracking-tight text-[white] text-4xl pb-4">
          About
        </h2>

        <h3 className="text-3xl font-bold pb-4 tracking-tight text-[white] pt-4">
          What is UnionHacks?
        </h3>
      </div>

      <p className="text-left text-[white] text-base md:text-lg bg-[#111111]">
        UnionHacks is Union High School's first hackathon event. It is a 16-hour
        opportunity for students to connect with like-minded individuals from
        diverse backgrounds, skill sets, and goals. Attendees will have the
        chance to participate in games and competitions, win prizes, hear from
        industry leaders and experts, and engage in thought-provoking
        conversations. Teams will also have the opportunity to showcase their
        creativity and problem-solving skills by building innovative solutions
        to real-world challenges. The event also includes complimentary food and
        the chance to make lifelong connections, gain valuable experience and
        knowledge from distinguished guest speakers.
      </p>
      <br />
      <p className="text-left text-[white] text-lg">
        No experience necessary, we encourage all students who are interested to
        attend. We have mentors and workshops for everyone.
      </p>
    </div>
  );
}

export default About