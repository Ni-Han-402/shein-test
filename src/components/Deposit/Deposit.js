import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { Link, useNavigate } from "react-router-dom";
import { authkey } from "../Login/authkey";
import "./Deposit.css";
import usdt from "../../images/usdt.png";

const Deposit = () => {
  const [deposits, setDeposits] = useState();

  const navigate = useNavigate();
  const Completionist = () => <span>Your time ended!</span>;

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };

  var deposit = new FormData();
  deposit.append("auth", authkey);
  deposit.append("logged", localStorage.getItem("auth"));
  deposit.append("deposit", "");
  deposit.append("create", "");
  useEffect(() => {
    fetch("https://mining-nfts.com/api/", {
      method: "POST",
      body: deposit,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 200) {
          setDeposits(data);
        } else {
          navigate("/login");
        }
      });
  }, []);

  return (
    <div className="container max-w-[1080px] mx-auto pb-10 ">
      <div className="bg-base-200 px-4 py-2 rounded-xl my-5 mx-3 flex items-center justify-between">
        <Link to="/profile" className="btn btn-base-200 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-xl font-bold text-center">Deposite</h1>
      </div>

      <div className="m-3">
        <div className="card w-100 bg-base-200 text-black shadow-xl">
          <div className="card-body">
            <h3 className="font-bold">
              <p>
                Minimum Amount:{" "}
                <span>
                  {" "}
                  {deposits?.message?.min_amount}
                  <> </>{" "}
                  <span>
                    {deposits?.message?.currency}{" "}
                    <img
                      className="inline ml-1 h-[20px] w-[20px]"
                      src={usdt}
                      alt=""
                    />
                  </span>
                </span>
              </p>
            </h3>
            <h4 className="font-bold">
              <span>Network: </span>
              <span className="uppercase">{deposits?.message?.network}</span>
            </h4>

            <div className="form-control">
              {/* <div className="bg-white  py-2  rounded ">
                <div className="flex">
                  <input
                    type="email"
                    className="inputt border-0 "
                    placeholder="Your email"
                  />
                  <button className="btn btn-success  mx-1 font-bold">
                    Send <i className="fa-solid fa-paper-plane"></i>
                  </button>
                </div>

              </div> */}
              <label className="input-group ">
                <span className="bg-white px-1 ">Address</span>
                <input
                  className="border-0 bg-white inputt outline-0"
                  id="copy"
                  type="text"
                  style={{
                    width: deposits?.message?.address.length * 9 + "px",
                  }}
                  value={deposits?.message?.address}
                  className=" input input-bordered bg-white "
                  readOnly
                />
                <span
                  className="bg-white"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      document.getElementById("copy").value
                    );
                    document.getElementById("htmlCah").innerHTML = `Copied`;
                    setTimeout(function () {
                      document.getElementById("htmlCah").innerHTML = `Copy`;
                    }, 5000);
                  }}
                >
                  <div id="htmlCah">Copy</div>
                </span>
              </label>
            </div>

            <div>
              <h2 className="font-bold text-base md:text-xl  lg:text-xl">
                <i className="fa-solid fa-clock"></i> Time left to pay :{" "}
                <span className="text-sky-600">
                  {" "}
                  <Countdown date={Date.now() + 3600000} renderer={renderer} />
                </span>{" "}
              </h2>
              <h4 className="my-3">
                Make sure to always cover the Gas Fee or your deposit will not
                be completed.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
