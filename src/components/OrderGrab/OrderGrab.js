import React, { useState, useEffect } from "react";
import "./OrderGrab.css";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { authkey } from "../Login/authkey";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { updateSummary } from "../../store/slice";
import { updateUser } from "../../store/slice";
import { toast } from 'react-toastify';

const OrderGrab = () => {
  const dispatch = useDispatch();

  var profit = localStorage.getItem("claimProfit");
  var arrayData = [];
  const navigate = useNavigate();

  const [status, setStatus] = useState("");

  const [showOrderCompletedTodayModal, setShowOrderCompletedTodayModal] =
    useState(false);

  const [showOrderErrorModal, setShowOrderErrorModal] = useState(false);

  const [showOrderPageModal, setShowOrderPageModal] = useState(false);
  const [grabProducts, setGrabProducts] = useState({});
  const [grabProductslogic, setGrabProductslogic] = useState(1);
  const [assetStats, setAssetStats] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  var grab = new FormData();


  var grabStats = new FormData();
  grabStats.append("grabSts", "");
  grabStats.append("auth", authkey);
  grabStats.append("logged", localStorage.getItem("auth"));

  grab.append("grab", "");
  grab.append("auth", authkey);
  grab.append("logged", localStorage.getItem("auth"));
  const grabOrder = () => {

    setGrabProductslogic(0);

    fetch("https://mining-nfts.com/api/", {
      method: "POST",
      body: grab,
    })
      .then((res) => res.json())
      .then((data) => {
        setGrabProductslogic(1);
        if (data.status == 200) {
          setGrabProducts(data.message);
          console.log(data.message);

          setShowOrderPageModal(true);
          closeModal();

          setStatus("200");

        }
        if (data.status == 201) {
          setShowOrderCompletedTodayModal(true);
          closeModal();
          setStatus("201");
        }
        if (data.status == 100) {
          toast.error(data?.message?.data)

        }
      });
  };
  const grabOrderStats = () => {
    fetch("https://mining-nfts.com/api/", {
      method: "POST",
      body: grabStats,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 200) {
          setAssetStats(data.message);
        }

        if (data.status == 201) {

          setAssetStats(data.message);
        }
        if (data.status == 100) {
        }
      });
  };

  const closeModal = () => {
    setTimeout(() => {
      setShowOrderCompletedTodayModal(false);
      setShowOrderErrorModal(false);
      setShowOrderPageModal(false);

      grabOrderStats();
      setStatus("");
    }, 60000);
  };
  const closeOrderPageModal = () => {
    grabOrderStats();
    setShowOrderPageModal(false);
    setStatus("");
  };

  const closeCompletedTodayModal = () => {
    setShowOrderCompletedTodayModal(false);
    setStatus("");
  };


  var dashboard = new FormData();
  dashboard.append("dashboard", "");
  dashboard.append("auth", authkey);
  dashboard.append("logged", localStorage.getItem("auth"));

  const [dashboardData, setDashBoardData] = useState({});
  const [dashboardDataPack, setDashBoardDataPack] = useState([]);

  useEffect(() => {
    grabOrderStats();
    fetch("https://mining-nfts.com/api/", {
      method: "POST",
      body: dashboard,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 200) {
          dispatch(updateSummary(data.message.pack));
          dispatch(updateUser(data.message.user));
          setDashBoardData(data.message);
          setDashBoardDataPack(data.message.pack);
        } else {
          navigate("/login");
        }
      });
  }, []);
  const user = useSelector((state) => state.user.data);

  return (
    <div>
      <div className="  ">
        <nav className=" bg-gray-900 navbar py-0   max-w-[1080] mx-auto ">
          <div className=" flex justify-between">

            <div className="  ">
              <button className=" btn btn-square btn-ghost text-3xl lg:pl-5 md:pl-5  pl-1 font-bold">

                <Link to="/" className="text-white">
                  <IoIosArrowBack></IoIosArrowBack>
                </Link>

              </button>
            </div>

            <div className="">
              <h1

                className="lg:pr-5 md:pr-5  uppercase text-base md:text-2xl lg:text-3xl  font-bold text-white"
              >
                Order-Grab Page
              </h1>
            </div>

          </div>
        </nav>
        {/* bg-slate-800 */}
        <div className=" mt-18 ">
          <div className="container mx-auto max-w-[1080] lg:px-5 md:px-5 px-4  ">
            <section className="my-7  py-3 rounded-xl ">
              <div className="card lg:card-side  shadow-xl bg-slate-300 ">
                <figure>
                  <img
                    className="w-5/6 my-5 shadow-xl  rounded-lg"
                    src="https://mediakonsumen.com/files/2020/10/putus-mitra-gra_b.jpg"
                    alt="Album"
                  />
                </figure>
                <div className="card-body flex justify-center ">
                  <div>
                    <h2 className="card-title text-4xl mb-2  font-bold">
                      Get the order!
                    </h2>
                    <div>
                      <p className=" mb-5">
                        Click "Grab now" button to get the order.
                      </p>
                      <p className=" text-emerald-800 mb-7">
                        Order grabbing... the result will be shown below
                      </p>
                    </div>
                  </div>
                  <div className="card-actions justify-end w-full">
                    {grabProductslogic != 0 ? <button
                      className="btn text-white w-full font-bold bg-gray-900"
                      onClick={grabOrder}
                      disabled={
                        user[0].total_grab == assetStats?.pack
                          ? true

                          : false
                      }
                    >
                      Grab Now
                    </button>
                      :
                      <button type="button" className="btn bg-indigo-500 ..." >
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
                        Order Placing...
                      </button>
                    }
                  </div>
                </div>
              </div>
            </section>

            <section className="my-7  py-3 rounded-xl">
              <div>
                <h2 className="text-center text-xl md:text-3xl lg:text-4xl mb-6 mt-9 bg-gray-900  text-white rounded-lg shadow-xl py-5 font-bold">
                  Result Today
                </h2>
              </div>

              <div className="card lg:card-side  shadow-xl bg-slate-300">
                <div className="stats w-11/12 mx-auto lg:mx-5 md:mx-5 lg:w-5/12 md:w-5/12 my-5 shadow-xl  rounded-lg">
                  <div className="stat overflow-x-hidden">
                    <div className="stat-title lg:text-base md:text-base text-sm">
                      Total assests Views
                    </div>
                    <div className="stat-value lg:text-4xl md:text-3xl text-2xl">
                      {assetStats.total_asset_view}
                    </div>
                    <div className="stat-desc">Live Time</div>
                  </div>
                </div>

                <div className="lg:w-7/12 md:w-7/12 w-full card-body flex justify-center  px-3  ">
                  <div className=" stats stats-vertical lg:stats-horizontal shadow-xl rounded-lg">
                    <div className="stat px-3 md:px-2 lg:px-5">
                      <div className="stat-figure text-secondary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="inline-block w-8 h-8 stroke-current"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </div>
                      <div className="stat-title">Grabbed/ Total</div>
                      <div className="stat-value  lg:text-4xl md:text-3xl text-xl ">
                        {assetStats.left_order}/{assetStats.total_order}
                      </div>
                      <div className="stat-desc">Today</div>
                    </div>

                    <div className="stat px-3 md:px-2 lg:px-5">
                      <div className="stat-figure text-secondary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="inline-block w-8 h-8 stroke-current"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                          ></path>
                        </svg>
                      </div>
                      <div className="stat-title">Promotion bonus</div>
                      <div className="stat-value  lg:text-4xl md:text-3xl text-xl">
                        {assetStats.today_bonus}
                      </div>
                      <div className="stat-desc">↗︎ Today</div>
                    </div>

                    <div className="stat px-3 md:px-2 lg:px-5">
                      <div className="stat-figure text-secondary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="inline-block w-8 h-8 stroke-current"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                          ></path>
                        </svg>
                      </div>
                      <div className="stat-title">Profits today</div>
                      <div className="stat-value  lg:text-4xl md:text-3xl text-xl">
                        <sup>$</sup>
                        {assetStats.today_profit}
                      </div>
                      <div className="stat-desc">↘︎ Today</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <>
        <div className="bg-[#3F4D67] rounded-lg">
          {showOrderCompletedTodayModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative  my-6 mx-auto ">
                  {/*content*/}

                  <div className="  w-90 mr-5 ml-5 sm:w-100 md:w-90 lg:w-90 xl:w-90 md:h-50 lg:h-45 xl:h-41 border-0 rounded-lg shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none border-green-500">

                    <div className="flex flex-col justify-between p-5   rounded-t bg-slate-300 bg-white-300 text-black">
                      <p className="font-bold text-center text-2xl text-wrap">
                        Your order is completed for today
                      </p>
                      <button className="btn btn-danger my-5"
                        onClick={() => {
                          closeCompletedTodayModal();
                        }}
                      >Close</button>
                    </div>

                  </div>
                </div>
              </div>

            </>
          ) : null}
        </div>

        <div>
          {showOrderPageModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                <div className="relative  my-6 mx-auto ">
                  {/*content*/}

                  <div className=" reseller-popup w-90 mr-5 ml-5 sm:w-50 md:w-90 lg:w-90 xl:w-90 sm:h-50 md:h-50 lg:h-45 xl:h-41 border-0 rounded-lg shadow-lg relative flex flex-col  outline-none focus:outline-none border-green-500 bg-gradient-to-r from-cyan-500 to-blue-500 ...">

                    <div className="flex justify-end">
                      <div
                        className=" w-[31px] bg-white m-5"
                        onClick={() => {
                          closeOrderPageModal();
                        }}
                      >
                        <svg className="font-bold "
                          xmlns="http://www.w3.org/2000/svg"
                          stroke="#0A459F"
                          fill="#00000"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          height="2em"
                          width="2em"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                        </svg>
                      </div>
                    </div>


                    <>
                      <div className=" flex flex-col justify-between p-5   rounded-lg  bg-gradient-to-r from-cyan-500 to-blue-500 ... text-black  shadow-lg">
                        <p className="font-bold text-center text-base md:text-xl  lg:text-2xl text-wrap text-white">
                          Order sent successfully
                        </p>
                        <div className=" my-2 font-bold">
                          <p className="text-right"> Order left : {grabProducts.left_order}</p>
                          <p className="text-left"> Order Price : {grabProducts.data.product.price1 == null ? grabProducts.data.product.price : grabProducts.data.product.price1}</p>
                          <p className="text-right"> Order Commision : {grabProducts.data.commission}</p>

                        </div>


                        <p className="text-slate-800 my-2 font-bold">
                          {" "}
                          {grabProducts.data.product.title}
                        </p>
                        <div className="flex justify-center items-center">
                          <img className="rounded-lg shadow-lg max-w-[200px] lg:max-w-[400px] md:max-w-[500px] " alt="" src={grabProducts.data.product.image} />
                        </div>

                        <button
                          className="btn-primary font-bold mt-2 py-2 rounded-lg"
                          onClick={() => {
                            closeOrderPageModal();
                          }}
                        >
                          Submit
                        </button>
                      </div>
                    </>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>




      </>
    </div>
  );
};

export default OrderGrab;
