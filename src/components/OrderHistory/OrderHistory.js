import React from "react";
import { Link } from "react-router-dom";
import Navber from "../Navber/Navber";
import "./OrderHistory.css";
import { IoIosArrowBack } from "react-icons/io";

const OrderHistory = () => {
  return (
    <div className="container max-w-[1080px] mx-auto p-5">
      <div className="bg-base-200 p-5 rounded-xl mb-5 flex items-center justify-between">
        <Link to="/profile">
          <IoIosArrowBack></IoIosArrowBack>
        </Link>
        <h1 className="text-xl font-bold text-center">Order History</h1>
      </div>
      <div className="  my-24 ">
        <div className="container mx-auto max-w-[1080]">
         

          <section className=" mx-5">
            <div className="flex justify-between max-w-[600px] md:mx-auto">
              <div className="flex flex-col items-center">
                <Link to="/grab-history">Grab History</Link>
                <div className="h-[2px] w-6 bg-primary"></div>
              </div>
              <div className="flex flex-col items-center">
                <Link to="/earn-history">Earn History</Link>
                <div className="h-[2px] w-6 bg-primary"></div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="OrderHistoryFooter">
        <Navber></Navber>
      </div>
    </div>
  );
};

export default OrderHistory;
