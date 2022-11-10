import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Accordion from "../Accordion/Accordion";

// container component for FAQ Accordion
const FAQ = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch("https://assignment-11-server-swart.vercel.app/faq")
      .then((res) => res.json())
      .then((data) => setFaqs(data));
  }, []);

  return (
    <div>
      <h2 className="text-4xl text-center mt-6 mb-14">Frequently Asked Questions</h2>
      {faqs.map((faq) => (
        <Accordion key={faq._id} faq={faq}></Accordion>
      ))}
    </div>
  );
};

export default FAQ;
