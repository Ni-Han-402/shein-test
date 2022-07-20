import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { updateDashboardMessage } from "../../store/slice";
import { authkey } from "../Login/authkey";
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
  console.log(dashboardMessage);
  return (
    <div className="container max-w-[1080px] mx-auto p-2">
      <div className="bg-base-200 p-5 rounded-xl mb-5 flex items-center justify-between">
        <Link to="/profile">
          <IoIosArrowBack></IoIosArrowBack>
        </Link>
        <h1 className="text-xl font-bold text-center">Contact History</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-compact text-center  w-full ">
          <thead>
            <tr>
              <th></th>
              <th>Amount</th>
              <th>Percentage</th>

              <th>Contract Time</th>
              <th>Status</th>
              <th>Start Date</th>
              <th>End Date</th>
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
                  <td>{item.status}</td>
                  <td>{item.time}</td>
                  <td>{item.endTime}</td>
                </tr>


              ))
              : "Loading"}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default LockHistory;
