import React, { useState } from "react";
import "./styles.css";

const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="accordion">
      <div className="accordion-header" onClick={onToggle}>
        <h2 className="accordion-title">{question}</h2>
        <span className="icon">
          {isOpen ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-plus"></i>
          )}
        </span>
      </div>

      {isOpen && (
        <div className="accordion-content">
          <p className="accordion-answer">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function FAQaccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is Peniwyse?",
      answer:
        "Peniwyse is a secure online savings platform that helps you track your spending, save automatically, and grow your money. Whether you're saving for a specific goal or just want to spend smarter, Peniwyse makes it easy.",
    },
    {
      question: "How does round-up savings work?",
      answer:
        "Round-up savings automatically rounds up each of your purchases to the nearest dollar and puts the difference into your savings. It’s a simple way to save without even noticing.",
    },
    {
      question: "What is Safelock?",
      answer:
        "Safelock allows you to lock away a portion of your savings for a set duration. During this time, you can’t withdraw those funds, but you'll earn interest—encouraging disciplined saving.",
    },
    {
      question: "How secure is Peniwyse?",
      answer:
        "Your security is our priority. Peniwyse uses bank-level encryption to keep your data safe and ensure your funds are protected.",
    },
    {
      question: "Can I track my spending with Peniwyse?",
      answer:
        "Yes! Peniwyse offers tools to help you track your spending, manage bills, subscriptions, and create a budget—all in one place.",
    },
    {
      question: "Is there a fee to use Peniwyse?",
      answer:
        "No, Peniwyse is free to use. There are no hidden charges for tracking your spending, saving, or using Safelock.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {faqData.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}
