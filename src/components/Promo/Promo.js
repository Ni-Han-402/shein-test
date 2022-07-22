import React from "react";
import { Link } from "react-router-dom";
import "./Promo.css";
import { IoIosArrowBack } from "react-icons/io";

const Promo = () => {
  return (
    <div className="bg-base-100">
      <div className="max-w-[1080px] mx-auto p-5 rounded-xl mb-5 flex items-center justify-between">
        <Link to="/">
          <IoIosArrowBack></IoIosArrowBack>
        </Link>
        <h1 className="text-xl font-bold text-center">Promotion</h1>
      </div>

      <div className="pt-28  about-container banner-area text-center font-bold h-40 lg:h-96 md:h-96 ">
        <h2 className="lg:text-5xl text-xl md:text-4xl ">
          Promotion description
        </h2>
      </div>

      <div className="bg-base-100 content-area p-5 ">
        <div className="container mx-auto max-w-[1080]">
          <section>
            <div className="my-5 collapse rounded-lg shadow-lg ">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-base-200 peer-checked:bg-neutral peer-checked:text-secondary">
                <h2 className="font-bold text-dark text-2xl">
                  {" "}
                  FarfetchedGrab Agency Cooperation Program
                </h2>
              </div>
              <div className="collapse-content bg-base-200 text-primary-content peer-checked:bg-white peer-checked:text-secondary-conten">
                <p className="text-gray-500 text-justify     p-5">
                  {" "}
                  FarfetchedGrab allows members to earn rewards by inviting friends and
                  family to join. Provide a unique FarfetchedGrab invitation code for
                  others, allowing them to receive additional revenue and
                  invitation rewards from the invitees' commission.
                </p>
              </div>
            </div>

            <div className="my-5 collapse rounded-lg shadow-lg ">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-base-200 peer-checked:bg-neutral peer-checked:text-secondary">
                <h2 className="font-bold text-dark text-2xl">
                  {" "}
                  Invitation qualifications
                </h2>
              </div>

              <div className="collapse-content bg-base-200 text-primary-content peer-checked:bg-white peer-checked:text-secondary-content">
                <ul className="text-gray-500 text-justify     p-5">
                  <li>
                    <i className="fa-solid fa-circle-check"></i> The inviter
                    must be a member of the FarfetchedGrab platform.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i> Inviters must
                    fully comply with all terms and conditions in order to
                    participate in the FarfetchedGrab agency cooperation program
                  </li>
                </ul>
              </div>
            </div>

            <div className="my-5 collapse rounded-lg shadow-lg ">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-base-200 peer-checked:bg-neutral peer-checked:text-secondary">
                <h2 className="font-bold text-dark text-2xl">
                  {" "}
                  Basic information
                </h2>
              </div>
              <div className="collapse-content bg-base-200 text-primary-content peer-checked:bg-white peer-checked:text-secondary-content">
                <p className="text-gray-500 text-justify     p-5">
                  When relatives and friends use your invitation code to
                  register for a FarfetchedGrab account, it means that you have
                  participated in the FarfetchedGrab agency cooperation program, and that
                  you fully and unconditionally agree to these terms and
                  conditions, as well as the decision and interpretation of
                  FarfetchedGrab. These decisions and interpretations are final and
                  binding on all matters relating to the plan.
                </p>
              </div>
            </div>

            <div className="my-5 collapse rounded-lg shadow-lg ">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-base-200 peer-checked:bg-neutral peer-checked:text-secondary">
                <h2 className="font-bold text-dark text-2xl">Invite</h2>
              </div>
              <div className="collapse-content bg-base-200 text-primary-content peer-checked:bg-white peer-checked:text-secondary-content">
                <ul className="text-gray-500 text-justify     p-5">
                  <li>
                    <i className="fa-solid fa-circle-check"></i> The invitation
                    code can be used to scan the code when relatives and friends
                    register. Relatives and friends scan the inviter's
                    invitation code to become the main agent of the invitee.
                  </li>
                </ul>
              </div>
            </div>

            <div className="my-5 collapse rounded-lg shadow-lg ">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-base-200 peer-checked:bg-neutral peer-checked:text-secondary">
                <h2 className="font-bold text-dark text-2xl">Reward method</h2>
              </div>
              <div className="collapse-content bg-base-200 text-primary-content peer-checked:bg-white peer-checked:text-secondary-content">
                <ul className="text-gray-500 text-justify     p-5">
                  <li>
                    <i className="fa-solid fa-circle-check"></i> The reward
                    depends on the profit amount of the invited relatives and
                    friends, and the relative position of the invitees in the
                    agency program determines the reward commission you can get
                  </li>
                </ul>
                <div className=" rounded-md my-6 shadow-md md:mx-5 lg:mx-10 ">
                  <div className="overflow-x-auto">
                    <table className="table w-full text-center">
                      <thead>
                        <tr className="font-bold">
                          <th></th>
                          <th>Level</th>
                          <th>Percentage</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>1</th>
                          <td>Level 1</td>
                          <td>
                            15{" "}
                            <sup>
                              <i className="fa-solid fa-percent"></i>
                            </sup>{" "}
                          </td>
                        </tr>

                        <tr className="hover">
                          <th>2</th>
                          <td>Level 2</td>
                          <td>
                            10{" "}
                            <sup>
                              <i className="fa-solid fa-percent"></i>
                            </sup>{" "}
                          </td>
                        </tr>

                        <tr>
                          <th>3</th>
                          <td>Level 3</td>
                          <td>
                            5{" "}
                            <sup>
                              <i className="fa-solid fa-percent"></i>
                            </sup>{" "}
                          </td>
                        </tr>
                        <tr>
                          <th>4</th>
                          <td>Level 4</td>
                          <td>
                            1{" "}
                            <sup>
                              <i className="fa-solid fa-percent"></i>
                            </sup>{" "}
                          </td>
                        </tr>
                        <tr>
                          <th>5</th>
                          <td>Level 5</td>
                          <td>
                            1{" "}
                            <sup>
                              <i className="fa-solid fa-percent"></i>
                            </sup>{" "}
                          </td>
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
                <h2 className="font-bold text-dark text-2xl">Remark </h2>
              </div>
              <div className="collapse-content bg-base-200 text-primary-content peer-checked:bg-white peer-checked:text-secondary-content">
                <ol className="text-gray-500 text-justify     p-5">
                  <li>
                    <i className="fa-solid fa-circle-check"></i> 1. All personal
                    bonuses generated by participating in the FarfetchedGrab promotion
                    program are paid by FarfetchedGrab and will not affect the member's
                    income.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i> 2. Every
                    invitee's order, regardless of the amount, will be
                    calculated as a reward commission and will be automatically
                    distributed by the system.
                  </li>
                </ol>

                <div className="card my-7 bg-base-100 shadow-md lg:w-2/6 md:w-3/6 mx-auto     p-5">
                  <figure>
                    <img
                      src="https://FarfetchedGrabbj.com/_nuxt/b0ddec0.png"
                      alt="promotion description"
                    />
                  </figure>
                </div>

                <div className="text-base alert alert-success shadow-xl font-bold  text-dark  lg:w-9/12 md:w-11/12 w-full mx-auto   py-10  px-5 mb-10">
                  <div>
                    <p>
                      {" "}
                      <i className="fa-solid fa-circle-info"></i> The total
                      promotion bonus provided by the three people is 0.0488,
                      0.04 will be automatically distributed at 00:00 on the
                      day, and the remaining 0.0088 will continue to accumulate.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-5 collapse rounded-lg shadow-lg ">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-base-200 peer-checked:bg-neutral peer-checked:text-secondary">
                <h2 className="font-bold text-dark text-2xl">Disclaimer</h2>
              </div>
              <div className="collapse-content bg-base-200 text-primary-content peer-checked:bg-white peer-checked:text-secondary-content">
                <ul className="text-gray-500 text-justify     p-5">
                  <li>
                    <i className="fa-solid fa-circle-check"></i> The Commission
                    and reward obtained by the invited members will be
                    distributed to the account of the inviter every day.
                    Inviters can view the commissions and rewards in fund
                    details.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i> The terms and
                    conditions contained herein may be changed or modified at
                    any time. Your continued participation in the program means
                    that you accept any changes or modifications to these terms
                    and conditions.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i> In case of
                    fraud or other related behaviors, including but not limited
                    to the above examples, FarfetchedGrab reserves the right to warn or
                    freeze your account.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i> The agency
                    cooperation plan of FarfetchedGrab is operated by FarfetchedGrab, and the
                    final interpretation right belongs to FarfetchedGrab.
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
                <Link  to="/about" onClick={window.scrollTo(0, 0)}    className="link link-primary">
                  About us
                </Link>
                <Link to="/rule-description"  onClick={window.scrollTo(0, 0)}    className="link link-secondary">
                  Rules description
                </Link>
                <Link to="/"  onClick={window.scrollTo(0, 0)}    className="link link-primary">
                  Back to Homepage
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Promo;
