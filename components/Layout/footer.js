import { useState, useEffect } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoWhatsapp,
} from "react-icons/io5";
// import LoginModal from "./login";
// import { countProps } from "../lib/helpers";
// import { fetchMessages } from "@/utils/util-fetch";
import styles from "./Footer.module.css";

const style = {
  position: "relative",
  display: "inline-block",
};

const badgeStyle = {
  position: "absolute",
  top: "-5px",
  right: "-9px",
  backgroundColor: "red",
  width: "20px",
  height: "20px",
  color: "white",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "12px",
};

export default function Footer({ session }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [allItems, setAllItems] = useState();

  //   useEffect(() => {
  //     const getAllMessages = async () => {
  //       setAllItems(await fetchMessages());
  //     };
  //     getAllMessages();
  //   }, []);

  //   useEffect(() => {
  //     if (isOpen) return setShowModal(true);
  //     return setShowModal(false);
  //   }, [isOpen]);

  //   const closeModal = () => {
  //     setShowModal(false);
  //     setIsOpen(false);
  //   };

  const handleUser = async (state) => {
    if (!state) {
      await signOut({ redirect: false });
      setIsUser(false);
    } else {
      setIsUser(true);
    }
  };

  const messages = () => {
    router.push("/message");
  };

  return (
    <>
      <footer className={styles.mainFooter}>
        <div className={styles.iconDots2}></div>
        <div className={styles.widgetsSection}>
          <div className={styles.autoContainer}>
            <div className={styles.row}>
              <div className={`${styles.footerColumn} ${styles.colXl4}`}>
                <div className={styles.aboutWidget}>
                  <div className={styles.widgetContent}>
                    <div className={styles.logo}>
                      <Link href="/">
                        <img src="images/logo.png" alt="" />
                      </Link>
                    </div>
                    <div className={styles.text}>
                      Desires to obtain pain of itself, because it is pain, but{" "}
                      <br />
                      occasionally circumstances.
                    </div>
                    <ul className={styles.socialIconTwo}>
                      <li>
                        <Link
                          href="https://www.linkedin.com/company/ajiozi-limited"
                          target="_blank"
                        >
                          <IoLogoLinkedin size={20} />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="whatsapp://send?text=Hello, I am interested in learning more about your services. Could you please provide more details?&phone=+2348151654368"
                          target="_blank"
                        >
                          <IoLogoWhatsapp size={20} />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://web.facebook.com/Ajiozinitiative"
                          target="_blank"
                        >
                          <IoLogoFacebook size={20} />
                        </Link>
                      </li>
                      <li>
                        <Link href="https://x.com/ajiozi_ltd" target="_blank">
                          <IoLogoTwitter size={20} />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`${styles.footerColumn} ${styles.colXl2}`}>
                <div className={styles.linksWidget}>
                  <h5 className={styles.widgetTitle}>Explore</h5>
                  <div className={styles.widgetContent}>
                    <ul className={styles.userLinks}>
                      <li>
                        <Link href="#">About Organization</Link>
                      </li>
                      <li>
                        <Link href="#">Meet the Team</Link>
                      </li>
                      <li>
                        <Link href="#">News & Media</Link>
                      </li>
                      <li>
                        <Link href="#">Our Projects</Link>
                      </li>
                      <li>
                        <Link href="contact">Contact</Link> &nbsp; &#9758;
                        &nbsp;
                        <Link href="faq">FAQ</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`${styles.footerColumn} ${styles.colXl3}`}>
                <div className={styles.contactWidget}>
                  <h5 className={styles.widgetTitle}>Contact</h5>
                  <div className={styles.widgetContent}>
                    <div className={styles.text}>
                      #31 Airport Road, Lagos, Nigeria
                    </div>
                    <ul className={styles.contactList}>
                      <li className={styles.contactInfo}>
                        <i className="icon fa fa-envelope"></i>
                        <Link href="#" className="mailto:needajiozi@ajiozi.com">
                          info@daro.com
                        </Link>
                      </li>
                      <li className={styles.contactInfo}>
                        <i className="icon fa fa-phone"></i>
                        <Link href="#" className="tel:+2348064107055">
                          +234 xxxxxxxxx
                        </Link>
                      </li>
                      <li className={styles.contactInfo}>
                        <i className="icon fa fa-phone"></i>
                        <Link href="#" className="tel:+2348064107055">
                          +234 8151 6543 68
                        </Link>
                      </li>
                      {isUser ? (
                        <li className={styles.contactInfo}>
                          <i className="icon fa fa-message"></i>
                          <span
                            className={styles.login}
                            onClick={messages}
                            style={style}
                          >
                            Messages
                            {countProps(allItems, false) ? (
                              <span style={badgeStyle}>
                                {countProps(allItems, false)}
                              </span>
                            ) : (
                              ""
                            )}
                          </span>
                          &nbsp; | &#9758; | &nbsp;
                          <span
                            className={styles.login}
                            onClick={() => handleUser(false)}
                          >
                            Logout
                          </span>
                        </li>
                      ) : (
                        <li className={styles.contactInfo}>
                          {/* <i className="icon fa fa-sign"></i>
                          <span
                            className={styles.login}
                            onClick={() => setIsOpen(!isOpen)}
                          >
                            Login
                          </span> */}
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`${styles.footerColumn} ${styles.colXl3}`}>
                <div className={styles.galleryWidget}>
                  <h4 className={styles.widgetTitle}>Projects</h4>
                  <div className={styles.widgetContent}>
                    <div className={styles.instaGallery}>
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <figure key={num} className={styles.image}>
                          <Link href="#">
                            <img
                              src={`images/resource/gallery-thumb-${num}.jpg`}
                              alt=""
                            />
                          </Link>
                        </figure>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.autoContainer}>
            <div className={styles.copyrightText}>
              © 2024 -{" "}
              {new Date().toLocaleDateString("en-US", { year: "numeric" })} |
              Daro Nigeria. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
      {/* <LoginModal
        showModal={showModal}
        closeModal={closeModal}
        handleUser={handleUser}
        session={session}
      /> */}
    </>
  );
}
