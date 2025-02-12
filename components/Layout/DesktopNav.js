import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import useNavbarMonitor from "./useNavbarMonitor";
import styles from "./DesktopNav.module.css"; // Import CSS Module

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
    { text: "Track My Order", href: "#" },
    { text: "Return Policy", href: "#" },
    { text: "FAQs", href: "#" },
  ];

  const goHome = useCallback(() => {
    router.push("/");
  }, []);

  return (
    <div className={`${styles.navbarContainer}`}>
      <div className={styles.mainNavbar} ref={navbarRef}>
        <Image src={"/images/logo/logo-2.png"} height={36} width={114} />
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Programs</li>
          <li>Testimonies</li>
          <li>Gallery</li>
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
        }`}
      >
        {!target.isHome ? (
          <>
            <div className={`${styles.section} ${styles.sectionUtility}`}>
              <div className={styles.searchBar}>
                <Image
                  src="/images/sabiLogo.png"
                  width={62}
                  height={52}
                  alt="SearchBar"
                />
                <p className={styles.text}>Daro Nigeria</p>
                <div className={styles.searchContainer}>
                  <input
                    type="text"
                    placeholder="Search for products, brands, categories..."
                    className={styles.searchBarInput}
                  />
                  <span className={styles.span}>
                    <IoSearch size={25} />
                  </span>
                </div>
              </div>
              <HelpComponent
                items={helpLinks}
                isDropdownOpen={isDropdownOpen}
                handleMouseLeave={handleMouseLeave}
                handleMouseEnter={handleMouseEnter}
              />
            </div>
          </>
        ) : (
          <>
            <div className={styles.advertSpecial}>
              <p>{target.targetKey || title} latest news Here!</p>
            </div>
          </>
        )}
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
