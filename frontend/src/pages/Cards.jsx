import React, { useState } from "react";
import { motion } from "framer-motion";

const dummyData = [
  { id: 1, title: "Beautiful Sunset", description: "A breathtaking view of the sunset over the mountains.", image: "https://source.unsplash.com/400x300/?sunset,mountain" },
  { id: 2, title: "City Lights", description: "A vibrant city skyline illuminated at night.", image: "https://source.unsplash.com/400x300/?city,night" },
  { id: 3, title: "Serene Beach", description: "Golden sands and crystal clear water under a blue sky.", image: "https://source.unsplash.com/400x300/?beach,ocean" },
  { id: 4, title: "Snowy Mountains", description: "Majestic snow-capped mountains during winter.", image: "https://source.unsplash.com/400x300/?snow,mountain" },
  { id: 5, title: "Forest Trail", description: "A peaceful trail through a dense forest.", image: "https://source.unsplash.com/400x300/?forest,trail" },
  { id: 6, title: "Desert Dunes", description: "Golden dunes under the scorching sun.", image: "https://source.unsplash.com/400x300/?desert,sand" },
  { id: 7, title: "Waterfall Bliss", description: "A beautiful waterfall cascading down rocks.", image: "https://source.unsplash.com/400x300/?waterfall,river" },
  { id: 8, title: "Starry Night", description: "A mesmerizing view of the night sky filled with stars.", image: "https://source.unsplash.com/400x300/?stars,night" },
  { id: 9, title: "Autumn Leaves", description: "Colorful fall leaves covering the ground.", image: "https://source.unsplash.com/400x300/?autumn,leaves" },
  { id: 10, title: "Lush Garden", description: "A beautifully maintained garden with vibrant flowers.", image: "https://source.unsplash.com/400x300/?garden,flowers" },
  { id: 11, title: "Misty Morning", description: "A foggy morning with dewdrops on grass.", image: "https://source.unsplash.com/400x300/?mist,morning" },
  { id: 12, title: "Glacier Peaks", description: "Massive glaciers with crystal blue ice.", image: "https://source.unsplash.com/400x300/?glacier,mountain" },
  { id: 13, title: "Tropical Paradise", description: "An exotic island with palm trees and clear water.", image: "https://source.unsplash.com/400x300/?island,tropical" },
  { id: 14, title: "Countryside Bliss", description: "A peaceful countryside with rolling hills.", image: "https://source.unsplash.com/400x300/?countryside,hills" },
  { id: 15, title: "Cave Exploration", description: "Mysterious caves with glowing lights.", image: "https://source.unsplash.com/400x300/?cave,explore" },
];

const Card = ({ title, description, image }) => {
  return (
    <motion.div 
      className="bg-gray-300 shadow-lg rounded-lg overflow-hidden" 
      whileHover={{ scale: 1.05 }} 
      whileTap={{ scale: 0.95 }}
    >
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">View More</button>
      </div>
    </motion.div>
  );
};

const CardDisplayPage = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCards = showAll ? dummyData : dummyData.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-700 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-white">Image Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visibleCards.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
      {!showAll && (
        <div className="text-center mt-6">
          <button 
            onClick={() => setShowAll(true)} 
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default CardDisplayPage;