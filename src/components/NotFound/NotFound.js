import React from "react";
import notFound from "../../images/n1.gif";
import notFound1 from "../../images/n6.gif";
import { Roll } from "react-reveal";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (

    <div className=" max-w-[1080px]  mx-auto mt-10 lg:mt-52 ">

      <div className="rounded-lg grid gap-4 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 shadow-lg px-5 py-6">

        <div className=" flex justify-center my-3 items-center ">
          <img className=" rounded shadow-lg" src={notFound} alt="" />
        </div>

        <div className=" px-4  text-center ml-4">
          <div className="flex justify-center">
            <img src={notFound1} alt="" className=" my-3 h-50 w-50 rounded" />
          </div>

          <Roll top> <h2 className="my-2   font-bold text-4xl ">404! SERVER ERROR! </h2></Roll>
          <Roll bottom> <p className="mt-3  text-xl">
            This page could not be found.</p> </Roll>
          <Link to="/"> <button className="font-bold my-5 btn border-0 rounded   bg-indigo-900">Return To Home</button></Link>
        </div>
      </div>

    </div>
  );
};

export default NotFound;
