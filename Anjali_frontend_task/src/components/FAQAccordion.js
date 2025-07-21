// FAQAccordion.jsx
import React, { useState } from 'react';
import './FAQAccordion.css';
import { FaPlusCircle, FaRegDotCircle } from 'react-icons/fa';

const faqs = [
  {
    question: 'How to contact with riders emergency ?',
    answer: 'An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.',
  },
  {
    question: 'App installation failed, how to update system information?',
    answer: 'An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.',
  },
  {
    question: 'Website response taking time, how to improve?',
    answer:
      'An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.',
  },
  {
    question: 'New update fixed all bug and issues',
    answer: 'An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.',
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(2);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <p className="faq-label">FREQUENT QUESTION</p>
      <h2 className="faq-title">Do you have any question</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {openIndex === index ? (
                <FaRegDotCircle className="faq-icon open-icon" />
              ) : (
                <FaPlusCircle className="faq-icon" />
              )}
              <span>{faq.question}</span>
            </div>
            {openIndex === index && faq.answer && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
