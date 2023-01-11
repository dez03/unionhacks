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
        Welcome to UnionHacks, Union High School's first hackathon. At this 16-hour long event, students can meet new people with different skills sets, goals, and values to expand their social network. They will be able to enjoy free delicious food and a wide variety of games and small competitions for prizes. They will also have opportunities to speak with influential people in the tech field such as business executives, advocates, leaders, and real software engineers. Students compete against other teams to build the most innovative solutions to real problems. Our attendees will leave feeling full, happy that they either won amazing prizes or played some fun mini-games, met lifelong friends, and spoke with and learned from our influential guest speakers. 

      </p>
    </div>
  );
}

export default About