import React, { useState } from "react";
import "./_navbar.scss";

import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import { SiYoutubetv } from "react-icons/si";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const NavbarContainer = ({ handleToggleSidebar }) => {
  const [input, setInput] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push(`/search/${input}`);
  };

  const user = useSelector((state) => state.auth?.user);

  return (
    <div className="header">
      <FaBars
        className="header_menu"
        size={26}
        onClick={() => handleToggleSidebar()}
      />

      <Link to="/" style={{ textDecoration: "none" }}>
        {" "}
        <div className="header_logo">
          <SiYoutubetv style={{ color: "rgba(224, 0, 0, 0.62)" }} /> {""}
          Fuzz<span>Tube !</span>
        </div>
      </Link>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className="header_icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img src={user?.photo} alt="avatar" />
      </div>
    </div>
  );
};

export default NavbarContainer;
