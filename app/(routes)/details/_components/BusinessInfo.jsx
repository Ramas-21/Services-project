import { Button } from "@/components/ui/button";
import { Clock, Mail, MapPin, User } from "lucide-react";
import Image from "next/image";
import React from "react";

const BusinessInfo = ({ business }) => {
  return (
    business?.name && (
      <div className="flex gap-4 items-center">
        <Image
          src={business?.images[0]?.url}
          alt={business.name}
          width={80}
          height={160}
          className="rounded-full h-[80px] object-cover"
        />
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col items-baseline gap-2">
            <h2 className="bg-green-400 rounded-full p-1 px-3 text-md text-white">
              {business?.category?.name}
            </h2>
            <h2 className="flex gap-2 text-sm text-gray-500">
              <MapPin /> {business.address}
            </h2>
            <h2 className="flex gap-2 text-sm text-gray-500">
              <Mail /> {business.email}
            </h2>
          </div>
          <div className="flex flex-col gap-5 items-end">
            <h2 className="flex gap-2 text-md"><User/> {business.contactPerson}</h2>
            <h2 className="flex gap-2 text-sm text-gray-500"><Clock/> Available 8:00AM to 8:00PM</h2>
          </div>
        </div>
      </div>
    )
  );
};

export default BusinessInfo;
