import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { authkey } from "../Login/authkey";
const Message = () => {
  const [messageLimit, setMessageLimit] = useState();
  const [message, setMessage] = useState([]);

  useEffect(() => {
    var allHistory = new FormData();
    allHistory.append("auth", authkey);
    allHistory.append("logged", localStorage.getItem("auth"));
    allHistory.append("history", "");
    allHistory.append("limit", 500);

    fetch("https://mining-nfts.com/api/", {
      method: "POST",
      body: allHistory,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.status == 200) {
          console.log(data.message);
          setMessage(data?.message);
        } else {
          console.log(data);
        }
      });
  }, []);

  let a1 = message?.slice(0, 50);
  let a2 = message?.slice(0, 100);
  let a3 = message?.slice(0, 200);
  let a4 = message?.slice(0, 300);
  let a5 = message?.slice(0, 400);
  let a6 = message?.slice(0, 500);
  let a7 = message;

  let d = a1;
 

  if (messageLimit == 1) {
    d = a1;
  } else if (messageLimit == 2) {
    d = a2;
  } else if (messageLimit == 3) {
    d = a3;
  } else if (messageLimit == 4) {
    d = a4;
  } else if (messageLimit == 5) {
    d = a5;
  } else if (messageLimit == 6) {
    d = a6;
  } else if (messageLimit == 7) {
    d = a7;
  }

  return (
    <div className="container max-w-[1080px] mx-auto p-5">
      <div className="flex justify-between items-center mb-5">
        <Link to="/profile">
          <IoIosArrowBack></IoIosArrowBack>
        </Link>
        <h1>Notification</h1>
        <select
          id="messageLimit"
          onChange={(e) => setMessageLimit(e.target.value)}
          className="select select-secondary select-bordered w-[150px] max-w-xs"
        >
          <option vlaue={7}>All</option>
          <option value={1} defaultValue selected>
            50
          </option>
          <option value={2}>100</option>
          <option value={3}>200</option>
          <option value={4}>300</option>
          <option value={5}>400</option>
          <option value={6}>500</option>
        </select>
      </div>
      <div className="grid grid-cols-1 gap-5">
        {d?.map((m) => (
          <div
            key={m?.id}
            className="card mx-auto bg-base-200 shadow-xl w-full p-5"
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-5 items-center">
                <div className="">
                 
                 
                  <h1>{m?.type}</h1>
                  <div className="max-w-[600px]" id="dataSh"></div>
                  <small
                    className="flex pb-1  pt-1"
                    dangerouslySetInnerHTML={{ __html: atob(m?.message) }}
                  />

                  <small>{m?.date}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Message;
