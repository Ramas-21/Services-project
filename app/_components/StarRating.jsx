import Image from "next/image";
import React from "react";

const StarRating = ({ rating }) => {
  const stars = Array(5).fill(0);

  return (
    <div className="flex space-x-1">
      {stars.map((_, index) => (
        <Image
          key={index}
          src="/star.png"
          alt="ratings"
          width={15}
          height={15}
          className={index < rating ? 'opacity-100' : 'opacity-25'}
        />
      ))}
    </div>
  );
};

export default StarRating;
