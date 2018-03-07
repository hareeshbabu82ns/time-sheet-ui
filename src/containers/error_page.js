import React from "react";
import { Link } from "react-router-dom";

import { iam } from '../config/auth';

const ErrorPage = () => (
  <div>
    <p>
      <Link to="/">Dashboard</Link>
      <Link to={`${iam.url}/signin`}>Login</Link>
    </p>
  </div>
);

export default ErrorPage;