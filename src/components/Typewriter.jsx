import React, { useState, useEffect } from 'react';

export default function TypewriterHeader({ phrases, staticTextAfter = "" }) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const fullPhrase = phrases[currentPhraseIndex];
      
      if (!isDeleting) {
        setCurrentText(fullPhrase.substring(0, currentText.length + 1));
        setTypingSpeed(80);
        if (currentText === fullPhrase) {
          setTypingSpeed(2500); 
          setIsDeleting(true);
        }
      } else {
        setCurrentText(fullPhrase.substring(0, currentText.length - 1));
        setTypingSpeed(40);
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          setTypingSpeed(400); 
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, typingSpeed, currentPhraseIndex, phrases]);

  return (
    <h2 className="text-3xl md:text-5xl font-black text-white mt-4 tracking-tight min-h-[4rem] md:min-h-[auto]">
      <span className="text-un-gold relative inline-block">
        {currentText}
        <span className="absolute -right-3 top-0 text-white font-light animate-[pulse_0.8s_infinite]">|</span>
      </span>
      {staticTextAfter && <span className="text-white block md:inline md:ml-3">{staticTextAfter}</span>}
    </h2>
  );
}