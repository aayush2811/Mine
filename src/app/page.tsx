"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Valentine() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [adventureScene, setAdventureScene] = useState(0);

  const handleNoClick = () => {
    setNoCount((prev) => prev + 1);
    setPosition({
      x: (Math.random() - 0.5) * 500,
      y: (Math.random() - 0.5) * 500,
    });
  };

  const backgroundOptions = [
    { type: "image", value: "https://images.unsplash.com/photo-1518495973542-4542c06a5843", name: "Beach Sunset" },
    { type: "image", value: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d", name: "Lavender Fields" },
    { type: "image", value: "https://images.unsplash.com/photo-1534447677768-be436bb09401", name: "Cherry Blossoms" },
    { type: "image", value: "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8", name: "Starry Sky" },
  ];

  const dateIdeas = [
    "Sunset picnic with your favorite treats and stargazing! 🌅✨",
    "Surprise road trip to a chocolate factory! 🚗🍫",
    "Movie night with all your favorite snacks! 🎬🍿",
    "Beach day with ice cream and walks by the water! 🏖️🍦",
  ];

  const phrases = [
    "Are you *really* saying no? 😳",
    "Think of all the surprise chocolates… 🍫",
    "What if I let you pick the movie *every time*? 🎬",
    "I'll even try kale if you say yes… maybe. 🥗😅",
    "You can have the last slice of pizza… once. 🍕",
    "Imagine the cuddles you're rejecting right now! 🥺💖",
    "Daily compliments included for free! 😘",
    "No? Okay, I'll just cry in a corner now. 😭😂",
    "Saying no just makes me want to convince you more! 😉"
  ];

  const getCurrentBackgroundImage = () => {
    const current = backgroundOptions[adventureScene];
    if (current.type === "image") {
      return { backgroundImage: `url(${current.value})` };
    }
    return {};
  };

  const getCurrentDateIdea = () => {
    return dateIdeas[adventureScene % dateIdeas.length];
  };

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen transition-all duration-1000 ${yesPressed ? "bg-cover bg-center bg-no-repeat" : "bg-gradient-to-r from-pink-500 via-red-400 to-pink-500"}`}
      style={yesPressed ? getCurrentBackgroundImage() : {}}
    >
      {/* Floating Hearts Animation */}
      {[...Array(10)].map((_, i) => (
        <span key={i} className="absolute text-3xl" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, color: "red" }}>
          ❤️
        </span>
      ))}

      {yesPressed ? (
        <div className="text-center p-8 bg-white bg-opacity-80 rounded-xl backdrop-blur-sm max-w-md shadow-lg">
          <motion.h1
            className="text-4xl font-bold mb-4 text-pink-600"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Yay! Adventures & chocolate await us! ❤️🍫
          </motion.h1>

          <motion.p
            className="text-xl mb-6 font-bold text-green-500"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {getCurrentDateIdea()}
          </motion.p>

          <motion.button
            className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-bold transition-all"
            onClick={() => setAdventureScene((prev) => (prev + 1) % backgroundOptions.length)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Click me Plsssssss 💕
          </motion.button>
        </div>
      ) : (
        <div className="text-center p-8 bg-white rounded-xl shadow-xl max-w-md">
          <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
            <h1 className="text-5xl font-bold mb-4 text-pink-600">Hey Prakruti! 💕</h1>
            <h3 className="text-4xl font-bold mb-2 text-pink-600">
              Be Mine or If you say no 😏💖, I&apos;ll just keep trying until you say yes. 😘
            </h3>

            <p className="text-xl mb-8 text-gray-700">
              I promise chocolate surprises, cozy road trips, and maybe… even trying kale for you. 😉
            </p>
          </motion.div>

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
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              style={{ position: noCount > 0 ? "absolute" : "static" }}
            >
              {phrases[Math.min(noCount, phrases.length - 1)]}
            </motion.button>
          </div>

          {noCount > 0 && (
            <motion.p className="mt-12 text-sm text-gray-500" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
              The &quot;No&quot; button is running away… just like I will when you make me eat kale. 🥗😂
            </motion.p>
          )}
        </div>
      )}
    </div>
  );
}
