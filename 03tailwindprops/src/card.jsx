// card.jsx
import React from 'react';

function BasicCard({username,btnText="visit me"}){
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-10 my-20 bg-blue-400 text-black">
      <img 
        className="w-full " 
        src="https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=400" 
        alt="Sample Image"
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{username}</h2>
        <p className="text-black-500 text-base">
          This is some sample text for the card component. You can replace it with your own content.
        </p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-purple-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default BasicCard;
