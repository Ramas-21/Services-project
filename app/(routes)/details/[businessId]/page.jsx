"use client";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import Api from "@/app/_services/Api";

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

  return status == "authenticated" && 
  <div>
    BusinessDetails
  </div>;
};

export default BusinessDetails;
