import React, { useState, useEffect } from 'react';

function Detailslider() {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldFix = window.scrollY > 1000;

      if (shouldFix !== fixed) {
        setFixed(shouldFix);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fixed]); // Include fixed in the dependency array to avoid stale closure

  const containerClass = `w-full bg-blue-700 flex items-center justify-between flex-wrap p-1 pl-3  bottom-0 z-50 left-0 right-0 ${fixed ? 'fixed' : ''}`;

  return (
    <div className={containerClass}>
      <marquee behavior="alternate">
        <div className="icon text-white  text-[0.7rem] md:text-sm">
          Kci Education contact number <span className="text-white">1234534556</span>
        </div>
      </marquee>
    </div>
  );
}

export default Detailslider;
