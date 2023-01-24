import React, { useState, useRef } from "react";
import "./Team.css";
import Aviel from "../images/aviel.jpg";
import Kaiya from "../images/Kaiya.jpg";
import David from "../images/David.jpeg";
import Issac from "../images/Issac.jpg";
import Samah from "../images/Samah.jpeg";
import Dias from "../images/Dias.jpeg";
import Jailen from "../images/jailen.jpeg";
import Jeremy from "../images/jeremy.png";
import JasonA from "../images/jasonA.jpg";
import Christian from "../images/christianVillar.jpg";
// import Default from "../images/default.png"
import Anthony from "../images/anothonyC.jpg";
import DylanF from "../images/DylanF.jpeg";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Team = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const modalRef = useRef(null);

  const handleClick = (e) => {
    if (!modalRef.current.contains(e.target)) {
      setSelectedPerson(null);
    }
  };

  const team = [
    {
      id: 1,
      name: "Aviel Hernandez",
      position: "Founder/Lead Organizer",
      bio: "I'm Aviel, a junior at Union High School as well as the Founder and Lead Organizer of UnionHacks. After high school, I plan to explore more about computer science and business. Outside of school, I love to develop websites, solve Rubik's Cubes competitively, read books, listen to podcasts, and work out. I love to learn about many different topics, whether it be through talking to people, watching YouTube videos, or reading articles. I am always looking for new ways to understand the world from a more holistic point of view. I created UnionHacks with the goal of exposing more people to technology as it is a passion of mine.",
      image: Aviel,
    },
    {
      id: 2,
      name: "Kaiya Koonhow",
      position: "Assistant Organizer",
      bio: "Hello! I'm a junior at UHS right now. Along with my other team members, I truly love contributing to UnionHacks' planning. Working with Aviel has made it easier for me to connect with and engage with my diverse community, which is something that is very important to me. I participate in two sports, and I love spending time outdoors. I can't wait to see how UnionHacks turns out and am REALLY looking forward to it!",
      image: Kaiya,
    },
    {
      id: 3,
      name: "Samah Kershio",
      position: "Head of Logistics Team",
      bio: "Hi, my name is Samah Keshiro! I’m a senior at Union High School, and I plan on studying either computer science or software engineering in college. In the future, I want to become a software engineer. A goal of mine this year was to gain exposure before college while also using my leadership and organization skills, so I took on the role of Head of the Logistics Team for UnionHacks. I’m so excited for this event to be brought to life!",
      image: Samah,
    },
    {
      id: 4,
      name: "Isaac Longo",
      position: "Head of Design Team",
      bio: "Hi, my name is Isaac Longo and I'm a senior and the valedictorian at UHS. I'm the head of the design team for UnionHacks and I've worked on flyers, Instagram posts, and even this website! After high school, I plan to study Computer Science and Computer Engineering. I've got my heart set on Princeton but we'll see where life takes me! Outside of school, I enjoy running, playing chess, and solving any puzzles I can get my hands on.",
      image: Issac,
    },
    {
      id: 5,
      name: "Dylan Dias",
      position: "Head of Outreach",
      bio: "I am the outreach manager for Unionhacks. I communicate with potential sponsors to fund our event, and I reach out to speakers whose insights and experience would be valuable to our students. I love what I do - it’s amazing!",
      image: Dias,
    },
    // {
    //   id: 6,
    //   name: "Christian Villar",
    //   position: "Logistics Team",
    //   bio: "Hey all, Christian here. I am currently a senior and a member of the Logistics Team for UnionHacks. I am currently pursuing a career as a mechanical engineer.  Outside of school, I love to 3-D model and collect Nintendo Games. One project I worked on was building a fan using an Arduino Uno. I love music, whether I'm playing piano or just listening to it. I joined UnionHacks because I wanted to help build an environment where people can come together to achieve a common goal.",
    //   image: Christian,
    // },
    {
      id: 6,
      name: "Jeremy Rosero",
      position: "Logistics Team",
      bio: "Hi! I'm Jeremy Rosero, I'm a junior, and I am a part of the Logistics Team for UnionHacks. Along with my partners, I will help ensure that this event runs smoothly for everyone involved. Outside of UnionHacks, I pursue hobbies like the culinary arts and physical education/wellness. ",
      image: Jeremy,
    },
    {
      id: 7,
      name: "Jason Arteaga",
      position: "Logistic Team",
      bio: "Hi! My name is Jason, I am 15 years old and a sophomore in UHS. I'm an extroverted person and love meeting and talking to new people. I am on the Logistics Team, and my purpose is to help set up games, tables, movies, etc. at the hackathon.",
      image: JasonA,
    },
    {
      id: 8,
      name: "Dylan Fernandez",
      position: "Logistic Team",
      bio: "Hello, I’m Dylan Fernandez! I love animals, spending time with other people, strategy and/or skill based games, reading, and bicycling. I joined UnionHacks because I really adore the concept of a hackathon, and to support Aviel in creating and fulfilling the vision of the project. Thx for reading :)",
      image: DylanF,
    },
    {
      id: 9,
      name: "Anthony Chacon",
      position: "Design Team",
      bio: "Hello, my name is Anthony Chacon. I'm part of the Design Team helping with ideas and making parts for a bigger picture. Having a small team for such a big project is just perfect, and I think we nail everything on the head. My interests are mostly tech related - computers, code, visuals, video games, film, and the like. I mainly take an interest in coding and video games, so I want to merge the two and make my own game. My plan for after high school is either join the military or go directly into college. I'm ooking into Kean, whre I wil major in cybersecurity with a minor of computer science. After that, I want to get back into digital arts and maybe even land a job working for a company like Google, which will provide me with the income to support my dreams of game creation.",
      image: Anthony,
    },
    {
      id: 10,
      name: "Jason Babatido",
      position: "Design Team",
      bio: "My name is Jason Babatido and I'm a part of the UnionHacks Design Team! I'm 16 and currently a junior enrolled at Union High School. After high school, I plan on becoming a pharmacist or an electrical engineer. Some of my hobbies include skateboarding, listening to music, and playing video games with my friends.",
      image:
        "https://toppng.com/public/uploads/thumbnail/white-person-icon-man-icon-white-11553395092le5qk4zqtz.png",
    },
    {
      id: 11,
      name: "David Castaneda",
      position: "Outreach Team",
      bio: "Hi Everyone! My name is David Castaneda, I am a senior, and I am part of UnionHacks’ Outreach Team. I am also this year’s Vice President of the UHS Hackers Club. I am passionate for all things computer science. I help contact sponsors and speakers for this event. I am trying my hardest to gain the attention of the most influential guest speakers in order to ensure the best possible presentations are given at our Hackathon. I am so excited to see this Hackathon come into fruition and will be here for every step of the way!",
      image: David,
    },
    {
      id: 12,
      name: "Jailen Perez",
      position: "Outreach Team",
      bio: "Hey! My name is Jailen and I am part of the Outreach Team. I help with things like reaching out to potential sponsors and guest speakers. I plan on going to NJIT to study CS. I've taken coding and game design classes over the summer. Outside of school I play video games with my friends, build PCs, code, stream, and swim. I work as a lifeguard every summer.",
      image: Jailen,
    },
  ];

  return (
    <div
      className="mx-auto max-w-7xl pb-[-100px] px-6 sm:py-16 lg:px-8"
      id="team"
    >
      <div id="stars"></div>
      <div id="stars2"></div>
      <div className="divide-y-2 divide-gray-200">
        <h2 className="text-center lg:text-6xl font-bold tracking-tight text-[white] text-4xl pb-4">
          Our Team
        </h2>
        <div className="flex flex-wrap items-center mx-8 justify-center">
          {team.map((person) => (
            <div
              key={person.id}
              className="bg-[#111111] m-4 w-[300px] h-[400px] relative"
            >
              <div className="overflow-hidden">
                <img
                  className="hover:scale-105 duration-200 w-full h-96 object-cover cursor-pointer mb-8 "
                  src={person.image}
                  alt={`${person.name}`}
                  onClick={() => setSelectedPerson(person)}
                />
              </div>

              <div className="absolute bottom-0 left-0 w-full pt-4 text-white">
                <h3 className="text-2xl font-bold">{person.name}</h3>
                <h4 className="text-[#0e9fe1] ">{person.position}</h4>
              </div>
            </div>
          ))}
        </div>
        {selectedPerson && (
          <div
            className="modal-bg fixed top-0 left-0 w-full h-full"
            onClick={handleClick}
          >
            {/* Modal code */}
            <div
              className="team-bio-modal rounded-lg w-[95%] sm:w-[90%] lg:w-[50%] overflow-y-auto"
              ref={modalRef}
            >
              <div className="px-2 pt-4 md:p-8">
                <div className="text-white w-full flex ">
                  <img
                    className="w-28 h-28  md:w-40 md:h-40 rounded-lg object-cover "
                    src={selectedPerson.image}
                    alt={`${selectedPerson.name}`}
                  />
                  <span className="px-4">
                    <h3 className="text-xl font-bold">{selectedPerson.name}</h3>
                    <p className="text-[#0e9fe1] italic">
                      {selectedPerson.position}
                    </p>
                  </span>
                </div>
                <p className="text-base text-[white] mt-4 pb-4">
                  {selectedPerson.bio}
                </p>
              </div>

              <button
                className="team-bio-close-button text-white"
                onClick={() => setSelectedPerson(null)}
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;
