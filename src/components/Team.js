import React, { useState, useRef } from "react";
import "./Team.css";
import Aviel from "../images/aviel.jpg"
import Kaiya from "../images/Kaiya.jpg";
import David from "../images/David.jpeg"
import Issac from "../images/Issac.jpg"
import Samah from "../images/Samah.jpeg";
import Dias from "../images/Dias.jpeg";
import Jailen from "../images/jailen.jpeg"

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
      bio: "I'm Aviel, a junior at Union High School as well as the Founder and Lead Organizer of UnionHacks. After high school, I plan to explore more about computer science and business. Outside of school, I love to develop websites, solve Rubik's Cubes competitively, read books, listen to podcasts, and work out. I love to learn about many different topics, whether it be through talking to people, watching YouTube videos, or reading articles. I am always looking for new ways to understand the world from a more holistic point of view. I created UnionHacks with the goal of exposing more people to technology,",
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
      bio: "Hi, my name is Samah Keshiro! I’m a senior at Union High School, and I plan on studying either computer science or software engineering in college. In the future, I want to become a programmer, or a software engineer in other words. A goal of mine this year was to get the exposure I want before college while also using my leadership and organization skills, and so I took on the role as the logistics manager for the UnionHacks event. I’m so excited for this event to be brought to life!",
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
      bio: "I am the outreach manager for Unionhacks, I communicate with sponsors to try to come for a workshop speaking event. I like what I do it’s amazing.",
      image: Dias,
    },
    {
      id: 8,
      name: "Christian Villar",
      position: "Logistics Team",
      bio: "Hey all, Christian here. I am currently a senior and a logistic team member of UHS. I am currently on a pursuit to become a mechanical engineer.  Outside of school, I love to 3-D model and collect Nintendo Games. One project I worked on was  building a fan using an Arduino Uno. I love music from playing piano to just listening to it. I joined UnionHacks as I saw potential for people to come together to achieve a common goal.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 10,
      name: "Jeremy Rosero",
      position: "Logistics Team",
      bio: "Hi! I'm Jeremy Rosero, I'm a junior, and I am a part of the Logistics team in UnionHacks. I, with my partners will help ensure this event runs smoothly for everyone involved. Outside of UnionHacks, I pursue hobbies like the culinary arts and physical education/wellness. ",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      name: "Anthony Chacon",
      position: "Design Team",
      bio: "Hello, my name is Anthony Chacon. Part of the Design team helping with ideas and making parts for a bigger picture. Having a small team for such a big project is just perfect, and I think we nail everything on the head. My interests are mostly tech related, such as computers, code, visuals, video games, film, all that. I mainly take an interest in coding and video games, so I merge the two sometimes and try to make my own game. My plan for after high-school is either join one of the many different service branches or go directly into college. Looking into Kean and majoring in Cybersecurity with a minor of computer science. Then after that, hopefully getting back into digital arts and maybe even landing a job working for big companies like Google and have the income to help support my game creation.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "David Castaneda",
      position: "Outreach Team",
      bio: "Hi Everyone! My name is David Castaneda, I am a senior, and I am part of UnionHack’s outreach team. I am also this year’s Vice President of the UHS Hackers Club. I am passionate for all things computer science. I help contact sponsors and speakers for this event. I am trying my hardest to gain the attention of the most influential guest speakers in order to ensure the best possible speech to be given at our Hackathon. I am so excited to see this Hackathon come into fruition and will be here for every step of the way!",
      image: David,
    },
    {
      id: 9,
      name: "Jailen Perez",
      position: "Outreach Team",
      bio: "Hey my name is Jailen, I am part of the outreach team. I help with things like trying to get companies to donate some money to us. And to get some impactful guest speakers at the event. I plan on going to NJIT for collage and take CS classes. I've taken coding classes over the summer and some game design ones too. Outside of school I play video games with my friends, build pc's, code things, stream things (on discord), like to swim, and a lifeguard every summer.",
      image: Jailen,
    },
  ];

  return (
    <div id="ourteams">
      <div className="flex flex-wrap items-center mx-8 justify-center">
        {team.map((person) => (
          <div
            key={person.id}
            className="bg-[#111111] m-4 w-[300px] h-[400px] relative"
          >
            <img
              className="w-full h-96 object-cover cursor-pointer"
              src={person.image}
              alt={`${person.name}`}
              onClick={() => setSelectedPerson(person)}
            />
            <div className="absolute bottom-0 left-0 w-full p-4 text-white">
              <h3 className="text-2xl font-bold m-0">{person.name}</h3>
              <p className="text-[#0e9fe1] m-0">{person.position}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedPerson && (
        <div className="modal-bg fixed top-0 left-0 w-full h-full" onClick={handleClick}>
          <div className="team-bio-modal" ref={modalRef}>
            <div className="team-bio-text text-white">
              <img
                className="w-20 h-20 object-cover"
                src={selectedPerson.image}
                alt={`${selectedPerson.name}`}
              />
              <h3 className="text-2xl font-bold">{selectedPerson.name}</h3>
              <p className="text-[#0e9fe1]">{selectedPerson.position}</p>
            </div>
            <span>
              <p className="text-sm text=[white]">{selectedPerson.bio}</p>
            </span>
            <button
              className="team-bio-close-button text-white"
              onClick={() => setSelectedPerson(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
