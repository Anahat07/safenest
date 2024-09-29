import React, { useState, useRef, useEffect } from 'react';
import RoadmapCard from './RoadmapCard';
import Modal from './Modal.js';
import AnimatedHeader from './AnimatedHeader';
import './styles/WindingPathway.css'; 
import Navbar2 from './Navbar2';


const WindingPathway = () => {
  const h2Ref = useRef(null);
  const videoRefs = useRef([]); // Create a ref array for video elements

  const initialCards = [
    { title: "October 1st 2024", description: "Transfer $200 to the emergency fund account.",   backgroundColor: "#eb9fa0" },
    { title: "October 1st 2024", description: "Set up an automated round-up tool for daily purchases (e.g., if a purchase is $12.50, it rounds up to $13).",    backgroundColor: "#eb9fa0" },
    { title: "October 1st 2024", description: "Invest $450 in selected stocks (e.g., SPY, QQQ).",    backgroundColor: "#ed8587" }
  ];

  const [cards, setCards] = useState(initialCards);
  const [clickCount, setClickCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [hasAnimationPlayed, setHasAnimationPlayed] = useState(false);

  const newSets = [
    [
      { title: "October 1st 2024", description: "Update LinkedIn Profile",    backgroundColor: "#eb6466" },
      { title: "November 1st 2024", description: "Transfer $250 to the emergency fund account",    backgroundColor: "#eb9fa0" },
      { title: "November 1st 2024", description: "Invest $450 in selected stocks.",    backgroundColor: "#ed8587" }
    ],
    [
      { title: "November 1st 2024", description: "Upskill using our mentee-mentor platform.",    backgroundColor: "#eb6466" },
      { title: "December 1st 2024", description: "Transfer $250 to the emergency fund account.",    backgroundColor: "#eb9fa0" },
      { title: "December 1st 2024", description: "Invest $450 in selected stocks.",    backgroundColor: "#ed8587" }
    ],
    [
      { title: "Decemeber 1st 2024", description: "Interview Practice",    backgroundColor: "#eb6466" },
      { title: "January 1st 2025", description: "Transfer a FINAL $300 to you savings account.",    backgroundColor: "#eb9fa0" },
      { title: "January 1st 2025", description: "Desposit $450 to your selected stocks.",    backgroundColor: "#ed8587" }
    ],
    [
      { title: "January 1st 2025", description: "The job search is hard. You miss a 100% of the shots you do not take!",    backgroundColor: "#eb6466" },
      { title: "February 1st 2025", description: "Invest $450 to stocks.",    backgroundColor: "#ed8587" },
      { title: "March 1st 2025", description: "Invest $450 to stocks.",    backgroundColor: "#ed8587" }
    ],
    [
      { title: "April 1st 2025", description: "Invest $450 to stocks.",    backgroundColor: "#ed8587" },
      { title: "May 1st 2025", description: "Invest $450 to stocks.",    backgroundColor: "#ed8587" },
      { title: "June 1st 2025", description: "Invest $450 to stocks.",    backgroundColor: "#ed8587" }
    ]
  ];

  // Loads more cards on button click
  const loadMoreCards = () => {
    if (clickCount < newSets.length) {
      setCards(newSets[clickCount]);
      setClickCount(prevCount => prevCount + 1);
    }
  };

  const loadPreviousCards = () => {
    if (clickCount === 0) return;
    if (clickCount === 1) {
      setCards(initialCards);
      setClickCount(0);
    } else {
      setClickCount(prevCount => prevCount - 1);
      setCards(newSets[clickCount - 2]);
    }
  };

  const handleCardClick = (card) => {
    setModalContent(card);
    setIsModalOpen(true);
  };

  const scrollToH2 = () => {
    if (h2Ref.current) {
      const offset = 50;
      const h2Position = h2Ref.current.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: h2Position, behavior: 'smooth' });
    }
  };

  const onAnimationComplete = () => {
    if (!hasAnimationPlayed) {
      setHasAnimationPlayed(true);
      scrollToH2();
    }
  };

   // Use effect to observe videos
   useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target); // Stop observing once the animation is added
        }
      });
    });

    // Observe each video
    videoRefs.current.forEach(video => {
      if (video) {
        observer.observe(video);
      }
    });

    return () => {
      observer.disconnect(); // Cleanup the observer
    };
  }, []);


  return (
    <div className="flex flex-col items-center bg-gradient-to-b min-height from-[#e75f61] to-[#f0f8ff] via-[#ffe4e1]">
      <Navbar2 />

      <div className="flex items-center justify-center h-screen pt-10">
        <AnimatedHeader
          onAnimationComplete={onAnimationComplete}
          className="text-8xl sm:text-8xl md:text-10xl lg:text-12xl"
          shouldPlay={!hasAnimationPlayed}
        />
      </div>
      <h2
        ref={h2Ref}
        className={`text-4xl font-bold mb-40 text-center ${!hasAnimationPlayed ? 'header-fade-in' : ''}`}
      >
        Here is Your Personalized Roadmap.
      </h2>

      <div className="flex justify-center items-center mb-4 w-full">
        {clickCount > 0 && (
          <button
            onClick={loadPreviousCards}
            className="bg-gray-200 p-2 rounded-full mr-4 focus:outline-none"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="h-6 w-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mt-15">
          {cards.map((card, index) => (
            <RoadmapCard
              key={index}
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
              backgroundColor={card.backgroundColor}
              onCardClick={() => handleCardClick(card)}
              className="h-64" // Set a fixed height for each card
            />
          ))}
        </div>

        {clickCount < newSets.length && (
          <button
            onClick={loadMoreCards}
            className="bg-gray-200 p-2 rounded-full ml-4 focus:outline-none"
          >
            <span className="sr-only">Next</span>
            <svg
              className="h-6 w-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        )}
      </div>

      {isModalOpen && <Modal content={modalContent} onClose={() => setIsModalOpen(false)} />}
      <h3 className="text-4xl font-bold mb-20 text-center mt-40">Explore Your Toolkit!</h3>
      
      <div className="flex justify-center items-center space-x-4 mb-40">
  <iframe
    ref={el => videoRefs.current[0] = el} // Assign the ref
    width="560"
    height="315"
    src="https://www.youtube.com/embed/i5OZQQWj5-I?si=zLDAHai8__-DWHSz"
    title="YouTube video 1"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
  <iframe
    ref={el => videoRefs.current[1] = el} // Assign the ref
    width="560"
    height="315"
    src="https://www.youtube.com/embed/tmryHfunyQ4?si=D9Qrf7tPTxOaC8Y-"
    title="YouTube video 3"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

<div className="flex justify-center items-center space-x-4 mb-40">
  <iframe
    ref={el => videoRefs.current[2] = el} // Assign the ref
    width="560"
    height="315"
    src="https://www.youtube.com/embed/zd4ALKv8Das?si=csajUozCrw9x3xSE"
    title="YouTube video 4"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
  <iframe
    ref={el => videoRefs.current[3] = el} // Assign the ref
    width="560"
    height="315"
    src="https://www.youtube.com/embed/9ZzzCKrmIkA?si=lpj6Ao-PegrQBgVU"
    title="YouTube video 5"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

    </div>
  );
};

export default WindingPathway;
