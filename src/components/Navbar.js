import React from 'react'
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import UHLogoNav from "../images/WHEAT_LOGO.svg";

const navigation = [
  { name: "About", href: "#about" },
  { name: "FAQ", href: "#faq" },
  { name: "Speakers", href: "#speakers" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "Schedule", href: "#schedule" },
  { name: "Our Team", href: "#team" },
  // { name: "Merch", href: "#Merch" },
];

const Navbar = () => {
  return (
    <Popover as="header" className="relative">
      <div className="pt-6">
        <nav
          className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 "
          aria-label="Global"
        >
          <div className="flex flex-1 items-center ">
            <div className="flex w-full items-center justify-between md:w-auto">
              <a href="#">
                <span className="sr-only">UnionHacks</span>
                <img className="h-10 w-auto sm:h-10" src={UHLogoNav} alt="" />
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md  p-2 text-[#0e9fe1] hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="hidden space-x-8 md:ml-10 md:flex ">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-white hover:text-gray-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a
              href="https://forms.gle/bbWAXTxQvQUpz8hu5"
              target="_blank"
              className="inline-flex items-center rounded-md border border-transparent bg-[#0e9fe1] px-4 py-2 text-base font-medium text-white hover:bg-[#0c8fca]"
            >
              Pre-Register
            </a>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-10 origin-top transform p-2 transition md:hidden"
        >
          <div className=" rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                <img
                  className="h-10 w-auto"
                  // unionhacks logo here
                  src={UHLogoNav}
                  alt=""
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="pt-5 pb-6">
              <div className="space-y-1 px-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="mt-6 px-5">
                <div className="mt-3 sm:mt-0 ml-0">
                  <a
                    href="https://forms.gle/bbWAXTxQvQUpz8hu5"
                    target="_blank"
                    className="bouncy inline-flex items-center rounded-md border border-transparent bg-[#0e9fe1] px-4 py-2 text-base font-medium text-white hover:bg-[#0c8fca]"
                  >
                    Pre-Register
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default Navbar