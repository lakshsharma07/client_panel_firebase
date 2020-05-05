import React from "react";
import { Link } from "react-router-dom";

export default function sidebar() {
  return (
    <div>
      <Link to="/client/add" className="btn btn-md btn-success btn-block">
        <i className="fas fa-plus" />
        New
      </Link>
    </div>
  );
}
