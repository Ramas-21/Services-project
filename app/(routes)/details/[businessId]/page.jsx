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

        <div className="grid grid-cols-4 mt-4">
          <div className="col-span-4 md:col-span-3">
            <BusinessDescription business={business}/>
          </div>
          <div className="hidden md:block">
            <SuggestedBusinessList business={business}/>
          </div>
        </div>
      </div>
    )
  );
};

export default BusinessDetails;
