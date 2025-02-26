import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import styles from "./DesktopNav.module.css";
import useNavbarMonitor from "./useNavbarMonitor";
import Donate from "./donate";
import { menu } from "@/data";

const DesktopNav = ({ router, target, title, loggedIn }) => {
  const { navbarRef, isOutOfView } = useNavbarMonitor();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const delayTimeout = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(delayTimeout.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    delayTimeout.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 500);
  };

  const helpLinks = [
    { text: "Help Centre", href: "#" },
    { text: "Contact Us", href: "#" },
    { text: "Need Prayer ", href: "#" },
    { text: "Report Emergency", href: "#" },
    { text: "FAQs", href: "#" },
  ];

  const goHome = useCallback(() => {
    router.push("/");
  }, []);

  const goLink = useCallback((link) => {
    router.push(link);
  }, []);

  return (
    <div className={`${styles.navbarContainer}`}>
      <div className={styles.mainNavbar} ref={navbarRef}>
        <Image
          src={"/images/logo/logo-2.png"}
          height={36}
          width={114}
          onClick={goHome}
        />
        <ul>
          {menu.map(({ title, link }) => (
            <li key={title} onClick={() => goLink(link)}>
              {title}
            </li>
          ))}
        </ul>
        <HelpComponent
          items={helpLinks}
          isDropdownOpen={isDropdownOpen}
          handleMouseLeave={handleMouseLeave}
          handleMouseEnter={handleMouseEnter}
        />
      </div>
      <div
        className={`${styles.secondaryNavbar} ${
          isOutOfView ? styles.secondaryNavbarVisible : ""
        }`}>
        <div className={`${styles.section} ${styles.sectionUtility}`}>
          <div className={styles.mainNavbar}>
            <ul>
              {menu.map(({ title, link }) => (
                <li key={title} onClick={() => goLink(link)}>
                  {title}
                </li>
              ))}
            </ul>
          </div>
          <Donate />
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;

const HelpComponent = ({
  items,
  handleMouseLeave,
  handleMouseEnter,
  isDropdownOpen,
}) => {
  return (
    <div
      className={styles.help}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span>Help</span>
      <div
        className={`${styles.dropdown} ${
          isDropdownOpen ? styles.dropdownOpen : ""
        }`}
      >
        {items.map((link, index) => (
          <a key={index} href={link.href}>
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};
