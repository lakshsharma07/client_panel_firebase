import React from "react";
import Client from "../clients/Clients";
import Sidebar from "./sidebar";

export default function () {
  return (
    <div className="row">
      <div className="col-md-10">
        <Client />
      </div>
      <div className="col-md-2">
        <Sidebar />
      </div>
    </div>
  );
}
