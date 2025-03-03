"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Valentine() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [adventureScene, setAdventureScene] = useState(0);
  const [userName, setUserName] = useState("Beautiful");

  // Cycle through adventure backgrounds
  useEffect(() => {
    if (yesPressed) {
      const interval = setInterval(() => {
        setAdventureScene((prev) => (prev + 1) % 4);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [yesPressed]);

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    // Move button to random position
    setPosition({
      x: Math.random() * 500 - 250,
      y: Math.random() * 500 - 250,
    });
  };

  const handleYesClick = () => {
    setYesPressed(true);
  };

  const phrases = [
    "No",
    "Are you sure?",
    "Think of the beach trips!",
    "We could hike mountains together!",
    "Adventure awaits us!",
    "Don't you like adventures?",
    "I promise exciting trips!",
    "Beaches. You. Me. Think about it!",
    "Mountains are calling us!",
    "I'll bring snacks for the hike!",
    "We can watch sunsets at the beach!",
    "I'll carry your backpack!",
    "I know the best spots!",
    "Star-gazing on mountain tops?",
    "Beach bonfires?",
    "I'm running out of adventure ideas 😢",
  ];

  const adventureBackgrounds = [
    "bg-gradient-to-r from-blue-400 to-cyan-300", // Beach
    "bg-gradient-to-r from-green-500 to-emerald-700", // Mountain
    "bg-gradient-to-r from-orange-400 to-amber-500", // Sunset
    "bg-gradient-to-r from-indigo-500 to-purple-600", // Night sky
  ];

  const adventureEmojis = ["🏖️", "⛰️", "🌅", "✨"];
  const adventureNames = ["Beach Day", "Mountain Hike", "Sunset View", "Stargazing"];

  const getRandomAdventureIdea = () => {
    const ideas = [
      "Beach picnic at sunset",
      "Mountain hiking trip",
      "Stargazing on a clear night",
      "Road trip to a national park",
      "Kayaking adventure",
      "Camping under the stars",
      "Waterfall hike and swim",
      "Coastal drive with ocean views",
      "Exploring hidden caves",
      "Snorkeling at a coral reef"
    ];
    return ideas[Math.floor(Math.random() * ideas.length)];
  };

  return (
    <div className={`flex flex-col items-center justify-center h-screen transition-all duration-1000 ${yesPressed ? adventureBackgrounds[adventureScene] : "bg-pink-100"}`}>
      {yesPressed ? (
        <div className="text-center p-8 bg-white bg-opacity-80 rounded-xl backdrop-blur-sm max-w-md">
          <motion.h1
            className="text-4xl font-bold mb-4 text-pink-600"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Yay! Adventure awaits us! ❤️
          </motion.h1>

          <motion.p
            className="text-xl mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Our first date idea: <span className="font-bold text-green-500">{getRandomAdventureIdea()}</span>
          </motion.p>

          <motion.div
            className="mt-6 mb-6 text-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="text-9xl mb-4">{adventureEmojis[adventureScene]}</div>
            <div className="text-2xl font-bold">{adventureNames[adventureScene]}</div>
          </motion.div>

          <motion.button
            className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-bold transition-colors"
            onClick={() => setAdventureScene((prev) => (prev + 1) % 4)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Show me another adventure!
          </motion.button>
        </div>
      ) : (
        <div className="text-center p-8 bg-white rounded-xl shadow-xl max-w-md">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-4 text-pink-600">Heyy Prakruti Do you Really Like me?</h1>
            <p className="text-xl mb-8 text-red-500 drop-shadow-lg">
            Let's go on adventures together - beaches, mountains, and everything in between!
            </p>          </motion.div>

          <div className="relative h-48 mb-8">
            <motion.div
              className="absolute"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {adventureEmojis.map((emoji, index) => (
                <motion.div
                  key={index}
                  className="inline-block text-4xl mx-2"
                  initial={{ y: 0 }}
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    duration: 2,
                    delay: index * 0.3,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                >
                  {emoji}
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-10">
            <motion.button
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-colors"
              onClick={handleYesClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Yes, let's adventure together!
            </motion.button>

            <motion.button
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-colors"
              onClick={handleNoClick}
              animate={{ x: position.x, y: position.y }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
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
              The "No" button seems to be running away... like it knows all the adventures we could have! 🏄‍♀️🏔️
            </motion.p>
          )}
        </div>
      )}
    </div>
  );
}