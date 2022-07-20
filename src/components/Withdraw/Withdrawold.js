import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Withdraw = () => {
  return (
    <div className="container max-w-[1080px] mx-auto p-5">
      <div className="bg-base-200 p-5 rounded-xl mb-5 flex items-center justify-between">
        <Link to="/">
          <IoIosArrowBack></IoIosArrowBack>
        </Link>
        <h1 className="text-xl font-bold text-center">Withdraw</h1>
      </div>

      <div className="card mx-auto bg-base-200 shadow-xl mt-5">
        <div className="card-body">
          <h1 className="text-center">
            Balance <span className="text-xl font-bold">50 USD</span>
          </h1>
          <div className="flex gap-5 mt-5 justify-center">
            <input
              type="number"
              placeholder="Withdraw Amount"
              className="input input-bordered"
            />
            <button className="btn btn-primary">Withdraw</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
