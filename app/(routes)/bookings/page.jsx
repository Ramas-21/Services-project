import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookingList from "./_components/BookingList";

const userBookings = () => {
  return (
    <div className="my-10 mx-5 md:mx-36">
        <h2 className="font-bold text-[18px] my-2">My Booked Services</h2>
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="booked">Booked</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="booked">
          <BookingList/>
        </TabsContent>
        <TabsContent value="completed">

        </TabsContent>
      </Tabs>
    </div>
  );
};

export default userBookings;