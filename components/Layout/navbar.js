import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import DesktopNav from "./DesktopNav";

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
  return <>MObile</>;
};
