import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { authkey } from "../Login/authkey";

const WithdrawalHistory = () => {
  const [dataLimit, setDataLimit] = useState();
  const [whitdrawHistory, setWhitdrawHistory] = useState([]);
  const navigate = useNavigate();
  let count = 1;

  useEffect(() => {
    var history = new FormData();
    history.append("history", "");
    history.append("withdraw_history", "");
    history.append("limit", 500);
    history.append("auth", authkey);
    history.append("logged", localStorage.getItem("auth"));
    fetch("https://mining-nfts.com/api/", {
      method: "POST",
      body: history,
    })
      .then((res) => res.json())
      .then((depoHistoryData) => {
        if (depoHistoryData.status == 200) {
          setWhitdrawHistory(depoHistoryData?.message);
        } else {
          navigate("/login");
        }
      });
  }, []);

  let a1 = whitdrawHistory?.slice(0, 50);
  let a2 = whitdrawHistory?.slice(0, 100);
  let a3 = whitdrawHistory?.slice(0, 200);
  let a4 = whitdrawHistory?.slice(0, 300);
  let a5 = whitdrawHistory?.slice(0, 400);
  let a6 = whitdrawHistory?.slice(0, 500);

  let d = a1;

  if (dataLimit == 1) {
    d = a1;
  } else if (dataLimit == 2) {
    d = a2;
  } else if (dataLimit == 3) {
    d = a3;
  } else if (dataLimit == 4) {
    d = a4;
  } else if (dataLimit == 5) {
    d = a5;
  } else if (dataLimit == 6) {
    d = a6;
  } else if (dataLimit == 7) {
    d = a6;
  }

  return (
    <div className="container max-w-[1080px] mx-auto p-5">
      <div className="bg-base-200 p-5 rounded-xl mb-5 flex items-center justify-between">
        <Link to="/profile">
          <IoIosArrowBack></IoIosArrowBack>
        </Link>
        <h1 className="text-xl font-bold text-center">Transaction</h1>
      </div>
      <div className="flex justify-between max-w-[600px]  md:mx-auto">
        <div className="flex flex-col items-center">
          <Link to="/withdrawal-history">Withdrawal History</Link>
          <div className="h-[2px] w-6 bg-primary"></div>
        </div>
        <div className="flex flex-col items-center">
          <Link to="/deposit-history">Deposit History </Link>
          <div className="h-[2px] w-6 bg-primary"></div>
        </div>
      </div>
      <div className="flex justify-between my-10">
        <select
          id="dataLimit"
          onChange={(e) => setDataLimit(e.target.value)}
          className="select select-secondary select-bordered w-[150px] max-w-xs"
        >

          <option value={1} defaultValue selected>
            50
          </option>
          <option value={2}>100</option>
          <option value={3}>200</option>
          <option value={4}>300</option>
          <option value={5}>400</option>
          <option value={6}>500</option>
          <option vlaue={7}>All</option>
        </select>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className=" table table-compact w-full text-center font-bold">
            <thead>
              <tr>
                <th></th>
                <th>Account</th>

                <th>Amount</th>
                <th>Status</th>
                <th>Time</th>
              </tr>
            </thead>
            {d?.map((p) => (
              <tbody key={p?.id}>
                <tr>
                  <th>{count++}</th>
                  <td>{p?.number}</td>

                  <td>{p?.amount}</td>

                  <td>
                    <div className="text-center ">
                      {p?.status == "paid" ? (
                        <span className="ml-2 rounded-lg badge badge-success gap-2">
                          Paid
                        </span>
                      ) : (
                        <></>
                      )}
                      {p?.status == "pending" ? (
                        <span className="ml-2 rounded-lg badge badge-warning gap-2">
                          Pending
                        </span>
                      ) : (
                        <></>
                      )}

                      {p?.status == "process" ? (
                        <span className="ml-2 rounded-lg badge badge-primary gap-2">
                          Being Proceed
                        </span>
                      ) : (
                        <></>
                      )}
                      {p?.status == "cancelled" ? (
                        <span className="ml-2 rounded-lg badge badge-danger gap-2">
                          Cancelled
                        </span>
                      ) : (
                        <></>
                      )}
                    </div>
                  </td>
                  <td>{p?.date}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalHistory;
