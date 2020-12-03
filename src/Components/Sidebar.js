import React from "react";
import "./Sidebar.css";
import { FaBeer } from "react-icons/fa";
import {
  BiAddToQueue,
  BiAccessibility,
  BiAbacus,
  BiAngry,
  BiArchiveIn,
} from "react-icons/bi";
export default function Sidebar() {
  return (
    <div className=" container-outer">
      <div className="heading">
        <h2>Ajeel Holding group name</h2>
      </div>
      <div className="menu">
        <ul>
          <li>
            <BiAddToQueue />
            <a href="#">DashBoard</a>
          </li>
          <li>
            <BiAccessibility />
            <a href="#">Schedule</a>
          </li>
          <li>
            <BiAbacus />
            <a href="#">Finacials</a>
          </li>
          <li>
            <BiAngry />
            <a href="#">Message</a>
          </li>
          <li>
            <BiArchiveIn />
            <a href="#">Proftfolio</a>
          </li>
        </ul>
      </div>
      <div className="end">
        <h4 style={{ marginTop: 15, paddingLeft: 20, color: "white" }}>
          Contact Us
        </h4>
        <p style={{ margin: 15, color: "white", fontSize: 12 }}>
          Any Quesry For Enquries plaesae let me know
        </p>
      </div>
    </div>
  );
}
