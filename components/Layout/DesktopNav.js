import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import useNavbarMonitor from "./useNavbarMonitor";
import {
  NavbarContainer,
  SearchBar,
  Section,
  Span,
  Text,
  Help,
  MainNavbar,
  SecondaryNavbar,
  AdvertSpecial,
} from "./NavStyle";

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
    <NavbarContainer>
      <MainNavbar ref={navbarRef}>
        <Section className="utility">
          <ul>
            <li>About</li>
            <li>Activities</li>
            <li>Projects</li>
          </ul>
        </Section>
        <HelpComponent
          items={helpLinks}
          isDropdownOpen={isDropdownOpen}
          handleMouseLeave={handleMouseLeave}
          handleMouseEnter={handleMouseEnter}
        />
      </MainNavbar>
      <SecondaryNavbar className={isOutOfView ? "visible" : ""}>
        {!target.isHome ? (
          <>
            <Section className="utility">
              <SearchBar>
                <Image
                  src="/images/sabiLogo.png"
                  width={62}
                  height={52}
                  alt="SearchBar"
                />
                <Text>Daro Nigeria</Text>
                <div className="search">
                  <input
                    type="text"
                    placeholder="Search for products, brands, categories..."
                  />
                  <Span>
                    <IoSearch size={25} />
                  </Span>
                </div>
              </SearchBar>
              <HelpComponent
                items={helpLinks}
                isDropdownOpen={isDropdownOpen}
                handleMouseLeave={handleMouseLeave}
                handleMouseEnter={handleMouseEnter}
              />
            </Section>
          </>
        ) : (
          <>
            <AdvertSpecial>
              <p>{target.targetKey || title} latest news Here!</p>
            </AdvertSpecial>
          </>
        )}
      </SecondaryNavbar>
    </NavbarContainer>
  );
};

export default DesktopNav;

export const HelpComponent = ({
  items,
  handleMouseLeave,
  handleMouseEnter,
  isDropdownOpen,
}) => {
  return (
    <Help onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <span>? Help</span>
      <div className={`dropdown ${isDropdownOpen ? "open" : ""}`}>
        {items.map((link, index) => (
          <a key={index} href={link.href}>
            {link.text}
          </a>
        ))}
      </div>
    </Help>
  );
};
