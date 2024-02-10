import React from 'react';
import LoadingGif from '../assets/loading.gif';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <img src={LoadingGif} alt="Loading..." className="w-16 h-16" />
      
    </div>
  );
};

export default Loader;
