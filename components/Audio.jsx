import React, { useEffect, useRef } from 'react';

const Audio = ({ src }) => {
  const audioElementRef = useRef(null);

  useEffect(() => {
    const audioElement = audioElementRef.current;

    if (audioElement) {
      audioElement.src = src; // Set the source URL

      // Play the audio automatically when  loaded
      audioElement.play().catch((error) => {
        // Handle any play errors
        console.error('Error playing audio:', error);
      });
    }

    return () => {
      // Cleanup or stop the audio when the component unmounts
      if (audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0;
      }
    };
  }, [src]);

  return (
    <audio ref={audioElementRef} controls className='transparent' muted>
      <source src={src} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default Audio;
