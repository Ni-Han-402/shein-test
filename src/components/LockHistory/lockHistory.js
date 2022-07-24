import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { updateDashboardMessage } from "../../store/slice";
import { authkey } from "../Login/authkey";
import { AiFillQuestionCircle } from "react-icons/ai";
const LockHistory = () => {
  let count = 1;
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
          dispatch(updateDashboardMessage(data.message));
        }
      });
  }, []);
  const dashboardMessage = useSelector(
    (state) => state.dashboardmessage.message
  );

  return (
    <div className="container max-w-[1080px] mx-auto p-5">
      <div className="bg-base-200 px-4 py-2 rounded-xl   flex items-center justify-between">
        <Link to="/" className="btn btn-base-200 rounded-full">
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
        <h1 className="text-xl font-bold text-center">Stacking History</h1>
      </div>

      <div className="my-5">
        <form
          action=""
          className="flex flex-wrap justify-center items-center gap-2"
        >
          <div className="flex flex-col max-w-[100px]">
            <label
              htmlFor=""
              className="text-xs h-12 flex items-center md:text-sm py-2"
            >
              Staked Amount
            </label>
            <select class="select select-primary w-full h-12 max-w-[100px]">
              <option value={100} selected>
                100 USDT
              </option>
              <option value={250}>250 USDT</option>
              <option value={250}>250 USDT</option>
              <option value={500}>500 USDT</option>
              <option value={1000}>1000 USDT</option>
              <option value={1500}>1500 USDT</option>
              <option value={2500}>2500 USDT</option>
              <option value={5000}>5000 USDT</option>
            </select>
          </div>
          <div className="flex flex-col max-w-[100px]">
            <label
              htmlFor=""
              className="text-xs h-12 flex items-center md:text-sm py-2"
            >
              Days Staked
            </label>
            <select class="select select-primary w-full h-12 max-w-[100px]">
              <option value={7} selected>
                7 Days
              </option>
              <option value={14}>14 Days</option>
              <option value={21}>21 Days</option>
              <option value={28}>28 Days</option>
            </select>
          </div>
          <div className="flex flex-col max-w-[100px]">
            <label
              htmlFor=""
              className="text-xs h-12 flex items-center md:text-sm py-2"
            >
              Total Profit
            </label>
            <input
              disabled
              type="text"
              name=""
              value="12 USDT"
              className="max-w-[100px] text-center border-[1px]  h-12 rounded-sm border-primary"
            />
          </div>
          <div className="flex flex-col max-w-[100px]">
            <label
              htmlFor=""
              className="text-xs h-12 flex items-center md:text-sm py-2"
            >
              <div className="flex items-center">
                Membership Members
                <label
                  for="my-modal-3"
                  class="btn p-0 modal-button bg-transparent border-0 hover:bg-transparent"
                >
                  <AiFillQuestionCircle className="text-xl text-error"></AiFillQuestionCircle>
                </label>
                <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                <div class="modal">
                  <div class="modal-box relative">
                    <label
                      for="my-modal-3"
                      class="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                      ✕
                    </label>
                    <p class="py-4">
                      Depending on the USDT amount and days staked, the amount
                      of members needed to unlock "Platinum Membership" and
                      "Diamond Membership" will be lesser than the default
                      requirement and it will be automatically reflected on the
                      Membership page.
                    </p>
                  </div>
                </div>
              </div>
            </label>
            <input
              disabled
              type="number"
              name=""
              value="0"
              className="max-w-[100px] text-center border-[1px] h-12  rounded-sm border-primary"
            />
          </div>
          <div className="flex flex-col max-w-[100px]">
            <label
              htmlFor=""
              className="text-xs h-12 flex items-center md:text-sm py-2"
            >
              Stake
            </label>
            <label for="my-modal-6" class="btn btn-primary h-12">
              STAKE
            </label>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-middle">
              <div class="modal-box">
                <h3 class="font-bold text-xs md:text-sm">
                  Please check if the below information is correct:
                </h3>
                <div class="py-4">
                  <h1>Amount Staked:</h1>
                  <h1>Days Staked:</h1>
                  <h1>Total Profit:</h1>
                  <h1>Membership Members:</h1>
                </div>
                <div class="modal-action flex justify-center">
                  <label for="my-modal-6" class="btn btn-success">
                    Procced
                  </label>
                  <label for="my-modal-6" class="btn btn-error">
                    Cancel
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-compact text-center  w-full ">
          <thead>
            <tr>
              <th className="text-xs md:text-sm"></th>
              <th className="text-xs md:text-sm">Stacked Amount</th>
              <th className="text-xs md:text-sm">Days Staked</th>

              <th className="text-xs md:text-sm">Total Profit</th>
              <th className="text-xs md:text-sm">Membership Members</th>
              <th className="text-xs md:text-sm">Remaining Time</th>
            </tr>
          </thead>

          <tbody>
            {Object.entries(dashboardMessage).length > 0
              ? dashboardMessage.locked_history.map((item, index) => (
                  <tr>
                    <td>{count++}</td>
                    <td>{item.amount}</td>
                    <td>{item.percent}%</td>
                    <td>{item.counter} days</td>

                    <td>
                      {item?.status == "finished" ? (
                        <span className=" font-bold ml-2 rounded-lg badge badge-success gap-2">
                          Complete
                        </span>
                      ) : (
                        <></>
                      )}
                      {item?.status == "pending" ? (
                        <span className="font-bold  ml-2 rounded-lg badge badge-primary gap-2">
                          Acitve
                        </span>
                      ) : (
                        <></>
                      )}
                    </td>
                    <td>{item.time}</td>
                  </tr>
                ))
              : "Loading"}
          </tbody>
        </table>
      </div>
      <div className="mt-5 p-5 bg-base-200 rounded-sm shadow-lg grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <h1 className="text-center text-xs md:text-sm font-medium">
            Staking Information
          </h1>
          <p className="text-xs md:text-sm mt-2">
            - To be eligible for our Staking System, you must have one of the
            following memberships active:
          </p>

          <p className="text-xs md:text-sm ml-6 mt-3">- Gold Membership</p>
          <p className="text-xs md:text-sm ml-6 mt-3">- Platinum Membership</p>
          <p className="text-xs md:text-sm ml-6 mt-3">- Diamond Membership</p>

          <p className="text-xs md:text-sm mt-5">
            - After the staking period has ended, the staked amount and profit,
            will be automatically added to your account balance.
          </p>
        </div>
        <div>
          <h1 className="text-center text-xs md:text-sm font-medium">
            Staking Rules
          </h1>
          <p className="text-xs md:text-sm mt-2">
            - You cannot unstake before your staking period has been fully
            completed.
          </p>
          <p className="text-xs md:text-sm mt-2">
            - You cannot unstake before your staking period has been fully
            completed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LockHistory;
