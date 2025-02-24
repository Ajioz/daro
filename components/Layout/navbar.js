import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import DesktopNav from "./DesktopNav";
import navStyle from "./navbar.module.css";
import { IoMenu } from "react-icons/io5";
import Drawer from "./drawer";

const Navbar = ({ title }) => {
  const [target, setTarget] = useState({ isHome: true, targetKey: "" });
  const [loggedIn, setLoggedIn] = useState(true);

  const router = useRouter();

  const processPath = useCallback(() => {
    const path = router.asPath;
    if (path === "/") {
      setTarget({ isHome: true, targetKey: "" });
    } else {
      const query = router.query;
      const targetKey = Object.keys(query)[0];
      setTarget({ isHome: false, targetKey });
    }
  }, []);

  useEffect(() => {
    processPath();
  }, [processPath]);

  return (
    <>
      <MobileNav />
      <DesktopNav
        router={router}
        target={target}
        title={title}
        loggedIn={loggedIn}
      />
    </>
  );
};

export default Navbar;

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={navStyle.navbarContainer}>
        <IoMenu size={30} onClick={handleToggleMenu} color="#fff"/>
        <Drawer isOpen={isOpen} handleToggleMenu={handleToggleMenu} />
      </div>
    </>
  );
};
