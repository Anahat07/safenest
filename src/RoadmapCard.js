import React from 'react';

const RoadmapCard = ({ title, description, buttonText, onCardClick, backgroundColor }) => {
  return (
    <div
      className="shadow-md rounded-lg p-6 mx-4 flex flex-col justify-between bounce-on-hover transition-transform duration-200 hover:scale-105"
      style={{ minHeight: '300px', backgroundColor: backgroundColor || 'white' }}
      onClick={onCardClick}
      role="button"
      tabIndex={0}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <button className="bg-gray-200 p-2 rounded-full" onClick={onCardClick}>
          <span className="sr-only">Add</span>
          <svg
            className="h-6 w-6 text-white-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
          </svg>
        </button>
      </div>
      <p className="text-2xl text-white-900">{description}</p>
            <div className="mt-4">
        <button className="text-lg text-white-500 hover:underline">{buttonText}</button>
      </div>
    </div>
  );
};

export default RoadmapCard;
