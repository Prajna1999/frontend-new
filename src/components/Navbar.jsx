import React from "react";

import { Link } from "react-router-dom";

import * as AiIcons from "react-icons/ai";
// import * as NoteIcon from "react-icons/fa";

import * as IoIcons from "react-icons/io5";

function Navbar({ page }) {
  return (
    <div className=" flex justify-between  ml-52   py-10 h-16 w-4/5  ">
      <h1 className="text-bold  font-bold text-3xl">{page}</h1>
      <div className="flex list-none px-2">
        <li className="px-4">
          <Link to="#">
            <AiIcons.AiOutlineBell />
          </Link>
        </li>
        <li className=" px-4">
          <Link to="#">
            <IoIcons.IoPersonCircleOutline />
          </Link>
        </li>
      </div>
    </div>
  );
}

export default Navbar;
