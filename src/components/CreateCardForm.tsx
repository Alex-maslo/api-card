import React from "react";
import Form from "next/form";
import { createCard } from "@/service-actions/api.service";

const LoginForm = () => {
  return (
    <div className="flex justify-center p-3">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <Form action={createCard} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Doctor</span>
            </label>
            <input
              name="doctor"
              type="text"
              placeholder="doctor"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
