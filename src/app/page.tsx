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

  // Enhanced background options - mix of gradients and image URLs
  const backgroundOptions = [

    // Image backgrounds - using placeholder URLs that you can replace
    { type: "image", value: "https://images.unsplash.com/photo-1518495973542-4542c06a5843", name: "Beach Sunset" },
    { type: "image", value: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d", name: "Lavender Fields" },
    { type: "image", value: "https://images.unsplash.com/photo-1534447677768-be436bb09401", name: "Cherry Blossoms" },
    { type: "image", value: "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8", name: "Starry Sky" },
    { type: "image", value: "https://images.unsplash.com/photo-1476611317561-60117649dd94", name: "Autumn Park" },
    { type: "image", value: "https://images.unsplash.com/photo-1501785888041-af3ef285b470", name: "Mountain Lake" },
    { type: "image", value: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071", name: "Aurora Lights" },
    { type: "image", value: "https://images.unsplash.com/photo-1530053969600-caed2596d242", name: "Tropical Beach" },
    { type: "image", value: "https://images.unsplash.com/photo-1613336026275-d6d473084e85", name: "Romantic Dinner" },
    { type: "image", value: "https://images.unsplash.com/photo-1551907234-fb773fb08a1b", name: "City Lights" },
  ];

  // Date ideas to cycle through
  const dateIdeas = [
    "I'll pick you up, we grab dark chocolate & debate pizza toppings! 🍕🍫",
    "Sunset picnic with your favorite treats and stargazing afterward! 🌅✨",
    "Cooking challenge: you make salad, I'll make dessert! 🥗🍰",
    "Surprise road trip to a chocolate factory! 🚗🍫",
    "Movie night with all your favorite snacks! 🎬🍿",
    "Beach day with ice cream and walks by the water! 🏖️🍦",
    "Farmers market morning and cooking what we find! 🥕🍳",
    "Hiking adventure followed by a picnic! 🥾🧺",
    "Dancing under the stars with chocolate-covered strawberries! 💃🍓",
    "Art gallery visit followed by dessert tasting! 🖼️🍮"
  ];

  const phrases = [
    "No",
    "Are you sure? 🥺",
    "I promise to pick you up every day! 🚗",
    "But… I'll bring you dark chocolate! 🍫",
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

  // Get current background styles
  const getCurrentBackground = () => {
    const current = backgroundOptions[adventureScene];
    if (current.type === "gradient") {
      return current.value;
    } else {
      return `bg-cover bg-center bg-no-repeat`;
    }
  };

  // Get current background image if applicable
  const getCurrentBackgroundImage = () => {
    const current = backgroundOptions[adventureScene];
    if (current.type === "image") {
      return { backgroundImage: `url(${current.value})` };
    }
    return {};
  };

  // Get current date idea
  const getCurrentDateIdea = () => {
    return dateIdeas[adventureScene % dateIdeas.length];
  };

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen transition-all duration-1000 ${yesPressed ? getCurrentBackground() : "bg-pink-100"}`}
      style={yesPressed ? getCurrentBackgroundImage() : {}}
    >
      {yesPressed ? (
        <div className="text-center p-8 bg-transparent bg-opacity-80 rounded-xl backdrop-blur-sm max-w-md">
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
              className="w-48 h-20 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-lg text-xl font-bold transition-all"
              onClick={() => setYesPressed(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Yes! But I get extra Dark chocolate and Roses 🍫😜
            </motion.button>

            <motion.button
              className="w-48 h-16 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white rounded-lg text-xl font-bold transition-all"
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
              The &quot;No&quot; button is running away… just like I will when you make me eat kale. 🥗😂
            </motion.p>
          )}
        </div>
      )}
    </div>
  );
}