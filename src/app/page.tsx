"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Valentine() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [adventureScene, setAdventureScene] = useState(0);
  const [floatingHearts, setFloatingHearts] = useState([]);

  useEffect(() => {
    setFloatingHearts(
      Array.from({ length: 10 }).map(() => ({
        id: Math.random(),
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }))
    );
  }, []);

  const handleNoClick = () => {
    setNoCount((prev) => prev + 1);
    setPosition({
      x: (Math.random() - 0.5) * 400,
      y: (Math.random() - 0.5) * 400,
    });
  };

  const backgroundOptions = [
    { value: "https://images.unsplash.com/photo-1518495973542-4542c06a5843", name: "Beach Sunset" },
    { value: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d", name: "Lavender Fields" },
    { value: "https://images.unsplash.com/photo-1534447677768-be436bb09401", name: "Cherry Blossoms" },
    { value: "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8", name: "Starry Sky" },
    { value: "https://images.unsplash.com/photo-1501785888041-af3ef285b470", name: "Romantic Candlelight Dinner" },
    { value: "https://images.unsplash.com/photo-1601315484473-514d6e1bcd5d", name: "Mountain Getaway" },
    { value: "https://images.unsplash.com/photo-1615966652720-7c9970a1bfc5", name: "Snowy Cabin Retreat" },
  ];

  const dateIdeas = [
    "Sunset picnic and stargazing! 🌅✨",
    "Surprise road trip to a chocolate factory! 🚗🍫",
    "Movie night with all your favorite snacks! 🎬🍿",
    "Beach day with ice cream and sunset walks! 🏖️🍦",
    "Romantic candlelight dinner with music! 🍷💃",
    "Hot air balloon ride with breathtaking views! 🎈🌄",
    "Cozy fireplace night with hot chocolate! 🔥☕",
    "Snowy cabin getaway with warm drinks! ❄️🏔️",
    "Star-gazing night with a telescope! 🔭🌠",
    "Road trip with no destination, just vibes! 🚗🎶",
  ];

  const phrases = [
    "Are you *really* saying no? 😳",
    "Think of all the surprise chocolates… 🍫",
    "What if I let you pick the movie *every time*? 🎬",
    "I'll even try kale if you say yes… maybe. 🥗😅",
    "You can have the last slice of pizza… once. 🍕",
    "Imagine the cuddles you're rejecting! 🥺💖",
    "Daily compliments included for free! 😘",
    "No? Okay, I'll just cry in a corner now. 😭😂",
    "Saying no just makes me want to convince you more! 😉",
  ];

  const getCurrentBackgroundImage = () => {
    const current = backgroundOptions[adventureScene];
    return { backgroundImage: `url(${current.value})`, transition: "background-image 1s ease-in-out" };
  };

  const getCurrentDateIdea = () => dateIdeas[adventureScene % dateIdeas.length];

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen w-screen transition-all duration-1000 ${
        yesPressed ? "bg-cover bg-center bg-no-repeat" : "bg-gradient-to-r from-pink-500 via-red-400 to-pink-500"
      }`}
      style={yesPressed ? getCurrentBackgroundImage() : {}}
    >
      {/* Floating Hearts - Hydration Safe */}
      <AnimatePresence>
        {floatingHearts.map((heart) => (
          <motion.span
            key={heart.id}
            className="absolute text-3xl text-red-500"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: [50, 0, -50], x: [0, 10, -10] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            style={{ left: heart.left, top: heart.top }}
          >
            ❤️
          </motion.span>
        ))}
      </AnimatePresence>

      {yesPressed ? (
        <motion.div
          className="text-center p-8 bg-transparent bg-opacity-80 rounded-xl backdrop-blur-sm max-w-md shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl font-bold mb-4 text-pink-600">Yay! Adventures & chocolate await us! ❤️🍫</h1>
          <p className="text-xl mb-6 font-bold text-green-500">{getCurrentDateIdea()}</p>
          <motion.button
            className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-bold transition-all"
            onClick={() => setAdventureScene((prev) => (prev + 1) % backgroundOptions.length)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Next Adventure 💕
          </motion.button>
        </motion.div>
      ) : (
        <div className="text-center p-8 bg-white rounded-xl shadow-xl max-w-md">
          <motion.h1 className="text-5xl font-bold mb-4 text-pink-600">Hey Prakruti! 💕</motion.h1>
          <h3 className="text-4xl font-bold mb-2 text-pink-600">
            Be Mine or I&apos;ll just keep trying until you say yes. 😘
          </h3>

          <p className="text-xl mb-8 text-gray-700">
            I promise chocolates, cozy road trips, and maybe even trying kale. 😉
          </p>

          <div className="flex items-center justify-center gap-4 mt-10">
            <motion.button
              className="w-48 h-20 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-lg text-xl font-bold transition-all"
              onClick={() => setYesPressed(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Yes! But I want extra chocolates 🍫😜
            </motion.button>

            <motion.button
              className="w-48 h-20 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white rounded-lg text-xl font-bold transition-all"
              onClick={handleNoClick}
              animate={{ x: position.x, y: position.y }}
              transition={{ type: "spring", stiffness: 150, damping: 8 }}
              style={{ position: noCount > 0 ? "absolute" : "static" }}
            >
              {phrases[Math.min(noCount, phrases.length - 1)]}
            </motion.button>
          </div>
        </div>
      )}
    </div>
  );
}
