import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "@redux/slices/auth";

import Avatar from "@components/Avatar";
import IconButton from "@components/IconButton";
import { ReactComponent as MessageIcon } from "@images/messages.svg";
import { ReactComponent as Netification } from "@images/bell.svg";

import { AiOutlineDown } from "react-icons/ai";

const UserPanel = () => {
  const [avatarMenuOpen, setAvatarMenuOpen] = useState(false);
  const {
    user: { user },
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="flex gap-3">
      <IconButton sx={{ my: 2 }}>
        <Netification />
      </IconButton>
      <IconButton>
        <MessageIcon />
      </IconButton>
      <div className="relative">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setAvatarMenuOpen((prevState) => !prevState)}
        >
          <Avatar />
          <span>
            {user?.first_name && user.first_name}
            {user?.last_name && ` ${user.last_name}`}
          </span>
          <AiOutlineDown className={`${avatarMenuOpen ? "rotate-180" : ""}`} />
        </div>
        {avatarMenuOpen && (
          <div className="border-2 w-40 p-5 bg-white absolute top-12 right-0 rounded-sm shadow-md z-10 border-slate-400">
            <ul>
              <li className="cursor-pointer" onClick={onLogout}>
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserPanel;
