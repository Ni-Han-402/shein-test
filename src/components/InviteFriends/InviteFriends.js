import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateDashboardMessage } from "../../store/slice";
import { authkey } from "../Login/authkey";
const InviteFriends = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  var dashboardProfile = new FormData();
  dashboardProfile.append("dashboard", "");
  dashboardProfile.append("auth", authkey);
  dashboardProfile.append("logged", localStorage.getItem("auth"));

  useEffect(() => {
    fetch("https://mining-nfts.com/api/", {
      method: "POST",
      body: dashboardProfile,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 200) {
          dispatch(updateDashboardMessage(data.message));
        } else {
          navigate("/login");
        }
      });
  }, []);

  var dashboardMessagex = useSelector(
    (state) => state.dashboardmessage.message
  );
  const format = (x) => {
    return Number.parseFloat(x).toFixed(2);
  };
  return (
    <div className="bg-slate-900 ">
      <div className="container max-w-[1080px] mx-auto p-5">
        <div className="rounded-xl  p-3 bg-white  flex items-center justify-between">
          <Link
            to="/profile"
            className="btn bg-slate-800 text-white rounded-full  hover:bg-slate-300 hover:text-black  "
          >
            Back
          </Link>
          <h1 className="text-xl font-bold text-center">Grow your Team</h1>
        </div>

        <div className="mt-10 text-center">
          <h1 className="text-5xl font-extrabold text-white">
            Invite New Members
          </h1>
          <h1 className="text-3xl font-bold text-white">to join your team!</h1>
          <p className="my-5">
            <span className="text-xl text-white">
              Invitation Code:
              {Object.entries(dashboardMessagex).length === 0 ? (
                "user name"
              ) : (
                <span>{dashboardMessagex.user[0].invite}</span>
              )}
            </span>
          </p>
          <button
            className="btn btn-primary rounded-xl"
            onClick={navigator.clipboard.writeText(
              Object.entries(dashboardMessagex).length === 0
                ? "user name"
                : "http://localhost:3000/register/" +
                    dashboardMessagex.user[0].invite
            )}
          >
            Copy link
          </button>
        </div>

        <div className="card lg:card-side bg-base-100 shadow-xl mt-8 mb-4">
          <div className="card-body">
            <p className="text-xl">
              {" "}
              By inviting more members to your team, you will increase your
              daily profits.
            </p>
            <div className="card-actions">
              <p className="my-2">
                <span className="font-bold">Layer Two: </span>
                <span>
                  10% of daily profits from members who registered using the
                  referral link of your Layer One members.
                </span>
              </p>
              <p className="my-2">
                <span className="font-bold">Layer Three: </span>
                <span>
                  5% of daily profits from members who registered using the
                  referral link of your Layer Two members.
                </span>
              </p>
              <p className="my-2">
                <span className="font-bold">Layer Four: </span>
                <span>
                  2.5% of daily profits from members who registered using the
                  referral link of your Layer Three members.
                </span>
              </p>
              <p className="my-2">
                <span className="font-bold">Layer Five: </span>
                <span>
                  1% of daily profits from members who registered using the
                  referral link of your Layer Four members.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteFriends;
