import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Greeting = ({ text }) => (
  <motion.div
    className="w-full flex gap-2 flex-row justify-center items-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div className="p-1.5 rounded-full bg-white"></motion.div>
    <p className="flex justify-center my-6 text-2xl font-mono items-center">
      {text}
    </p>
  </motion.div>
);

const EntranceAnimation = ({ onAnimationComplete }) => {
  const greetings = [
    "Hello",
    "வணக்கம்",
    "Bonjour",
    "こんにちは",
    "नमस्ते",
    "مرحبا",
    "Hola",
    "안녕하세요",
  ];

  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);

  useEffect(() => {
    if (currentGreetingIndex < greetings.length) {
      const timeout = setTimeout(() => {
        setCurrentGreetingIndex((prevIndex) => prevIndex + 1);
      }, 500); // Show each greeting for 5 seconds

      return () => clearTimeout(timeout);
    } else {
      onAnimationComplete(); // Call the callback when the sequence is complete
    }
  }, [currentGreetingIndex, greetings.length, onAnimationComplete]);

  return (
    <motion.div
      className="entrance-animation bg-black h-[100vh] flex justify-center items-center"
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      // transition={{ duration: 0.5 }}
    >
      <AnimatePresence>
        {currentGreetingIndex < greetings.length && (
          <Greeting
            // key={greetings[currentGreetingIndex]}
            text={greetings[currentGreetingIndex]}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default EntranceAnimation;
