import React, { useState, useRef } from "react";
import "./Team.css";
import Aviel from "../images/professionalportrait.jpg"

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
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Jane Smith",
      position: "COO",
      bio: "Jane is the Chief Operating Officer of the company. She is responsible for the day-to-day operations and ensures the company runs smoothly.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Anthony Chacon",
      position: "COO",
      bio: "Jane is the Chief Operating Officer of the company. She is responsible for the day-to-day operations and ensures the company runs smoothly.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Christian Villar",
      position: "Logistics Team",
      bio: "Hey all Christian here. I am a future implementer and engineer. I am a team member of the logistics team.  Finally, I am excited to be part of the first Hackathon at UHS.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "David Castaneda",
      position: "Outreach Team",
      bio: "Hi Everyone! My name is David Castaneda, I am a senior, and I am part of UnionHack’s outreach team. I am also this year’s Vice President of the UHS Hackers Club. I am passionate for all things computer science. I help contact sponsors and speakers for this event. I am trying my hardest to gain the attention of the most influential guest speakers in order to ensure the best possible speech to be given at our Hackathon. I am so excited to see this Hackathon come into fruition and will be here for every step of the way!",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      name: "Jane Smith",
      position: "COO",
      bio: "Jane is the Chief Operating Officer of the company. She is responsible for the day-to-day operations and ensures the company runs smoothly.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      name: "Jane Smith",
      position: "COO",
      bio: "Jane is the Chief Operating Officer of the company. She is responsible for the day-to-day operations and ensures the company runs smoothly.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 9,
      name: "Jailen Perez",
      position: "Outreach Team",
      bio: "I am part of the outreach team. I help with things like trying to get companies to donate some money to us. And to get some impactful guest speakers at the event.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 10,
      name: "Jane Smith",
      position: "COO",
      bio: "Jane is the Chief Operating Officer of the company. She is responsible for the day-to-day operations and ensures the company runs smoothly.",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="team-section">
      <div className="team-grid">
        {team.map((person) => (
          <div key={person.id} className="team-card">
            <img
              className="team-image"
              src={person.image}
              alt={`${person.name}`}
              onClick={() => setSelectedPerson(person)}
            />
            <div className="team-card-info text-white">
              <h3 className="team-name">{person.name}</h3>
              <p className="team-position">{person.position}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedPerson && (
        <div className="modal-bg" onClick={handleClick}>
          <div className="team-bio-modal" ref={modalRef}>
            <img
              className="team-image-modal"
              src={selectedPerson.image}
              alt={`${selectedPerson.name}`}
            />
            <div className="team-bio-text text-white">
              <h3 className="team-name">{selectedPerson.name}</h3>
              <p className="team-position">{selectedPerson.position}</p>
              <p className="team-bio">{selectedPerson.bio}</p>
            </div>
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
