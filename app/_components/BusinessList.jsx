import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import StarRating from "./StarRating";

const BusinessList = ({ businessList }) => {

  const getRating = (contactPerson) =>{
    if (contactPerson === 'John Smith') return 4;
    if(contactPerson === 'Dadson Karani') return 3;
    if(contactPerson === 'Kenneth masinde') return 2;
    if(contactPerson === 'Michael Ndumia') return 2;
    return 5; 
  }
  return (
    <div className="mt-5">
      <h2 className="font-bold text-[15px]">Popular Service Providers</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
        {businessList.length>0?businessList.map((business, index) => (
          <div key={index} className="shadow-md rounded-lg hover:shadow-lg hover:shadow-primary cursor-pointer hover:scale-105 transition-all ease-in-out">
            <Image
              src={business?.images[0].url}
              alt={business.name}
              width={500}
              height={200}
              className="h-[120px] md:h-[200px] object-cover rounded-lg"
            />
            <div className="flex flex-col items-baseline p-2 gap-1">
                <h2 className="p-1 bg-blue-100 text-primary rounded-full px-2 text-[12px]">{business.category.name}</h2>
                <StarRating rating={getRating(business.contactPerson)}/>
                <h2 className="text-[14px]">{business.contactPerson}</h2>
                <h2 className="text-gray-400 text-sm">{business.address}</h2>
                <Button className="rounded-lg mt-3">Book Now</Button>
            </div>
          </div>
        ))
        : [1,2,3,4,5,6].map((item, index)=>(
            <div className="w-full h-[300px] bg-slate-200 rounded-lg animate-pulse">

            </div>
        ))
    }
      </div>
    </div>
  );
};

export default BusinessList;
