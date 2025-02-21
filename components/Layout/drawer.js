// Drawer.js
import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { menu } from "@/data";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./drawer.module.css";

const Drawer = () => {
  const { push } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const forceBack = () => {
    push("/");
    handleToggleMenu();
  };

  const renderMenuItems = (items) =>
    items?.map(({ icon, title, link }) => (
      <div
        key={title}
        className={styles.drawerMenuItem}
        onClick={() => openChoice(link)}
      >
        <div className={styles.iconWrapper}>{icon}</div>
        <p className={styles.text}>{title}</p>
      </div>
    ));

  return (
    <>
      <div className={`${styles.menuContainer} ${menuOpen ? styles.open : ""}`}>
        <div className={styles.drawerHeader}>
          <Image
            src="/images/sabiLogo.png"
            width={42}
            height={35}
            alt="sabiLogo"
            onClick={forceBack}
          />
          <button className={styles.closeButton} onClick={handleToggleMenu}>
            ✕
          </button>
        </div>
        <div className={styles.textContainer}>
          <p>NEED HELP?</p>
          <BiChevronRight size={25} />
        </div>
        <div className={styles.textHeader}>
          <p>MY SABI ACCOUNT</p>
          <BiChevronRight size={25} />
        </div>
        {renderMenuItems(menu)}
      </div>
    </>
  );
};

export default Drawer;
