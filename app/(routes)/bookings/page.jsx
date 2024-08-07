'use client';
import React, {useEffect, useState} from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookingList from "./_components/BookingList";
import Api from "@/app/_services/Api";
import { useSession } from 'next-auth/react'

const userBookings = () => {
    const {data} = useSession()
    const [userBookings, setUserBookings] = useState([]);

    useEffect(() => {
        data&&GetUserBookings();
    },[data]);

    const GetUserBookings = () => {
        Api.GetUserBookings(data.user.email)
        .then(resp=>{
            console.log(resp)
            setUserBookings(resp.bookings);
        })
    }

    const filterData = (type) => {
      const result = userBookings.filter(item=>
        type=='booked'?
        new Date(item.date)>new Date()
        :new Date(item.date)<new Date())

        return result;
    }

  return (
    <div className="my-10 mx-5 md:mx-36">
        <h2 className="font-bold text-[18px] my-2">My Booked Services</h2>
      <Tabs defaultValue="booked" className="w-full">
        <TabsList className="w-full justify-start bg-green-300">
          <TabsTrigger value="booked">Booked</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="booked">
          <BookingList userBookings={filterData('booked')}/>
        </TabsContent>
        <TabsContent value="completed">
          <BookingList userBookings={filterData('completed')}/>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default userBookings;
