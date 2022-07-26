import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { authkey } from "../Login/authkey";

const DepositeHistory = () => {
  const [dataLimit, setDataLimit] = useState();
  const [dipoHistory, setDipoHistory] = useState([]);
  const navigate = useNavigate();
  let count = 1;

  useEffect(() => {
    var history = new FormData();
    history.append("history", "");
    history.append("deposit_history", "");
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
          setDipoHistory(depoHistoryData?.message);
        } else {
          navigate("/login");
        }
      });
  }, []);

  let a1 = dipoHistory?.slice(0, 50);
  let a2 = dipoHistory?.slice(0, 100);
  let a3 = dipoHistory?.slice(0, 200);
  let a4 = dipoHistory?.slice(0, 300);
  let a5 = dipoHistory?.slice(0, 400);
  let a6 = dipoHistory?.slice(0, 500);

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
        <h1 className="text-xl font-bold text-center">Team Report</h1>
      </div>
      <div className="flex justify-between max-w-[600px] md:mx-auto">
        <div className="flex flex-col items-center">
          <Link to="/withdrawal-history">Withdrawal History </Link>
          <div className="h-[2px] w-6 bg-primary"></div>
        </div>
        <div className="flex flex-col items-center">
          <Link to="/deposit-history">Deposit History</Link>
          <div className="h-[2px] w-6 bg-primary"></div>
        </div>
      </div>
      <div className="flex justify-between my-10">
        <select
          id="dataLimit"
          defaultValue="Select Limit"
          onChange={(e) => setDataLimit(e.target.value)}
          className="select select-secondary select-bordered w-[150px] max-w-xs"
        >
          
          <option value={1}>50</option>
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
          <table className="text-center table table-compact w-full">
            <thead>
              <tr>
                <th></th>
                <th>Account</th>
                <th>Time</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            {d?.map((p) => (
              <tbody key={p?.id}>
                <tr className="text-center">
                  <th>{count++}</th>
                  <td>{p?.id}</td>
                  <td>{p?.date}</td>
                  <td>{p?.price_amount}</td>

                  <td>
                    <div className="text-center ">
                      {p?.payment_status == "finished" ? (
                        <span className=" font-bold ml-2 rounded-lg badge badge-success gap-2">
                          Proceed
                        </span>
                      ) : (
                        <></>
                      )}

                      {p?.payment_status == "waiting" ? (
                        <span className="font-bold  ml-2 rounded-lg badge badge-warning gap-2">
                          Waiting Payment
                        </span>
                      ) : (
                        <></>
                      )}
                      {p?.payment_status == "confirmed" ? (
                        <span className=" font-bold ml-2 rounded-lg badge badge-primary gap-2">
                          Being Proceed
                        </span>
                      ) : (
                        <></>
                      )}
                      {p?.payment_status == "sending" ? (
                        <span className=" font-bold ml-2 rounded-lg badge badge-primary gap-2">
                          Being Proceed
                        </span>
                      ) : (
                        <></>
                      )}
                      {p?.payment_status == "confirming" ? (
                        <span className=" font-bold  ml-2 rounded-lg badge badge-primary gap-2">
                          Being Proceed
                        </span>
                      ) : (
                        <></>
                      )}

                      {p?.payment_status == "failed" ? (
                        <span className=" font-bold ml-2 rounded-lg badge badge-danger gap-2">
                          Failed
                        </span>
                      ) : (
                        <></>
                      )}
                      {p?.payment_status == "" ? (
                        <span className=" font-bold  ml-2 rounded-lg badge badge-secondary gap-2">
                          Status
                        </span>
                      ) : (
                        <></>
                      )}
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default DepositeHistory;
