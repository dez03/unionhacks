import React from 'react'

// array with information about all members
const members = [
    {
        member: "First Last",
        team: "Team",
        bio:
            "Hi I'm First Last and I'm on the Team team.",
    },
    {
        member: "First Last",
        team: "Team",
        bio:
          "Hi I'm First Last and I'm on the Team team.",
    }
]

export const OurTeams = () => {
return (
    <div className="mx-auto max-w-7xl py-12 px-6 sm:py-16 lg:px8">
        <div className="divide-y-2 divide-gray-200">
            <h2 className="text-center lg:text-6xl font-bold tracking-tight text-[white] sm:text-4xl pb-4">
                Teams
            </h2>
            <h3 className="text-4xl font-bold pb-4 tracking-tight text-[white] divide-y-2 divide-gray-200">
                Staff 🤝
            </h3>
        </div>
        <p className="text-left tracking-tight text-[white] divide-solid divide-x divide-gray-50">
            test
        </p>
    </div>
)
}

export default OurTeams;
