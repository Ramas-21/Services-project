import React from "react";

const page = () => {
  return (
    <section className="mt-8 mb-8">
      <div className="flex flex-1 justify-start items-center flex-col gap-4">
        <h5 className="font-bold text-3xl">About Us</h5>
        <p className="capitalize text-xl text-gray-700">
          Our mission is to deliver exceptional service and unmatched customer
          satisfaction.
        </p>
        <p className="text-center text-md text-gray-500">
          Welcome to your trusted partner for all home service needs. We have
          been dedicated to providing top-notch services to ensure your home
          remains in perfect condition. Our expert team offers a wide range of
          services including plumbing, electrical work, cleaning, and
          maintenance, all delivered with the highest level of professionalism
          and care. We understand that your home is your sanctuary, and we
          strive to treat it with the respect it deserves. With our easy-to-use
          web app, booking services, managing appointments, and communicating
          with our team has never been more convenient. Thank you for choosing
          us we look forward to making your home a better place.
        </p>
        <div className="flex justify-center items-center gap-6 mt-4">
          <img
            className="w-1/5 shadow-lg hover:scale-105 ease-in-out rounded-lg"
            src="https://plus.unsplash.com/premium_photo-1679920025550-75324e59680f?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image1"
          />
          <img
            className="w-1/5 shadow-lg hover:scale-105 ease-in-out rounded-lg"
            src="https://plus.unsplash.com/premium_photo-1661894582681-26c9cf94dbcd?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image2"
          />
          <img
            className="w-1/5 shadow-lg hover:scale-105 ease-in-out rounded-lg"
            src="https://images.unsplash.com/photo-1521207418485-99c705420785?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image3"
          />
          <img
            className="w-1/5 shadow-lg hover:scale-105 ease-in-out rounded-lg"
            src="https://plus.unsplash.com/premium_photo-1661950149025-d14cfbf034e8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image4"
          />
        </div>
      </div>
    </section>
  );
};

export default page;
