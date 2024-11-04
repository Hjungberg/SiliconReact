import React, { createContext, useState, useEffect } from "react";

export const ExternalData = createContext();

const ExternalContext = ({ children }) => {
  const [getFaq, setGetFaq] = useState([]);
  const [reviews, setReviews] = useState([]);

  const fetchFaq = async () => {
    const res = await fetch(
      "https://win24-assignment.azurewebsites.net/api/faq"
    );
    const data = await res.json();
    setGetFaq(data);
   
  
  };
  const fetchReview = async () => {
    const res = await fetch(
      "https://win24-assignment.azurewebsites.net/api/testimonials"
    );
    const data = await res.json();
    setReviews(data);
  };
  
  useEffect(() => {
    fetchFaq();
    fetchReview();
    
  }, []);


  return (
    <ExternalData.Provider value={{getFaq, reviews}}  >
      {children}
    </ExternalData.Provider>
  )
};

export default ExternalContext;
