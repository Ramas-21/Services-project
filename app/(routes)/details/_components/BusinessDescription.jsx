import Image from "next/image";
import React from "react";

const BusinessDescription = ({ business }) => {
  return (
    business?.name && (
      <div>
        <h2 className="font-bold text-[18px]">About</h2>
        <p className="mt-4 text-lg text-gray-600">{business.about}</p>
        <h2 className="font-bold text-[18px] mt-4">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
          {business?.images?.map((item, index) => (
            <Image
              src={item?.url}
              key={index}
              alt="image"
              width={600}
              height={100}
              className="rounded-lg"
            />
          ))}
        </div>
      </div>
    )
  );
};

export default BusinessDescription;
