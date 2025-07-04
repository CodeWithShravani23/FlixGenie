import React, { useState } from "react";

const faqData = [
  {
    question: "What is FlixGenie?",
    answer:
      "FlixGenie is your AI-powered movie assistant that helps you discover movies based on your description or mood."
  },
  {
    question: "How does the Genie suggest movies?",
    answer:
      "You provide a description like 'a mind-blowing sci-fi thriller with a twist', and our AI suggests movies matching it."
  },
  {
    question: "Can I use FlixGenie for free?",
    answer:
      "Yes, FlixGenie is completely free to use with basic features. Premium features may be introduced later."
  },
  {
    question: "Do I need to create an account?",
    answer:
      "Yes, you need to sign up or log in using Firebase Authentication to access personalized suggestions."
  },
  {
    question: "Is FlixGenie available on mobile?",
    answer:
      "FlixGenie is fully responsive and works great on both desktop and mobile browsers."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-700 mb-4 cursor-pointer"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center py-4">
              <h3 className="text-xl">{item.question}</h3>
              <span className="text-2xl">{openIndex === index ? "-" : "+"}</span>
            </div>
            {openIndex === index && (
              <p className="text-gray-300 pb-4 transition-all duration-300">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
