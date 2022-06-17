import React from "react";

import NavItem from "./NavItem";
import ConnectWallet from "../ConnectWallet";

const index = () => {
  return (
    <nav
      className={
        "fixed flex w-full justify-around bg-gray-300 p-4 dark:bg-gray-700"
      }
    >
      <NavItem text={"map"} path={"/"} />
      <NavItem text={"read"} path={"/read"} />
      <NavItem text={"post"} path={"/post"} />
      {/* <ConnectWallet /> */}
    </nav>
  );
};

export default index;
