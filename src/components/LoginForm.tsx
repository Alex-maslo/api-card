import React from "react";
import Form from "next/form";
import { apiService } from "@/service-actions/api.service";

const LoginForm = () => {
  return (
    <div className="flex justify-center p-3">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <Form action={apiService} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
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
