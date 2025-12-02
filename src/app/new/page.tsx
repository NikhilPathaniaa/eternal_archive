'use client';

import { Carousel } from '@/components/Carousel';
import Image from 'next/image';

export default function NewPage() {
  const carouselItems = [
    {
      id: 1,
      content: (
        <div className="w-full h-screen bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Slide 1</h2>
            <p className="text-xl text-blue-100 max-w-2xl">This is a full-screen carousel slide with centered content</p>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="w-full h-screen bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Slide 2</h2>
            <p className="text-xl text-green-100 max-w-2xl">Swipe or use the navigation buttons to move between slides</p>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="w-full h-screen bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Slide 3</h2>
            <p className="text-xl text-purple-100 max-w-2xl">Fully responsive design that works on all devices</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Carousel 
        items={carouselItems} 
        autoSlide={false}
        autoSlideInterval={5000}
      />
    </div>
  );
}