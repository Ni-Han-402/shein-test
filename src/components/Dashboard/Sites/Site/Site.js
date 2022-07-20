import React, { useState } from "react";

const Site = ({ pack }) => {
  const { grab_order, commission_percent } = pack;

  const Lock = () => {
    if (pack?.message?.user?.vip1_orders == null) {
      return (
        <div className="bg-neutral  my-3 mx-5 rounded-lg shadow-sm">
          <div className="card lg:card-side bg-base-100 opacity-5 shadow-xl rounded-lg  ">
            <div className="card-body bg-neutral text-white">
              <h2 className=" text-2xl card-title">{grab_order}</h2>
              <p className="font-bold">
                {" "}
                Amount: {commission_percent} % per order.
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="bg-neutral  my-3 mx-5 rounded-lg shadow-sm">
          <div className="card lg:card-side bg-base-100 shadow-xl rounded-lg  ">
            <div className="card-body bg-neutral text-white">
              <h2 className=" text-2xl card-title">{grab_order}</h2>
              <p className="font-bold">
                {" "}
                Amount: {commission_percent} % per order.
              </p>
            </div>
          </div>
        </div>
      );
    }
  };

  return <Lock />;
};

export default Site;
