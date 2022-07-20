import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { authkey } from "../Login/authkey";

const Withdraw = () => {
  let withDrawData = {};
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [divData, setDivData] = useState("");
  const [amountInfo, setAmountInfo] = useState([]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.data);
  var withdraw = new FormData();

  withdraw.append("withdraw", "");
  withdraw.append("auth", authkey);
  withdraw.append("logged", localStorage.getItem("auth"));

  fetch("https://mining-nfts.com/api/", {
    method: "POST",
    body: withdraw,
  })
    .then((res) => res.json())
    .then((wData) => {
      if (wData.status == 200) {
        withDrawData = wData;
      } else {
        navigate("/login");
      }
    });

  let inputAmount, main_balanceW, min_balance, max_balance, fee;

  const checkUserAmount = document.getElementById("checkUserAmount");
  const info = document.getElementById("info");
  const successInfo = document.getElementById("successInfo");

  const handleClick = () => {
    inputAmount = parseFloat(message);
    main_balanceW = parseFloat(user[0]?.main_balance);
    min_balance = parseFloat(withDrawData.message.min);
    max_balance = parseFloat(withDrawData.message.max);
    fee = parseFloat(withDrawData.message.fee);
    let newFee = (fee * inputAmount) / 100;
    setAmountInfo([inputAmount, min_balance, fee, newFee]);

    if (inputAmount) {
      if (inputAmount > main_balanceW) {
        info.style.display = "none";
        checkUserAmount.style.display = "block";
        setDivData("You do not have enough balance");
      } else if (inputAmount < min_balance) {
        info.style.display = "none";
        successInfo.style.display = "none";
        checkUserAmount.style.display = "block";
        setDivData("Minimum withdraw is " + min_balance);
      } else if (inputAmount > max_balance) {
        successInfo.style.display = "none";
        info.style.display = "none";
        checkUserAmount.style.display = "block";
        setDivData("maximum withdraw is " + max_balance);
      } else {
        successInfo.style.display = "none";
        checkUserAmount.style.display = "none";
        info.style.display = "block";
      }
    } else {
      setDivData("Type amount");
      successInfo.style.display = "none";
      info.style.display = "none";
      checkUserAmount.style.display = "block";
    }
  };

  const confirmPassword = () => {
    const checkUserAmount = document.getElementById("checkUserAmount");

    if (user[0]?.secret_key == password) {
      var withdrawSubmit = new FormData();

      withdrawSubmit.append("withdraw", "");
      withdrawSubmit.append("save_request", "");
      withdrawSubmit.append("amount", amountInfo[0]);
      withdrawSubmit.append("auth", authkey);
      withdrawSubmit.append("logged", localStorage.getItem("auth"));

      fetch("https://mining-nfts.com/api/", {
        method: "POST",
        body: withdrawSubmit,
      })
        .then((res) => res.json())
        .then((wsData) => {
          if (wsData.status == 200) {
            checkUserAmount.style.display = "none";
            info.style.display = "none";
            successInfo.style.display = "block";
            setDivData("Withdraw Succesfully Requested");
          } else if (wsData.status == 100) {
            info.style.display = "none";
            successInfo.style.display = "none";
            checkUserAmount.style.display = "block";

            setDivData(wsData.message);
          } else {
            console.log(wsData);
          }
        });
    } else {
      info.style.display = "none";
      successInfo.style.display = "none";
      checkUserAmount.style.display = "block";
      setDivData("Withdraw password is incorrect ");
    }
  };

  return (
    <div className="container max-w-[1080px] mx-auto p-5">
      <div className="bg-base-200 p-5 rounded-xl mb-5 flex items-center justify-between">
        <Link to="/profile">
          <IoIosArrowBack></IoIosArrowBack>
        </Link>
        <h1 className="text-xl font-bold text-center">Withdraw</h1>
      </div>

      <div className="card mx-auto bg-base-200 shadow-xl mt-5">
        <div className="card-body">
          <h1 className="text-center text-xl font-bold">
            Balance{" "}
            <span className="text-xl font-bold text-green-700">
              {user[0]?.main_balance}{" "}
            </span>{" "}
            <span className="text-red-500">USD</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-5 mt-5 justify-center">
            <input
              type="number"
              placeholder="Withdraw Amount"
              className="input input-bordered"
              id="message"
              onChange={handleChange}
            />
            <button onClick={handleClick} className="btn btn-primary">
              Withdraw
            </button>
          </div>

          {/* <!-- display error message  --> */}
          <div>
            <section className="font-bold lg:text-xl md:text-base text-base">
              <div
                style={{ display: "none" }}
                id="checkUserAmount"
                className="text-center "
              >
                <br />
                <h1 className="my-5 flex justify-center  text-red-500">
                  {divData}{" "}
                </h1>
              </div>

              <div
                style={{ display: "none" }}
                id="successInfo"
                className="text-center "
              >
                <br />
                <h1 className="my-5 flex justify-center  text-green-500">
                  {divData}{" "}
                </h1>
              </div>

              <div
                style={{ display: "none" }}
                id="info"
                className="text-center "
              >
                <div className="my-5 d-flex justify-center  bg-white rounded-lg shadow py-5">
                  <h1 className="my-5 d-flex justify-center  text-purple-800 text-xl">
                    Withdrawal Confirmation!{" "}
                  </h1>
                  <h4>
                    <span className="text-green-500">Your New balance : </span>{" "}
                    <span className="text-black-500">
                      {" "}
                      {user[0]?.main_balance - amountInfo[0]}
                    </span>
                  </h4>
                  <h4>
                    <span className="text-green-500">You will get : </span>
                    <span className="text-black-500">
                      {amountInfo[0] - amountInfo[3]}
                    </span>{" "}
                  </h4>
                  <h4>
                    <span className="text-green-500">Fee : </span>
                    <span className="text-black-500"> {amountInfo[3]}</span>
                  </h4>

                  <div className="flex flex-col sm:flex-row gap-5 mt-5 justify-center">
                    <input
                      type="text"
                      placeholder="Withdrawl Password"
                      className="input input-bordered"
                      id="password"
                      onChange={handlePassword}
                    />
                    <button
                      onClick={confirmPassword}
                      className="btn btn-primary "
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
