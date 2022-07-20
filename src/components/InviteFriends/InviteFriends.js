import React, { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
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
    <div className="container max-w-[1080px] mx-auto p-5">
      <Link to="/profile" className="btn btn-base-200 m-5">
        Back
      </Link>
      <div className="mt-48 text-center">
        <h1 className="text-5xl font-extrabold text-white">Invite A Friend</h1>
        <h1 className="text-3xl font-bold text-white">to join our family</h1>
        <p className="my-5">
          <span className="text-xl">
            Invitation Code:
            {Object.entries(dashboardMessagex).length === 0 ? (
              "user name"
            ) : (
              <span>{dashboardMessagex.user[0].invite}</span>
            )}
          </span>
        </p>
        <button
          className="btn btn-primary"
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
    </div>
  );
};

export default InviteFriends;
