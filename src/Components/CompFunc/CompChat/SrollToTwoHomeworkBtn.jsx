import React from 'react';

export const ScrollToTwoHomeworkBtn = () => {
  const scroll = () => {
    document.querySelector('.messageList').scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <button className="scroll-btn-toDO" onClick={scroll}>
      Далее
    </button>
  );
};
