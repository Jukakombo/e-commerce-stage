import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import Navigation from "./Navigation";
import Notification from "./Notification";
import Footer from "./Footer";
import help from "../assets/help.png";
function Help() {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "What are your hours of operation?",
      answer:
        "We are open from 9am to 9pm every day, including weekends and holidays.",
    },
    {
      id: 2,
      question: "Do you offer delivery?",
      answer:
        "Yes, we offer delivery within a 10-mile radius of our restaurant. Delivery fee may vary depending on the distance.",
    },
    {
      id: 3,
      question: "Can I make a reservation?",
      answer:
        "Yes, you can make a reservation by calling our restaurant or using our online reservation system.",
    },
    {
      id: 4,
      question: "Do you have a dress code?",
      answer:
        "We do not have a strict dress code, but we recommend casual or business casual attire.",
    },
    {
      id: 5,
      question: "Do you have a dress code?",
      answer:
        "We do not have a strict dress code, but we recommend casual or business casual attire.",
    },
    {
      id: 6,
      question: "Do you have a dress code?",
      answer:
        "We do not have a strict dress code, but we recommend casual or business casual attire.",
    },
    {
      id: 7,
      question: "Do you have a dress code?",
      answer:
        "We do not have a strict dress code, but we recommend casual or business casual attire.",
    },
    {
      id: 8,
      question: "Do you have a dress code?",
      answer:
        "We do not have a strict dress code, but we recommend casual or business casual attire.",
    },
    {
      id: 9,
      question: "Do you have a dress code?",
      answer:
        "We do not have a strict dress code, but we recommend casual or business casual attire.",
    },
  ]);

  return (
    <>
      <Navigation />
      <div className="">
        <h1 className="text-3xl text-center text_navigation text-[#44BBA4] cursor-pointer font-bold my-8">
          Restaurant Help Page
        </h1>
        <div className="grid md:grid-cols-2 gap-4 w-11/12 m-auto">
          <img src={help} alt="help" className="rounded" />
          <div className="w-full">
            {faqs.map((faq) => (
              <Disclosure key={faq.id}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex items-center justify-between w-full py-2 text-left bg-gray-100 hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50 rounded-lg my-2">
                      <span className="font-medium px-2  ">{faq.question}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 py-2 text-gray-500 bg-gray-100">
                      {faq.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
      <Notification />
      <Footer />
    </>
  );
}

export default Help;
