import React from "react";
import { Link } from "react-router-dom";
import "./RuleDescription.css";
import { IoIosArrowBack } from "react-icons/io";

const RuleDescription = () => {
  return (
    <div className="">
      <div className="max-w-[1080px] mx-auto p-5 rounded-xl mb-5 flex items-center justify-between">
        <Link to="/">
          <IoIosArrowBack></IoIosArrowBack>
        </Link>
        <h1 className="text-xl font-bold text-center">VIP</h1>
      </div>

      <div className="pt-28  about-container banner-area text-center font-bold h-40 lg:h-96 md:h-96 ">
        {/* about-container */}
        <h2 className="lg:text-5xl text-xl md:text-4xl ">
          Description about FarfetchedGrab
        </h2>
      </div>
      <div className="bg-base-100 content-area p-5 ">
        <div className="container mx-auto max-w-[1080px] ">
          <section>
            <div className="my-5 collapse rounded-lg shadow-lg ">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-base-200 peer-checked:bg-neutral peer-checked:text-secondary py-5 ">
                <h2 className="font-bold text-dark text-2xl">About deposit</h2>
              </div>
              <div className="collapse-content bg-base-200 text-primary-content peer-checked:bg-white peer-checked:text-secondary-content">
                <p className="text-gray-500 text-justify  p-5">
                  Since FarfetchedGrab members come from many different countries and use
                  different currencies, FarfetchedGrab uses cryptocurrency transactions
                  to simplify transactions. Please check FarfetchedGrab's USDT address
                  carefully before recharging (the platform recharge address can
                  be changed at any time, and users must go to the platform to
                  obtain the latest recharge address before recharging). If you
                  have any questions, please contact customer service.
                </p>
              </div>
            </div>

            <div className="my-5 collapse rounded-lg shadow-lg ">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-base-200 peer-checked:bg-neutral peer-checked:text-secondary">
                <h2 className="font-bold text-dark text-2xl">
                  About order amount
                </h2>
              </div>
              <div className="collapse-content bg-base-200 text-primary-content peer-checked:bg-white peer-checked:text-secondary-content">
                <p className="text-gray-500 text-justify   p-5">
                  The order amount paid by FarfetchedGrab members is determined by the
                  member’s account balance, access to orders, and markets
                  conditions on the day. The maximum number of orders each
                  account can send per day depends on your user level.
                </p>
              </div>
            </div>

            <div className="my-5 collapse rounded-lg shadow-lg ">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-base-200 peer-checked:bg-neutral peer-checked:text-secondary">
                <h2 className="font-bold text-dark text-2xl">
                  About order-grab commission
                </h2>
              </div>
              <div className="collapse-content bg-base-200 text-primary-content peer-checked:bg-white peer-checked:text-secondary-content">
                <div className=" rounded-md my-6 shadow-md md:mx-5 lg:mx-10   p-5">
                  <div className="overflow-x-auto">
                    <table className="table w-full ">
                      <thead>
                        <tr className="font-bold">
                          <th className=" pl-5">Level</th>
                          <th>Percentage</th>
                          <th>About order-grab commission</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover">
                          <td className=" pl-5">VIP1</td>
                          <td>
                            76{" "}
                            <sup>
                              <i className="fa-solid fa-percent"></i>
                            </sup>{" "}
                          </td>
                          <td>60</td>
                        </tr>

                        <tr className="hover">
                          <td className=" pl-5">VIP1 </td>
                          <td>
                            76{" "}
                            <sup>
                              <i className="fa-solid fa-percent"></i>
                            </sup>{" "}
                          </td>
                          <td>60</td>
                        </tr>

                        <tr className="hover">
                          <td className=" pl-5">VIP1</td>
                          <td>
                            76{" "}
                            <sup>
                              <i className="fa-solid fa-percent"></i>
                            </sup>{" "}
                          </td>
                          <td>60</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-5 collapse rounded-lg shadow-lg ">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-base-200 peer-checked:bg-neutral peer-checked:text-secondary">
                <h2 className="font-bold text-dark text-2xl">
                  About withdrawal
                </h2>
              </div>
              <div className="collapse-content bg-base-200 text-primary-content peer-checked:bg-white peer-checked:text-secondary-content">
                <ul className="text-gray-500 text-justify   p-5">
                  <li>
                    <i className="fa-solid fa-circle-check"></i> The withdrawal
                    time of FarfetchedGrab is usually within 24 hours, and the service
                    fee for each withdrawal will be charged a certain fee by the
                    cryptocurrency system.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i> In order to
                    avoid frequent payment and cause FarfetchedGrab to incur additional
                    taxes, the minimum withdrawal amount is 1 USDT
                  </li>
                </ul>

                <div className="mt-8 mb-5 p-6 mx-auto lg:w-5/6  text-base alert alert-success shadow-xl font-bold  text-dark   ">
                  <div>
                    <p>
                      {" "}
                      <i className="fa-solid fa-circle-info mr-2"></i>※ At the
                      request of relevant departments, in order to prevent
                      members from being suspected of money laundering and other
                      illegal activities, FarfetchedGrab members need to complete the
                      order volume corresponding to the user level every day
                      before they can withdraw.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-5 collapse rounded-lg shadow-lg ">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-base-200 peer-checked:bg-neutral peer-checked:text-secondary">
                <h2 className="font-bold text-dark text-2xl">
                  About level requirements
                </h2>
              </div>
              <div className="collapse-content bg-base-200 text-primary-content peer-checked:bg-white peer-checked:text-secondary-content">
                <p className="text-gray-500 text-justify    p-5">
                  You can increase your user level by completing various
                  metrics. Please refer to the current level progress, benefits
                  and upgrade conditions for each level.
                  <span>
                    <a href="r" className="ml-3   font-bold link link-primary">
                      {" "}
                      VIP
                    </a>{" "}
                  </span>
                </p>
              </div>
            </div>

            <div className="my-5 collapse rounded-lg shadow-lg ">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-base-200 peer-checked:bg-neutral peer-checked:text-secondary">
                <h2 className="font-bold text-dark text-2xl">Disclaimer</h2>
              </div>
              <div className="collapse-content bg-base-200 text-primary-content peer-checked:bg-white peer-checked:text-secondary-content">
                <ul className="text-gray-500 text-justify    p-5">
                  <li>
                    <i className="fa-solid fa-circle-check"></i> The terms and
                    conditions contained herein may be changed or modified at
                    any time. Your continued participation in the program means
                    that you accept any changes or modifications to these terms
                    and conditions..
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i> In the event of
                    fraud or other related behaviors, including but not limited
                    to the above examples, FarfetchedGrab reserves the right to warn or
                    freeze your account.
                  </li>

                  <li>
                    <i className="fa-solid fa-circle-check"></i> The final
                    interpretation of the above rules belongs to FarfetchedGrab, and
                    reserves the right to adjust and change
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="card shadow-lg rounded-lg w-full my-14 bg-base-200 text-neutral">
              <div className="card-body items-center text-center">
                <h2 className="card-title fw-bold text-2xl">
                  See More Instructions!
                </h2>
                <div className="flex flex-col w-full border-opacity-400 ">
                  <div className="divider shadow-lg"></div>
                </div>
                <a href="r" className="link link-primary">
                  About us
                </a>
                <a href="r" className="link link-secondary">
                  Promotion description
                </a>
                <a href="r" className="link link-primary">
                  Back to Homepage
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RuleDescription;
