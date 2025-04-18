import React from "react";
import { useRouter } from "next/router";
import styles from "./DesktopNav.module.css";
import { IoBasket, IoHeart, IoSearch } from "react-icons/io5";

const Donate = () => {
  const { push } = useRouter();
  return (
    <div className={styles.donate}>
      <IoSearch size={30} />
      <IoBasket size={30} />
      <CustomBtn
        showHeart={"block"}
        value={"Donate"}
        onClick={() => push("/contact")}
      />
    </div>
  );
};

export default Donate;

export const CustomBtn = ({ value, showHeart, onClick }) => {
  return (
    <button className={styles.donateBtn} onClick={onClick}>
      <IoHeart
        size={20}
        style={{ zIndex: 1, color: "#fff", display: showHeart }}
      />
      <span>{value}</span>
    </button>
  );
};
