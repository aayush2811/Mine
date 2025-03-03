"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Valentine() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [adventureScene, setAdventureScene] = useState(0);

  useEffect(() => {
    if (yesPressed) {
      const interval = setInterval(() => {
        setAdventureScene((prev) => (prev + 1) % adventureBackgrounds.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [yesPressed]);

  const handleNoClick = () => {
    setNoCount((prev) => prev + 1);
    setPosition({
      x: (Math.random() - 0.5) * 500,
      y: (Math.random() - 0.5) * 500,
    });
  };

  const adventureBackgrounds = [
    "bg-gradient-to-r from-blue-400 to-cyan-300", // Beach
    "bg-gradient-to-r from-green-500 to-emerald-700", // Mountain
    "bg-gradient-to-r from-orange-400 to-amber-500", // Sunset
    "bg-gradient-to-r from-indigo-500 to-purple-600", // Night Sky
  ];

  const phrases = [
    "No",
    "Are you sure? 🥺",
    "I promise to pick you up every day! 🚗",
    "But… I’ll bring you dark chocolate! 🍫",
    "Okay, but who else will eat my pizza crust? 🍕",
    "Think of all the salads I'll pretend to like! 🥗",
    "I'll be your personal driver! 🚗💖",
    "I'll try quinoa if you try my pizza! 😜",
    "Late-night chocolate runs? Yes? 🍫🌙",
    "We balance each other - greens for you, cheese for me! 🥗🍕",
    "I'll pack your lunch with extra veggies! (Maybe) 😅",
    "Who will remind me to drink water if not you? 💧",
    "I'll even go on a juice cleanse... once? 😂",
    "Are you really saying no to daily surprise chocolates? 🍫",
    "Last chance! I'll watch a cooking show with you! 👨‍🍳"
  ];

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen transition-all duration-1000 ${yesPressed ? adventureBackgrounds[adventureScene] : "bg-pink-100"
        }`}
    >
      {yesPressed ? (
        <div className="text-center p-8 bg-white bg-opacity-80 rounded-xl backdrop-blur-sm max-w-md">
          <motion.h1
            className="text-4xl font-bold mb-4 text-pink-600"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Yay! Adventures & chocolate await us! ❤️🍫
          </motion.h1>

          <motion.p
            className="text-xl mb-6 text-pink-600"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Our first date idea:{" "}
            <span className="font-bold text-green-500">
              I'll pick you up, we grab dark chocolate & debate pizza toppings! 🍕🍫
            </span>
          </motion.p>

          <motion.button
            className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-bold transition-all"
            onClick={() => setAdventureScene((prev) => (prev + 1) % adventureBackgrounds.length)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            More date ideas? Click me! 💕
          </motion.button>
        </div>
      ) : (
        <div className="text-center p-8 bg-white rounded-xl shadow-xl max-w-md">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-2 text-pink-600">
              Hey Prakruti! 💕
            </h1>
            <h3 className="text-4xl font-bold mb-2 text-pink-600">
              I Really Like You ? 😏
            </h3>
            <p className="text-xl mb-8 text-gray-700">
              I promise to pick you up daily, bring surprise chocolates, and *maybe* even eat a salad… for you. 🥗🍫🚗
            </p>
          </motion.div>
          <div className="relative h-48 mb-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center space-x-4 text-4xl"
            >
              <span>🍕</span>
              <span>🥗</span>
              <span>🍫</span>
              <span>🚗</span>
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-10">
            <motion.button
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all"
              onClick={() => setYesPressed(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Yes! But I get extra chocolate 🍫😜
            </motion.button>

            <motion.button
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all"
              onClick={handleNoClick}
              animate={{ x: position.x, y: position.y }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              style={{ position: noCount > 0 ? "absolute" : "static" }}
            >
              {phrases[Math.min(noCount, phrases.length - 1)]}
            </motion.button>
          </div>

          {noCount > 0 && (
            <motion.p
              className="mt-12 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              The "No" button is running away… just like I will when you make me eat kale. 🥗😂
            </motion.p>
          )}
        </div>
      )}
    </div>
  );
}
