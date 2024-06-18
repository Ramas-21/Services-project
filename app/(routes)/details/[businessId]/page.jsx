"use client";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import Api from "@/app/_services/Api";
import BusinessInfo from "../_components/BusinessInfo";
import SuggestedBusinessList from "../_components/SuggestedBusinessList";
import BusinessDescription from "../_components/BusinessDescription";

const BusinessDetails = ({ params }) => {
  const { data, status } = useSession();
  const [business, setBusiness] = useState([]);

  useEffect(() => {
    params && getbusinessById();
  }, [params]);

  useEffect(() => {
    checkUserAuth();
  }, []);

  const getbusinessById = () => {
    Api.getBusinessById(params.businessId).then((resp) => {
      setBusiness(resp.businessList);
    });
  };

  const checkUserAuth = () => {
    if (status == "loading") {
      return <p>loading..</p>;
    }

    if (status == "unauthenticated") {
      signIn("descope");
    }
  };

  return (
    status == "authenticated" &&
    business && (
      <div className="py-8">
        <BusinessInfo business={business} />

        <div className="grid grid-cols-3 mt-4">
          <div className="col-span-3 md:col-span-2 order-last md:order-first">
            <BusinessDescription business={business}/>
          </div>
          <div className="">
            <SuggestedBusinessList business={business}/>
          </div>
        </div>
      </div>
    )
  );
};

export default BusinessDetails;
