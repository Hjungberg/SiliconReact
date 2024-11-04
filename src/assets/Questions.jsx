import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import IconPhone from "../images/icon-phone.svg";
import ContactBlue from "../images/contact-blue.svg";
import ContactGreen from "../images/contact-green.svg";
import IconChat from "../images/icon-chat.svg";
import { ExternalData } from "./ExternalData";

const Questions = () => {
  
  const { getFaq } = useContext(ExternalData)
        
        const AccordionItem = ({ title, content, isOpen, onToggle }) => {
          return (
      <>
        <div className="questions-list-items">
          <p>{title}</p>
          <a
            href="#features"
            className="btn-round btn-primary"
            onClick={onToggle}
          >
            <i
              className={
                isOpen ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"
              }
            ></i>
          </a>
        </div>
        {isOpen && <div className="accordion-content">{content}</div>}
      </>
    );
  };

  const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };

    return (
      <div className="accordion">
        {getFaq.map((getFaq, index) => (
          <AccordionItem
            key={index}
            title={getFaq.title}
            content={getFaq.content}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    );
  };

  return (
    <section aria-label="Any questions" className="questions space-y-3">
      <div className="container">
        <div className="quest-sections">
          <div className="quest-info">
            <h2 className="h2">Any questions? Check out our FAQs</h2>
            <p>Still have unanswered questions and need to get in touch?</p>
            <div className="quest-contact">
              <div className="quest-contact-item quest-border">
                <img src={IconPhone} alt="" className="client-img2" />
                <p>Still have questions?</p>
                <button>
                  <Link to="Contact">
                    <img src={ContactBlue} alt="" />
                  </Link>
                </button>
              </div>
              <div className="quest-contact-item"></div>
              <div className="quest-contact-item  quest-border">
                <img src={IconChat} alt="" className="client-img2" />
                <p>Don't like phonecalls?</p>
                <button>
                  <Link to="Contact">
                    <img src={ContactGreen} alt="" />
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="quest-info">
            <div className="questions-list">
              <h2 className="h2 quest-mobile">
                Any questions? Check out our FAQs
              </h2>
              <p className="quest-mobile">
                Still have unanswered questions and need to get in touch?
              </p>

              <Accordion items={getFaq} />

              <div className="space-y-3 quest-mobile-only">
                <a href="#" className="btn btn-primary sp">
                  <span>Contact us now</span>
                </a>
              </div>

              <div className="quest-contact quest-tablet">
                <div className="quest-contact-item quest-border">
                  <img src={IconPhone} alt="" className="client-img2" />
                  <p>Still have questions?</p>
                  <button>
                    <img src={ContactBlue} alt="" />
                  </button>
                </div>
                <div className="quest-contact-item"></div>
                <div className="quest-contact-item  quest-border">
                  <img src={IconChat} alt="" className="client-img2" />
                  <p>Don't like phonecalls?</p>
                  <button>
                    <img src={ContactGreen} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
