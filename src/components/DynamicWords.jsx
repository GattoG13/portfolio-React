import { useState, useEffect } from "react";

export default function DynamicWords() {
  const words = ["Portfolio", "Ideas", "Creations", "Innovations", "Solutions"];
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
      } else {
        setText(currentWord.substring(0, text.length + 1));
      }

      if (!isDeleting && text === currentWord) {
        // Pausa al terminar de escribir
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        // Cuando terminó de borrar
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <h1 className="text-4xl text-center mt-4">
      <span className="text-white font-bold font-sans">My{" "}</span>
      <span
        className="text"
        style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
      >
        {text}
        <span className="border-r-2 border-white animate-blink ml-1"></span>
      </span>
    </h1>
  );
}
