import React, { useEffect, useState } from 'react';

const Preloader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 600);

    const removalTimer = setTimeout(() => {
      setIsVisible(false);
    }, 1100); // 200ms initial delay + 500ms for the fade-out transition

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(removalTimer);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-white bg-opacity-100 flex justify-center items-center z-50 transition-opacity duration-500 ease-in-out ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>
      <img src={`public/fav-icon.png`} alt="Loading..." className="w-16 h-16" />
    </div>
  );
};

export default Preloader;
