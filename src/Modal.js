import React from 'react';
import { withAuthInfo, useRedirectFunctions } from '@propelauth/react';

const Modal = ({ content, onClose }) => {

  const { redirectToAccountPage } = useRedirectFunctions();

  const goToInvest = () => {
    window.location.href = '/invest';
};

  if (!content) return null;

  let button = null;
  let description = "";

  switch (content.title) {
    case "October 1st 2024":
      description = "Emergency funds are essential for unforeseen circumstances. We aim to empower you with complete control over your transfers, helping you stay organized and mindful of automatic expenses. We'll provide helpful reminders right here and guide you to your bank when needed!";
      button = (
        <a href="https://www.rbcroyalbank.com/personal.html" target="_blank" rel="noopener noreferrer">
          <button className="mt-4 text-black py-2 px-4 rounded" style={{ backgroundColor: '#f5bebf' }}>
            Go To Your Bank
          </button>
        </a>
      );
      
      break;

    case "November 1st 2024":
      description = "Enhance your skills with our mentee-mentor platform! We’re excited to connect you with a diverse pool of qualified professionals who can share their expertise in finance and career development. Participate in engaging classes and webinars to expand your knowledge and earn professional certificates that will elevate your resume. Join us on this journey of growth and learning!";
      button = (
        <button className="mt-4 text-black py-2 px-4 rounded" style={{ backgroundColor: '#f5bebf' }} onClick={redirectToAccountPage}>
          Connect with our Mentors
        </button>
      );
      break;
      
    case "December 1st 2024":
      description = "Invest just $450 in selected stocks and take a step towards building a passive income. We believe that generating passive income is crucial for freeing up your time, allowing you to focus on other career-building. We can help you find investment options that align with your financial goals. So far, you have a Cumulative Investment of $900, an Estimated Growth of $6.30 and a Total Investment of $906.30";
      button = (
        <button className="mt-4 text-black py-2 px-4 rounded" style={{ backgroundColor: '#f5bebf' }} onClick={goToInvest}>
        See Your Investment Options
        </button>
      );
      
      break;
      }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50 backdrop-blur-strong">
      {/* Modal Content */}
      <div className="bg-white rounded-lg shadow-lg p-8 w-3/5 h-2/5 relative">
        {/* Close button inside the modal, positioned at the top-right corner */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        {/* Modal title and content */}
        <h3 className="text-2xl font-semibold mb-4">{content.title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        {button}
      </div>
    </div>
  );
};

export default Modal;
