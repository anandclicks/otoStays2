import React, { useState } from 'react';


const testimonials = [
  {
    name : "KARTHIK GOEL",
    comment : "Eat, Sleep, Co-game, Co-live, Repeat! Celebrate life with friends, fun, and shared moments. Every day becomes an adventure when we’re in it together. Here's to endless laughter and memories!",
  },
  {
    name : "Meera",
    comment : "Eat, Sleep, Co-game, Co-live, Repeat! It’s not just a routine, it’s a lifestyle of shared passion and joy. Celebrate the little moments and make every day unforgettable together!",
  },
  {
    name : "Aarav",
    comment : "Eat, Sleep, Co-game, Co-live, Repeat! Celebrate life’s joys together—whether it's gaming, living, or laughing. Every shared moment creates lasting memories. Here’s to a cycle of endless fun, friendship, and togetherness!",
  },
  {
    name : "Rohan",
    comment : "Co-gaming and co-living isn’t just a routine; it’s a celebration of friendship and shared passions. With every session, we bond deeper, live louder, and make memories worth repeating!",
  },
  {
    name : "Kavya",
    comment : "Life’s better when you share it with friends—whether gaming, laughing, or just hanging out. Let’s continue this adventure of co-living, co-playing, and creating unforgettable memories together!",
  },
  {
    name : "Devansh",
    comment : "From gaming marathons to shared living, it’s all about celebrating togetherness. Every win, every laugh, every moment becomes richer when it’s experienced with those who matter most.",
  }
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  // Determine number of boxes visible per row based on screen width
  const visibleBoxes = () => {
    if (window.innerWidth < 600) return 1;  // 1 box for small screens
    if (window.innerWidth < 900) return 2;  // 2 boxes for medium screens
    return 3; // Default: 3 boxes for large screens
  };

  const nextSlide = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex + visibleBoxes();
      return newIndex >= testimonials.length ? 0 : newIndex;
    });
  };

  const prevSlide = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex - visibleBoxes();
      return newIndex < 0 ? testimonials.length - visibleBoxes() : newIndex;
    });
  };

  return (
   <div className='feedbackWrapper'>
   <h3 className='feedBakcTitle'>Feedback Or Real Experience 🫶</h3>
    <div className="testimonial-slider">
      <button className="prev" onClick={prevSlide}>←</button>
      <div className="slider-container">
        {testimonials.slice(index, index + visibleBoxes()).map((testimonial, i) => (
          <div className="testimonial-box" key={i}>
           <div className="ratting">
           <img className='quote' src="\Amenties Svg\quote2.png" alt="" />
           <p>⭐⭐⭐⭐⭐</p>
           </div>
            <p className='comment'>{testimonial.comment}</p>
            <div className='nameOFRattingPerson'>
            <p >{testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="next" onClick={nextSlide}>→</button>
    </div>
    </div>
  );
};

export default TestimonialSlider;
