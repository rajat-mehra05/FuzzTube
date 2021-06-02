import React from "react";
import {
  MdSubscriptions,
  MdExitToApp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
} from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
import { useDispatch } from "react-redux";
import "./_sidebar.scss";
import { logout } from "../../redux/actions/authActions";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebar, handleToggleSidebar }) => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <nav
      className={sidebar ? "sidebar open" : "sidebar"}
      onClick={() => handleToggleSidebar(false)}
    >
      <Link to="/">
        <li>
          <MdHome size={23} />
          <span> Home </span>
        </li>
      </Link>
      <Link to="/feed/subscriptions">
        <li>
          <MdSubscriptions size={23} />
          <span> Subscriptions </span>
        </li>
      </Link>
      <a
        href="https://www.notion.so/Making-of-Fuzz-Tube-YouTube-clone-v1-0-63e839969f8e4d43a2c5c8fb9e9276d5"
        target="_blank"
        rel="noreferrer"
      >
        <li>
          <CgFileDocument size={23} />
          <span> Changelog </span>
        </li>
      </a>
      <li>
        <MdHistory size={23} />
        <span> History </span>
      </li>
      <li>
        <MdLibraryBooks size={23} />
        <span> Library </span>
      </li>

      <hr />

      <li onClick={logoutHandler}>
        <MdExitToApp size={23} />
        <span> Log Out </span>
      </li>

      <hr />
    </nav>
  );
};

export default Sidebar;
