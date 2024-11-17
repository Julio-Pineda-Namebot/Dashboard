import React, { useState } from 'react';

const images = [
  'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/02/30-mejores-heroes-ultimos-30-anos-2243371.jpg?tf=3840x',
  'https://image.api.playstation.com/vulcan/ap/rnd/202404/0814/43fc59eaba549464854849b056487fa1bf6d3d8dd9445111.png',
  'https://assetsio.gnwcdn.com/eurogamer-zjp1vx.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp',
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-64 mx-auto overflow-hidden rounded-lg shadow-lg">
      {/* Images */}
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-muted p-2 rounded-full shadow-lg hover:bg-muted-light"
      >
        &larr;
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-muted p-2 rounded-full shadow-lg hover:bg-muted-light"
      >
        &rarr;
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-primary' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
      
    </div>
  );
};

export default Carousel;
