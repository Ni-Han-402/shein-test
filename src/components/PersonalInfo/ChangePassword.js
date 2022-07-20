import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ChangePassword = () => {
  const [newPass, setNewPass] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    const password = data.password;
    console.log(password);
    setNewPass(password);
    reset();
  };
  return (
    <div className="container max-w-[1080px] mx-auto p-5">
      <div className="card bg-base-200 max-w-[600px] mx-auto shadow-xl">
        <div className="card-body">
          <h1>Change Password</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <input
                type="password"
                className="input input-bordered"
                {...register("password", {
                  required: true,
                  maxLength: 5,
                })}
              />
              {errors.password && <p>Password is required</p>}
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

export default ChangePassword;
