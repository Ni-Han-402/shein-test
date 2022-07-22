import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { authkey } from "../Login/authkey";
import { updateTeamReports } from "../../store/slice";

const TeamReport = () => {
  const dispatch = useDispatch();
  var teamReport = new FormData();
  teamReport.append("startDate", "2022-04-04");
  teamReport.append("endDate", "2022-06-06");
  teamReport.append("team", "");
  teamReport.append("auth", authkey);
  teamReport.append("logged", localStorage.getItem("auth"));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://mining-nfts.com/api/", {
      method: "POST",
      body: teamReport,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 200) {
          dispatch(updateTeamReports(data.message.reports));
        }
      })
      .then(() => {
        setLoading(false);
      });
  }, []);

  var teamReportData = useSelector((state) => state.reports.reports);


  return (
    <div className="container max-w-[1080px] mx-auto p-5">
      <div className="bg-base-200 p-5 rounded-xl mb-5 flex items-center justify-between">
        <Link to="/profile">
          <IoIosArrowBack></IoIosArrowBack>
        </Link>
        <h1 className="text-xl font-bold text-center">Team Report</h1>
      </div>
      <div className="flex justify-between max-w-[600px]  md:mx-auto">
        <div className="flex flex-col items-center">
          <Link to="/team-report/agent">Team Report</Link>
          <div className="h-[2px] w-6 bg-primary"></div>
        </div>
        <div className="flex flex-col items-center">
          <Link to="/deposit-withdraw">Deposit and withdrawal details</Link>
          <div className="h-[2px] w-6 bg-primary"></div>
        </div>
      </div>
      <div className="flex justify-between my-5">

      </div>

      <div className="card mx-auto bg-base-200 shadow-xl w-full">
        <div className="card-body">
          {loading ? (
            <div className="text-center">
              <svg
                role="status"
                className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
            </div>
          ) : null}
          <div className="card mx-auto bg-base-200 shadow-xl w-full">
            <div className="card-body">
              <div className="flex gap-5 mb-5">
                <div>
                  <h2 className="card-title">Financial Info</h2>
                </div>
              </div>

              <div className="flex justify-between">
                <h1>Balance</h1>
                <h1>{teamReportData.balance}</h1>
              </div>
              <hr />
              <div className="flex justify-between">
                <h1>Deposit amount</h1>
                <h1>{teamReportData.deposit}</h1>
              </div>
              <hr />
              <div className="flex justify-between">
                <h1>Withdrawal amount</h1>
                <h1>{teamReportData.withdraw}</h1>
              </div>
              <hr />
              <div className="flex justify-between">
                <h1>Profit</h1>
                <h1>0</h1>
              </div>
              <hr />
            </div>
          </div>
          <div className="card mx-auto bg-base-200 shadow-xl w-full my-5">
            <div className="card-body">
              <div className="flex gap-5 mb-5">
                <div>
                  <h2 className="card-title">Team member details</h2>
                </div>
              </div>

              <div className="flex justify-between">
                <h1>Number of team members</h1>
                <h1>{teamReportData.totalRefer}</h1>
              </div>
              <hr />
              <div className="flex justify-between">
                <h1>Number of active members</h1>
                <h1>{teamReportData.active}</h1>
              </div>
              <hr />
              <div className="flex justify-between">
                <h1>Number of inactive members</h1>
                <h1>{teamReportData.inactive}</h1>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamReport;
