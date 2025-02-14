'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Button from './ui/Button';
import cardImage1 from '../assets/images/card-image-1.jpg';
import cardImage2 from '../assets/images/card-image-2.jpg';
import cardImage3 from '../assets/images/card-image-3.jpg';

// Dummy data for cards
const cardImages = [cardImage1, cardImage2, cardImage3, cardImage1, cardImage2, cardImage3];
const title = '50+ Best creative website themes & templates';
const description = 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. ';

const CardGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // To stop dragging when left click is released
  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, []);

  //   To track drag movement
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    // To calculate the mouse’s INITIAL position relative to the container
    setStartX(e.pageX - containerRef.current.offsetLeft);
    // To calculate the container’s current scroll position from the leftmost
    setScrollLeft(containerRef.current.scrollLeft);
  };

  // To move the container horizontally based on mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    // To calculate the CURRENT position of the mouse inside the scrollable container
    const x = e.pageX - containerRef.current.offsetLeft;
    // To calculate the distance between the INITIAL mouse position and the CURRENT mouse position and adjusting the scroll speed
    const walk = (x - startX) * 1.5;
    // To update the container’s scroll position based on the drag movement
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    // Card Grid Container
    <div className="relative w-full max-w-[1480px] overflow-hidden px-0 pb-[48px] pt-[24px]">
      {/* Scrollable Container */}
      <div
        ref={containerRef}
        className="scrollbar-hide flex cursor-grab select-none gap-3 overflow-x-auto pb-5 transition-transform duration-300 ease-out active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
      >
        {cardImages.map((cardImage, index) => (
          // Card Container
          <div key={index} className="w-[370px] flex-shrink-0 overflow-hidden rounded-lg shadow-[0px_1px_3px_0px_rgba(166,175,195,0.4)] transition-transform duration-300 ease-out">
            {/* Card Image */}
            <div className="pointer-events-none relative h-[230px] w-[370px]">
              <Image src={cardImage} alt={`card-${index}`} fill className="object-cover" loading="lazy"/>
            </div>
            {/* Card Content */}
            <div className="flex flex-col items-center gap-4 p-[32px] text-center">
              <h1 className="max-w-[300px] text-lg font-bold">{title}</h1>
              <p className='text-secondary-gray'>{description}</p>
              <Button label="View Details" variant={index !== 0 ? 'outlined' : 'default'} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
