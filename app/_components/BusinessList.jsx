import Image from "next/image";
import React from "react";

const BusinessList = ({ businessList }) => {
  return (
    <div className="mt-5">
      <h2 className="font-bold text-[15px]">Popular Service Providers</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
        {businessList.map((business, index) => (
          <div key={index} className="shadow-md rounded-lg">
            <Image
              src={business?.images[0].url}
              alt={business.name}
              width={500}
              height={200}
              className="h-[120px] md:h-[200px] object-cover rounded-lg"
            />
            <div className="flex flex-col items-baseline p-2">
                <h2 className="p-1 bg-blue-100 text-primary rounded-full px-2 text-[12px]">{business.category.name}</h2>
                <h2 className="text-[14px]">{business.contactPerson}</h2>
                <h2 className="text-gray-400 text-sm">{business.address}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessList;