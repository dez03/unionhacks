import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What is a Hackathon?",
    answer:
      "A hackathon is usually a 24 hour event, during which a large number of students gather to engage in collaborative computer programming. Participants typically work in teams to develop new software or hardware projects, with the goal of creating functional prototypes or proof-of-concepts by the end of the event. Hackathons are often focused on specific themes, and can be organized by a variety of organizations, including businesses, universities, and non-profits. They are often open to anyone who is interested in participating, and can be a great way for people with different skillsets to come together, collaborate, and learn from each other.",
  },
  {
    question: "Who can attend?",
    answer:
      "Any student from Union High School, the Union County Magnet Schools, any 8th grader from Burnet or Kawameeh Middle School, and any homeschooled students who live in Union Township are allowed to attend. You must register online and bring your student ID to enter.",
  },
  {
    question: "Where will it be?",
    answer:
      "It will be in the Big Gymnasium of Union High School. You may enter through the rock door where you will sign in and head to the big gym.",
  },
  {
    question: "What's the cost?",
    answer: "UnionHacks is completly free thanks to our amazing sponsors!",
  },
  {
    question: "Will there be food?",
    answer:
      "Breakfast, lunch, and dinner will be provided along with snacks and candies throughout the event to ensure everyone can eat. There will be vegan and kosher options as well. ",
  },
  {
    question: "What should I bring?",
    answer:
      "You MUST bring your student ID, laptop, chargers, and any other technology you might need. This event is going to be long, so we recommend bringing any personal items you might need during the 16 hours, along with extra clothing in case it gets really warm or cold. ",
  },
  {
    question: "What's the schedule?",
    answer:
      "Currently, the schedule is not released, but the hackathon will start on April 22nd at 8 AM and end at midnight. (16 hours long)",
  },
  {
    question: "Are there prizes?",
    answer:
      "Yes, there will be prizes! Prizes will be announced at the event, so make sure you register for a chance to win some!",
  },
  {
    question: "What's the registration deadline?",
    answer:
      "Currently, you can only pre-register, but once normal registration is open the deadline to register will be April 1st.",
  },
  {
    question: "What if I can't code?",
    answer:
      "UnionHacks is open to all skill levels. We will have mentors and workshops to help you get started on your project. There will also be a beginner track that you can compete in.",
  },
  {
    question: "How do teams work?",
    answer:
      "Everyone who wishes to participate can compete in a team of up to 4 people. You may have less than 4, or compete alone if you wish. We recommend teams of 4 so you can maximize your project's potential, but that is not required.",
  },
  {
    question: "What if I don't have a team?",
    answer:
      "If you come alone, we recommend you talk to some new people and try to form a well rounded team. Don't worry though, we will have a team formation section during the opening ceremony and create well balanced teams for anyone left.",
  },
  {
    question: "Can I judge or mentor?",
    answer: (
      <p>
        If you are interested in judging or mentoring, please email us at{" "}
        <a
          className="text-[#0e9fe1] hover:text-[#26a8e4] "
          href="mailto: unionhacks.team@gmail.com"
        >
          unionhacks.team@gmail.com
        </a>
      </p>
    ),
  },
  {
    question: "What are the benefits of attending UnionHacks?",
    answer:
      "You will gain knowledge about new technologies and improve your programming skills. With our amazing workshops and guest speakers, you'll surely learn something new. You will be able to meet new people and grow your social network. Maybe your project could be the next tech giant! Who knows, it's all up to you.",
  },
  {
    question: "Why should I let my child attend UnionHacks?",
    answer:
      "UnionHacks will give your child exposure to distinguished guest speakers who they can learn from and be inspired by their stories. We encourage all students to attend because computer science is a rapidly growing industry and this event is a perfect way for your child to be exposed to it. Maybe they will love it and pursue it as a career!",
  },
  {
    question: "Is there going to be security at this event?",
    answer:
      "Yes! We will have school security and Union Police present so everyone is safe at this event. We will only allow students who have signed up to attend in the building.",
  },
  {
    question: "Can I leave the building and come back later?",
    answer:
      "We really encourage that you stay the entire time, if you wish to leave, you must have a parent/guardian with you. If you leave with a parent/guardian, you must come back with them. ",
  },
  {
    question:
      "What if I don't want to code and I just want to listen to the guest speakers?",
    answer:
      "That is perfectly fine! We want as many students who are interested in learning about technology to come. If you just want to meet new people and attend our workshops, you're welcome to do so! However, you will not be able to win any prizes if you don't submit a project.",
  },
  {
    question: "Can my parent/guardian stay with me?",
    answer: (
      <p>
        Your parents are not allowed to stay with you during this event.
        However, they can sign up to chaperone if they would like to stay and help
        out. If you're parent or guardian is interested
        in chaperoning, please fill out this{" "}
        <a
          href="https://forms.gle/h1yiPCQFB5VJcZLx9"
          target="_blank"
          className="text-[#0e9fe1] hover:text-[#26a8e4] "
        >
          Google Form.
        </a>
      </p>
    ),
  },
  {
    question: "What if I have more questions?",
    answer: (
      <p>
        You can send us an email at{" "}
        <a
          className="text-[#0e9fe1] hover:text-[#26a8e4] "
          href="mailto: unionhacks.team@gmail.com"
        >
          unionhacks.team@gmail.com
        </a>
        or DM us on Instagram
      </p>
    ),
  },
  {
    question: "Is there a code of conduct?",
    answer: (
      <p>
        Yes, there is! We will be following the{" "}
        <a
          href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
          target="_blank"
          className="text-[#0e9fe1] hover:text-[#26a8e4] "
        >
          MLH Code of Conduct
        </a>
        . Any misconduct will need to be reported to the UHS administration.
      </p>
    ),
  },

  // More questions...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FAQ() {
  return (
    <div id="faq">
      <div className="mx-auto max-w-7xl py-12 px-6 sm:py-16 lg:px-8">
        <h2 className="text-center lg:text-6xl font-bold tracking-tight text-[white] text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto divide-y-2 divide-gray-200">
          <p className="text-center text-[white] text-base md:text-lg mt-2"> Please read all of the questions carefully!</p>

          <dl className="grid md:grid-cols-2 sm:grid-cols-1 gap-x-8 mt-6">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-[white] ">
                        <span className="font-bold text-[white] relative">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform text-[#0e9fe1]"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-400 relative ">
                        {faq.answer} <br /> {faq.cellTemplate}{" "}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

//https://turbofuture.com/computers/React-Animated-Background