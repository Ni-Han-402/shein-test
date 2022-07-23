import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import { authkey } from "../Login/authkey";
import { updateSummary } from "../../store/slice";
import { updateUser } from "../../store/slice";

const Summary = () => {
  const dispatch = useDispatch();
  var dashboard = new FormData();

  dashboard.append("dashboard", "");
  dashboard.append("auth", authkey);
  dashboard.append("logged", localStorage.getItem("auth"));
  useEffect(() => {
    fetch("https://mining-nfts.com/api/", {
      method: "POST",
      body: dashboard,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 200) {
          dispatch(updateSummary(data.message.pack));
          dispatch(updateUser(data.message.user));
        }
      });
  }, []);
  const summary = useSelector((state) => state.summary.data);
  const user = useSelector((state) => state.user.data);


  return (
    <div className="container max-w-[1080px] mx-auto p-5">
      <div className="bg-base-200 p-5 rounded-xl mb-5 flex items-center justify-between">
        <Link to="/profile">
          <IoIosArrowBack></IoIosArrowBack>
        </Link>
        <h1 className="text-xl font-bold text-center">RANK</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        {summary.map((card) =>
          card.id <= user[0].packid ? (
            <div className="card bg-base-200 shadow-xl h-20 ">
              <div className="card-body">
                <div className="flex justify-between">
                  <h1 className="">{card.packName} </h1>

                  <div className="   flex items-center gap-3">
                    <span className="flex"> Completed </span>
                    <FaCheckCircle className="text-green-400" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <div className="flex justify-between">
                  <h1>{card.packName}</h1>

                  <AiOutlineArrowRight></AiOutlineArrowRight>
                </div>

                <div className="flex justify-between">
                  <h1>Commission rate </h1>
                  <h1>{card.commission_percent / 10}</h1>
                </div>
                <div className="flex justify-between">
                  <h1>Open markets</h1>
                  <h1>{card.marketName}</h1>
                </div>
                <div className="flex justify-between">
                  <h1>Minimum balance</h1>
                  <h1>{card.balanceRequire}</h1>
                </div>
                <div className="flex justify-between">
                  <h1>Acitve members</h1>
                  <h1>{card.activeRequire}</h1>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Summary;
