import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import DesktopNav from "./DesktopNav";
import navStyle from "./navbar.module.css";
import { IoMenu } from "react-icons/io5";
import Drawer from "./drawer";
import useNavbarMonitor from "./useNavbarMonitor";
import Donate from "./donate";

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
  const { navbarRef, isOutOfView } = useNavbarMonitor();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={navStyle.mobileWrapper}>
        <div className={navStyle.firstNavBar} ref={navbarRef}>
          <IoMenu size={30} onClick={handleToggleMenu} color="#fff" />
          {!isOutOfView && (
            <Drawer isOpen={isOpen} handleToggleMenu={handleToggleMenu} />
          )}
        </div>
        <div
          className={`${navStyle.secondaryNavbar} ${
            isOutOfView ? navStyle.secondaryNavbarVisible : ""
          }`}
        >
          {" "}
          <Donate />
          <IoMenu size={30} onClick={handleToggleMenu} color="#fff" />
          {isOutOfView && (
            <Drawer isOpen={isOpen} handleToggleMenu={handleToggleMenu} />
          )}
        </div>
      </div>
    </>
  );
};
