// Drawer.js
import React from "react";
import { menu } from "@/data";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./drawer.module.css";

const Drawer = ({ isOpen, handleToggleMenu }) => {
  const { push } = useRouter();

  const openChoice = (link) => {
    push(link);
  };

  const forceBack = (link) => {
    push(link);
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
      <div className={`${styles.menuContainer} ${isOpen ? styles.open : ""}`}>
        <div className={styles.drawerHeader}>
          <Image
            src="/images/logo/logo-1.png"
            width={142}
            height={50}
            alt="Daro"
            onClick={forceBack}
          />
          <button className={styles.closeButton} onClick={handleToggleMenu}>
            ✕
          </button>
        </div>
        {renderMenuItems(menu)}
      </div>
    </>
  );
};

export default Drawer;
