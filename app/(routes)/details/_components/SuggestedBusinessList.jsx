import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { NotebookPen } from "lucide-react";
import Api from "@/app/_services/Api";
import Image from "next/image";
import StarRating from "@/app/_components/StarRating";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import BookingSection from "./BookingSection";

const SuggestedBusinessList = ({ business }) => {
  const [businessList, setBusinessList] = useState([]);

  const getRating = (contactPerson) => {
    if (contactPerson === "John Smith") return 4;
    if (contactPerson === "Dadson Karani") return 3;
    if (contactPerson === "Kenneth masinde") return 2;
    if (contactPerson === "Michael Ndumia") return 2;
    if (contactPerson === "Cleaners Kenya") return 4;
    return 5;
  };

  useEffect(() => {
    business && getBusinessList();
  }, [business]);

  const getBusinessList = () => {
    Api.getBusinessByCategory(business?.category?.name).then((resp) => {
      setBusinessList(resp?.businessLists);
    });
  };

  return (
    <div className="md:pl-10">
      <BookingSection>
        <Button className="flex gap-2 w-full">
          <NotebookPen />
          Book a Service
        </Button>
      </BookingSection>
      <div className="hidden md:block">
        <h2 className="font-bold text-md mt-3 mb-3 ">Similar Services</h2>
        <div>
          {businessList &&
            businessList.map((business, index) => (
              <Link
                href={"/details/" + business.id}
                className="flex gap-2 mb-4 hover:border rounded-lg p-2 border-primary cursor-pointer hover:shadow-md"
              >
                <Image
                  src={business?.images[0].url}
                  alt={business.name}
                  width={100}
                  height={50}
                  className="rounded-lg object-cover"
                />
                <div>
                  <h2 className="font-bold">{business.name}</h2>
                  <StarRating rating={getRating(business.contactPerson)} />
                  <h2 className="text-primary">{business.contactPerson}</h2>
                  <h2 className="text-gray-500">{business.address}</h2>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SuggestedBusinessList;
