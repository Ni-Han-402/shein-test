import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { Link, useNavigate } from "react-router-dom";
import { authkey } from "../Login/authkey";
import { FaRegCopy } from "react-icons/io";

import "./Deposit.css";

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
        console.log(data);
        if (data.status == 200) {
          console.log(data);
          setDeposits(data);
        } else {
          navigate("/login");
        }
      });
  }, []);





  return (
    <div className="container max-w-[1080px] mx-auto pb-10 ">
      <Link to="/profile" className="btn btn-base-200 m-5">
        Back
      </Link>

      <div className="m-3">
        <div className="card w-100 bg-base-200 text-black shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-base md:text-xl  lg:text-2xl font-bold">
              Tether Payment!
            </h2>
            <h3 className="font-bold">
              <p>
                Minimum Amount: <span>{deposits?.message?.min_amount} </span>
                <span className="text-red-600">

                  {deposits?.message?.currency}
                </span>
              </p>

            </h3>
            <h4 className="font-bold">
              <span>Network: </span>
              <span>{deposits?.message?.network}</span>

            </h4>


            <div class="form-control">
              <label class="input-group ">
                <span className="bg-white px-2 ">Address</span>
                <input id="copy" type="text" style={{ width: deposits?.message?.address.length * 9 + "px" }} value={deposits?.message?.address} class=" input input-bordered bg-white " readOnly />
                <span className="bg-white" onClick={() => {
                  navigator.clipboard.writeText(document.getElementById('copy').value); document.getElementById('htmlCah').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
</svg>`; setTimeout(function () {
                    document.getElementById('htmlCah').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>`;
                  }, 5000);
                }}>
                  <div id='htmlCah'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg></div>
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
      <div></div>

      <div className="m-3">
        <div className="card w-100 bg-base-200 text-black shadow-xl">
          <div className="card-body">
            <h2 className=" card-title  text-xl md:text-xl  lg:text-2xl font-bold">
              Instructions & Notices!
            </h2>
            <p className="text-slate-800">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
              necessitatibus dolor molestiae a accusamus, consequuntur culpa aut
              inventore, eaque quasi perferendis ipsam natus, laudantium
              temporibus commodi doloremque est sed quaerat? Recusandae facere
              tenetur quas beatae! Expedita alias praesentium doloremque
              similique quasi deleniti aliquid mollitia. Ipsam nobis nihil
              eveniet blanditiis hic porro suscipit et quod necessitatibus
              provident? Eaque, qui ex alias nobis dolores eveniet veniam
              voluptatem sint ducimus ea repellat quis, accusamus sed minima
              beatae dolor nihil illo iste. Eos aliquam quidem, tenetur deserunt
              placeat ducimus architecto, iste ut nam, dolore atque quo. Natus
              vitae illum repellat perferendis vero pariatur recusandae?
            </p>
          </div>
        </div>
      </div>

      <section></section>
      <section></section>
    </div>
  );
};

export default Deposit;
