import React, { useState } from "react";
import { useForm } from "react-hook-form";

const WithdrawChangePassword = () => {
  const [newWithPass, setNewWithPass] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    const withPassword = data.withdrawPassword;
    console.log(withPassword);
    setNewWithPass(withPassword);
    reset();
  };
  return (
    <div className="container max-w-[1080px] mx-auto p-5">
      <div className="card bg-base-200 max-w-[600px] mx-auto shadow-xl">
        <div className="card-body">
          <h1>Withdraw Change Password</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <input
                type="password"
                className="input input-bordered"
                {...register("withdrawPassword", {
                  required: true,
                  maxLength: 5,
                })}
              />
              {errors.withdrawPassword && <p>Withdraw Password is required</p>}
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Verify" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WithdrawChangePassword;
