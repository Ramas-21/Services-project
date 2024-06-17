import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { NotebookPen } from "lucide-react";
import Api from "@/app/_services/Api";
import Image from "next/image";

const SuggestedBusinessList = ({ business }) => {
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    business && getBusinessList();
  }, [business]);

  const getBusinessList = () => {
    Api.getBusinessByCategory(business?.category?.name).then((resp) => {
      setBusinessList(resp?.businessLists);
    });
  };

  return (
    <div className="pl-10">
      <Button className="flex gap-2 w-full">
        <NotebookPen />
        Book Appointment
      </Button>
      <h2 className="font-bold text-md mt-3 mb-3">Similar Services</h2>
      <div>
        {businessList &&
          businessList.map((business, index) => (
            <div className="flex gap-2 mb-4 hover:border rounded-lg p-2 border-primary cursor-pointer hover:shadow-md">
              <Image
                src={business?.images[0].url}
                alt={business.name}
                width={100}
                height={50}
                className="rounded-lg object-cover"
              />
              <div>
                <h2 className="font-bold">{business.name}</h2>
                <h2 className="text-primary">{business.contactPerson}</h2>
                <h2 className="text-gray-500">{business.address}</h2>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SuggestedBusinessList;
