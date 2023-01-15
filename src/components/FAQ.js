import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What is a Hackathon?",
    answer:
      "A hackathon usually a 24 hour event, during which a large number of students gather to engage in collaborative computer programming. Participants typically work in teams to develop new software or hardware projects, with the goal of creating functional prototypes or proof-of-concepts by the end of the event. Hackathons are often focused on specific themes, and can be organized by a variety of organizations, including businesses, universities, and non-profits. They are often open to anyone who is interested in participating, and can be a great way for people with different skillsets to come together, collaborate, and learn from each other.",
  },
  {
    question: "Who can attend?",
    answer:
      "Any student from Union High School, the Union County Magnet Schools, any 8th grader from Burnet and Kawameeh middle school, and any homeschooled students who live in Union School District is allowed to attend. You must register and bring your student ID to attend. If you are homeschooled, please email us after you register for UnionHacks.",
  },
  {
    question: "Where will it be?",
    answer:
      "It will be in the Big Gymnasium of Union High School. You may enter through the rock door where you will then sign in, and head to the big gym.",
  },
  {
    question: "What's the cost?",
    answer: "UnionHacks is completly free thanks to our amazing sponsors",
  },
  {
    question: "Will there be food?",
    answer:
      "Breakfast, lunch, and dinner will be provided. Along with snacks and candies throughout the event to ensure everyone can eat. There will be vegan and kosher options as well. ",
  },
  {
    question: "What should I bring?",
    answer:
      "You MUST bring your student ID, laptop, chargers, and any other technology you might need. This event is going to be long, so you can brng a change of clothes in case it gets really warm or cold (which we recommend doing), along with any personal items you might need during the 16 hours. ",
  },
  {
    question: "What's the schedule?",
    answer:
      "Currently, the schedule is not released, but the hackathon will start at 8 AM and end at midnight the next day. (16 hours long)",
  },
  {
    question: "Are there prizes?",
    answer:
      "Yes there will be prizes! Prizes will be announced at the event, so make sure you register for a chance to win some!",
  },
  {
    question: "What's the registration deadline?",
    answer:
      "Registration closes April 1st! So make sure you fill out the Google Form before then so you will be allowed to come. NO WALK INS ARE ALLOWED. EVERYONE MUST SIGN UP BEFOREHAND.",
  },
  {
    question: "What if I can't code?",
    answer:
      "UnionHacks is open to all skill levels. We will have mentors and workshops to help you get started on your project. There will also be a beginner track that you can compete in.",
  },
  {
    question: "How do teams work?",
    answer:
      "Everyone who wishes to participate can compete in a team of up to 4 people. You may have less than 4, or compete alone if you wish. We do recommend getting 4 people so you can maximize your projects potential, but that is not required.",
  },
  {
    question: "What if I don't have a team?",
    answer:
      "If you come alone, we recommend you talk to some new people and try to form a well rounded team. However, we will have a team formation section during the opening ceremony and create well balanced teams for anyone left.",
  },
  {
    question: "Can I judge or mentor?",
    answer:
      "If you are interested in judging or mentoring, please fill out this Google Form.",
  },
  {
    question: "What are the benefits of attending UnionHacks?",
    answer:
      "You will gain knowledge about new technologies and improve your programming skills. With our amazing workshops and guest speakers, you'll surely learn something new. You will be able to meet new people and grow your social network. Maybe your project could be the next tech tech giant! Who knows, it's up to you.",
  },
  {
    question: "Why should I let my child attend UnionHacks?",
    answer:
      "UnionHacks will give your child exposure to distinguished guest speakers where they can learn from and be inspired by their stories. We encourage all students to attend because computer science is a rapidly growing industry and this event is a perfect way for your child to be exposed to it. Maybe they will love it and pursue it as a career!",
  },
  {
    question: "Is there going to be security at this event?",
    answer:
      "Yes! We will have school security, as well as some Union Police officers. So everyone is safe at this event. We will only allow students who have signed up to attend in the building.",
  },
  {
    question: "Can I leave and come back?",
    answer:
      "We really encourage that you stay the entire time, if you wish to leave, you must have a parent/guardian with you. If you leave with a parent/guardian, you must come back with them. ",
  },
  {
    question:
      "What if I don't want to code and I just want to listen to the guest speakers?",
    answer:
      "That is perfectly fine! We want as many students who are interested in learning about technology to come. So if you just want to meet new people and attend our workshops, you're welcome to do so! But you will not be able to win any prizes, so we recommend competing as well. Although it is not required.",
  },
  {
    question: "Can my parent/guardian stay with me?",
    answer: (
      <p>
        Your parents are not allowed to stay with you during this entire event.
        Your parent can sign up to chaperone if they would like to stay and help
        for a certain amount of time. If you're parent or guardian is interested
        in chaperoning, please fill out this{" "}
        <a
          href="https://forms.gle/h1yiPCQFB5VJcZLx9"
          target="_blank"
          className="text-[#0e9fe1] hover:text-[#26a8e4] "
        >
          google form.
        </a>
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
        <div className="mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center lg:text-6xl font-bold tracking-tight text-[white] text-4xl">
            Frequently Asked Questions
          </h2>
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