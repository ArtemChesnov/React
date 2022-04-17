import React from 'react';

export const ScrollBtn = () => {
  const scroll = () => {
    document.querySelector('main').scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <button className="scroll-btn" onClick={scroll}>
      Далее
    </button>
  );
};
