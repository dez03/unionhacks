import React, { useState, useRef } from "react";
import "./Team.css";
import Zane from "../images/zane.JPG";
import Brandon from "../images/brandon.JPG";
import Noah from "../images/noah.JPG";
import Issac from "../images/Issac.jpg";
import Samah from "../images/Samah.jpeg";
import Dias from "../images/Dias.jpeg";
import Jailen from "../images/jailen.jpeg";
import Jeremy from "../images/jeremy.png";
import JasonA from "../images/jasonA.jpg";
// import Christian from "../images/christianVillar.jpg";
// import Default from "../images/default.png"
import Anthony from "../images/anothonyC.jpg";
import DylanF from "../images/DylanF.jpeg";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Jace from "../images/jace.jpg";

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
      name: "Zane Kleinberg",
      position: "CTO and Head of Product Development @ Spotlyte",
      bio: "I’m Zane, a sophomore at Swarthmore College majoring in Computer Science and Economics. Currently, I am one of four cofounders of Spotlyte, and serve as the CTO and head of product development. Prior to Spotlyte, I founded the OldOS initiative, and launched OldOS, which has garnered over 750k downloads and has been written about in numerous tech publications such as The Verge, Cult of Mac, and Daring Fireball. I love building businesses, and exploring how we can use technology to create solutions which address market inefficiencies. Outside of school, I love watching F1, competing in races, hanging out with my friends, and going on adventures in NYC. I’m beyond excited to be a part of UnionHacks this year, and can’t wait to meet everyone soon.",
      image: Zane,
    },
    {
      id: 2,
      name: "Noah Edgar",
      position: "COO and VP of Product Development @ Spotlyte",
      bio: "Hi! I’m Noah, a Sophomore at Swarthmore College. I am an Engineering and Economics double major and the CO-Founder and COO of Spotlyte. As COO I ensure that my teammates stay on task and assist in business development and design. Outside of school and Spotlyte, I love to play tennis, hike, read, and watch movies. I co-founded Spotlyte with the goal of bringing college communities together based on shared interests. I am very excited to meet you all at UnionHacks!",
      image: Noah,
    },
    {
      id: 3,
      name: "Brandon Knights",
      position: "CMO and Head of Media @ Spotlyte",
      bio: "Hey! I’m Brandon, a current sophomore at Swarthmore College. I am currently the Co-Founder of an art platform called Try Bluum and the CMO at Spotlyte. I am currently on track to be an engineering major and math minor. Outside of class I have found a love for traveling, meeting new people, fishing, and surfing. In all the different aspects of my life, I have found a genuine passion in connecting people and helping others reach their goals. I am excited to attend UnionHacks with a few members of the Spotlyte team and can’t wait to see you all there!",
      image: Brandon,
    },
  ];

  return (
    <div
      className="mx-auto max-w-7xl pb-[-100px] px-6 sm:py-16 lg:px-8"
      id="speakers"
    >
      <div id="stars"></div>
      <div id="stars2"></div>
      <div className="divide-y-2 divide-gray-200">
        <h2 className="text-center lg:text-6xl font-bold tracking-tight text-[white] text-4xl pb-4">
          Guest Speakers
        </h2>
        <div className="flex flex-wrap items-center mx-8 justify-center">
          {team.map((person) => (
            <div
              key={person.id}
              className="bg-[#111111] m-4 w-[300px] h-[400px] relative"
            >
              <div className="overflow-hidden">
                <img
                  className="hover:scale-105 duration-200 w-full h-96 object-cover object-top cursor-pointer mb-8"
                  src={person.image}
                  alt={`${person.name}`}
                  onClick={() => setSelectedPerson(person)}
                />
              </div>

              <div className="absolute bottom-0 left-0 w-full h-24 pt-4 text-white">
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
      <p className="text-center tracking-tight text-[white] mt-6 divide-solid divide-x divide-gray-50">
        More will be announced soon!
      </p>
    </div>
  );
};

export default Team;
