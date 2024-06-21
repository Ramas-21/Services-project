import React, { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetDescription,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import Api from "@/app/_services/Api";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

const BookingSection = ({ children, business }) => {
  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState([]);
  const [selectedTime, setSelectedTime] = useState();
  const [bookedTime, setBookedTime] = useState();
  const {data} = useSession();

  useEffect(() => {
    getTime();
  }, []);

  useEffect(()=>{
    date&&AlreadyBooked();
  },[date])

  const AlreadyBooked = () => {
    Api.DisabledTime(business.id, date)
    .then(resp=>{
      console.log(resp)
      setBookedTime(resp.bookings)
    })
  }
  const getTime = () => {
    const timeList = [];
    for (let i = 8; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
    }
    for (let i = 1; i <= 8; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
    }
    setTimeSlot(timeList);
  };

  const saveBooking = () => {
    Api.createYourBooking(business.id, date, selectedTime, data.user.email, data.user.name)
    .then(resp=>{
      console.log(resp)
      if(resp)
        {
          setDate();
          setSelectedTime('');
          toast('Service Booked Successfully')
        }
    },(e)=>{
      toast('An Error Occurred please try again')
    })
  }

  const isSlotBooked = (time) => {
    return bookedTime.find(item=>item.time==time)
  }

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent className="overflow-auto">
          <SheetHeader>
            <SheetTitle>Book a Service.</SheetTitle>
            <SheetDescription>
              Select your preferred or Appropriate Date and time to book a
              Service.
              <div className="flex flex-col gap-5 items-baseline">
                <h2 className="mt-5 font-bold">Select Date</h2>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                <h2 className="my-5 font-bold">Select Time</h2>
                {timeSlot.map((item, index) => (
                  <Button key={index} disabled={isSlotBooked(item.time)} variant="outline" className={`border rounded-full p-2 px-2 mt-5 hover:bg-primary hover:text-white ${selectedTime===item.time&&'bg-primary text-white'}`} onClick={()=>setSelectedTime(item.time)}>
                    {item.time}
                  </Button>
                ))}
              </div>
            </SheetDescription>
          </SheetHeader>
          <SheetFooter className="mt-5">
              <SheetClose asChild>
                <div className="flex gap-5">
                    <Button>Cancel</Button>
                    <Button disabled={!(selectedTime&&date)} onClick={()=>saveBooking()}>Book</Button>
                </div>
              </SheetClose>
            </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default BookingSection;
