import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { authkey } from "../Login/authkey";
import { updateTeamDeposit } from "../../store/slice";
import { updateTeamWithdraw } from "../../store/slice";
import { Calendar } from "react-multi-date-picker";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const DepositAndWithdrawal = () => {
  const [showCalender, setShowCalender] = useState(false);
  const dispatch = useDispatch();
  var teamDeposit = new FormData();

  teamDeposit.append("team", "");
  teamDeposit.append("auth", authkey);
  teamDeposit.append("logged", localStorage.getItem("auth"));

  const [transactionFilter, setTransactionFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const todaysdate = new Date();
  var yesterday = new Date();
  var pastweek = new Date();
  yesterday.setDate(todaysdate.getDate() - 1);
  pastweek.setDate(todaysdate.getDate() - 6);
  const formatYmd = (date) => date.toISOString().slice(0, 10);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const dateFilterChange = (e) => {
    const { value } = e.target;
    if (value === "today") {
      setShowCalender(false);
      setStartDate(formatYmd(todaysdate));
      setEndDate(formatYmd(todaysdate));
    }
    if (value === "yesterday") {
      setShowCalender(false);
      setStartDate(formatYmd(yesterday));
      setEndDate(formatYmd(yesterday));
    }
    if (value === "pastweek") {
      setShowCalender(false);
      setStartDate(formatYmd(pastweek));
      setEndDate(formatYmd(todaysdate));
    }
    if (value === "custom") {
      setStartDate(null);
      setEndDate(null);
      setShowCalender(true);
    }
  };
  if (startDate === "") {
    teamDeposit.append("startDate", "2022-04-04");
    teamDeposit.append("endDate", "2022-06-06");
  } else {
    teamDeposit.append("startDate", startDate);
    teamDeposit.append("endDate", endDate);
  }
  if (showCalender && startDate != null && endDate == null) {
    console.log("waiting for end date");
  }
  if (showCalender && startDate != null && endDate != null) {
    teamDeposit.append("startDate", formatYmd(startDate));
    teamDeposit.append("endDate", formatYmd(endDate));
  }

  useEffect(() => {
    fetch("https://mining-nfts.com/api/", {
      method: "POST",
      body: teamDeposit,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 200) {
          if (data.message.deposit != null) {
            dispatch(updateTeamDeposit(data.message.deposit));
            dispatch(updateTeamWithdraw(data.message.withdraw));
          } else {
            dispatch(updateTeamDeposit([]));
            dispatch(updateTeamWithdraw([]));
          }
        }
      });
  }, [endDate]);

  const teamDepositData = useSelector((state) => state.deposit.deposit);
  const teamWithdrawData = useSelector((state) => state.withdraw.withdraw);
  const onChange = (dates) => {
    const [start, end] = dates;

    setStartDate(start);
    setEndDate(end);
  };
  return (
    <div className="container max-w-[1080px] mx-auto p-5">
      <div className="bg-base-200 p-5 rounded-xl mb-5 flex items-center justify-between">
        <Link to="/profile">
          <IoIosArrowBack></IoIosArrowBack>
        </Link>
        <h1 className="text-xl font-bold text-center">Team Report</h1>
      </div>
      <div className="flex justify-between max-w-[600px] md:mx-auto">
        <div className="flex flex-col items-center">
          <Link to="/team-report/agent">Agent Report</Link>
          <div className="h-[2px] w-6 bg-primary"></div>
        </div>
        <div className="flex flex-col items-center">
          <Link to="/deposit-withdraw">Deposit and withdrawal details</Link>
          <div className="h-[2px] w-6 bg-primary"></div>
        </div>
      </div>
      <div className="flex justify-between my-10">
        <select
          class="select select-secondary select-bordered w-[150px] max-w-xs"
          onChange={dateFilterChange}
        >
          <option value="today" defaultValue selected>
            Today
          </option>
          <option value="yesterday">Yesterday</option>
          <option value="pastweek">Within a week</option>
          <option value="custom">Start from 2022/07/12</option>
        </select>

        {/* <select className="select select-secondary select-bordered w-[150px] max-w-xs">
          <option defaultValue selected>
            All
          </option>
          <option>Deposit history</option>
          <option>Withdrawal history</option>
        </select> */}
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {showCalender && (
            <DatePicker
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              inline
            />
          )}
          <select
            class="select select-secondary select-bordered w-[150px] max-w-xs"
            onChange={(e) => setTransactionFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="deposit">Deposit history</option>
            <option value="withdraw">Withdrawal history</option>
          </select>

          {teamWithdrawData.length === 0 ? (
            <div class="text-center">
              <svg
                role="status"
                class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span>No data is availabe</span>
            </div>
          ) : null}
        </table>
        <div class="overflow-x-auto">
          <table class="table table-zebra w-full">
            <thead>
              <tr>
                <th>Account</th>
                <th>Time</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {(transactionFilter == "all") | (transactionFilter == "deposit")
                ? teamDepositData.map((item, index) => (
                    <tr key={index}>
                      <th>{item.order_description}</th>
                      <th>{item.updated_at}</th>
                      <th>{item.price_amount}</th>
                      <th>
                        <span
                          className={
                            item.payment_status == "waiting"
                              ? "bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900"
                              : (item.payment_status == "confirmed") |
                                "sending" |
                                "confirming"
                              ? "bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
                              : item.payment_status == "finished"
                              ? "bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900"
                              : item.payment_status == "failed"
                              ? "bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900"
                              : "bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                          }
                        >
                          {item.payment_status}
                        </span>
                      </th>
                    </tr>
                  ))
                : null}
              {(transactionFilter == "all") | (transactionFilter == "withdraw")
                ? teamWithdrawData.map((item, index) => (
                    <tr key={index}>
                      <th>{item.username}</th>
                      <th>{item.date}</th>
                      <th>{item.amount}</th>
                      <th>
                        <span
                          className={
                            item.status == "pending"
                              ? "bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900"
                              : item.status == "process"
                              ? "bg-green-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-900"
                              : item.status == "paid"
                              ? "bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900"
                              : item.status == "cancled"
                              ? "bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900"
                              : "bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                          }
                        >
                          {item.status}
                        </span>
                      </th>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DepositAndWithdrawal;
