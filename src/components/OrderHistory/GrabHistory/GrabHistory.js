import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authkey } from "../../Login/authkey";
import OrderHistory from "../OrderHistory";

const GrabHistory = () => {
  const [dataLimit, setDataLimit] = useState();
  const [ghistory, setghistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    var history = new FormData();
    history.append("grabHistory", "");
    history.append("auth", authkey);
    history.append("limit", 500);
    history.append("logged", localStorage.getItem("auth"));

    fetch("https://mining-nfts.com/api/", {
      method: "POST",
      body: history,
    })
      .then((res) => res.json())
      .then((gHistoryData) => {
        if (gHistoryData.status == 200) {
          setghistory(gHistoryData.message);
        } else {
          navigate("/login");
        }
      });
  }, []);

  let a1 = ghistory?.slice(0, 50);
  let a2 = ghistory?.slice(0, 100);
  let a3 = ghistory?.slice(0, 200);
  let a4 = ghistory?.slice(0, 300);
  let a5 = ghistory?.slice(0, 400);
  let a6 = ghistory?.slice(0, 500);
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
    <div>
      <OrderHistory></OrderHistory>
      <div className="container mx-auto max-w-[1080]">
        <div className="flex justify-between my-10 lg:mx-0 md:mx-0 mx-5">
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
        <section className="  container my-10">
          <div className="overflow-x-auto w-full rounded shadow-lg  mb-24 ">
            <table className="table table-compact w-full text-center font-bold mb-16">
              <thead>
                <tr>
                  <th>Id</th>
                  <th> Item </th>
                  <th>Commission</th>
                  <th>Status</th>
                </tr>
              </thead>
              {d?.map((p) => (
                <tbody key={p?.id}>
                  <tr>
                    <td>{p?.id}</td>


                    <td>
                      <div className="flex justify-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-16 h-16">
                            <img src={p?.image} alt="" />
                          </div>
                        </div>
                      </div>
                      <span className="max-w-[200px]">
                        {p?.title} 
                      </span>
                     
                    </td>
                    <td>{p?.commission}</td>

                    <td>
                      <div className="text-center ">
                        {p?.status == "finished" ? (
                          <span class=" font-bold ml-2 rounded-lg badge badge-success gap-2">
                            Proceed
                          </span>
                        ) : (
                          <></>
                        )}
                        {p?.status == "pending" ? (
                          <span class="font-bold  ml-2 rounded-lg badge badge-warning gap-2">
                            Pending
                          </span>
                        ) : (
                          <></>
                        )}
                        {p?.status == "" ? (
                          <span class=" font-bold  ml-2 rounded-lg badge badge-primary  gap-2">
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
        </section>
      </div>
    </div>
  );
};

export default GrabHistory;
