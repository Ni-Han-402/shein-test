import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { Link, useNavigate } from "react-router-dom";
import { authkey } from "../Login/authkey";
import "./Deposit.css";

const Deposit = () => {
  const [deposits, setDeposits] = useState();
  const [value, setValue] = useState('');
  const [copy, setCopy] = useState(false)
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



  // setTimeout(function () {
  //     copyText.classList.remove("active");
  // }, 2500);




  return (
    <div className="container max-w-[1080px] mx-auto pb-10 ">
      <Link to="/profile" className="btn btn-base-200 m-5">
        Back
      </Link>

      <div className="m-3">
        <div className="card w-100 bg-base-200 text-black shadow-xl">
          <div className="card-body">

            <h3 className="font-bold">
              <p>
                Minimum Amount: <span> {deposits?.message?.min_amount}

                  <> </> {deposits?.message?.currency}

                </span>
              </p>

            </h3>
            <h4 className="font-bold">
              <span>Network: </span>
              <span className="uppercase">{deposits?.message?.network}</span>
            </h4>

            <div className="form-control">
              <label className="input-group ">
                <span className="bg-white px-1 ">Address</span>
                <input id="copy" type="text" style={{ width: deposits?.message?.address.length * 9 + "px" }} value={deposits?.message?.address} className=" input input-bordered bg-white " readOnly />
                <span className="bg-white" onClick={() => {
                  navigator.clipboard.writeText(document.getElementById('copy').value); document.getElementById('htmlCah').innerHTML = `Copied`;
                  setTimeout(function () {
                    document.getElementById('htmlCah').innerHTML = `Copy`;
                  }, 5000);
                }}>
                  <div id='htmlCah'>Copy</div>
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
            </div>
          </div>
        </div>
      </div>




    </div>
  );
};

export default Deposit;
