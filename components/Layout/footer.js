import styles from "./Footer.module.css";
import Image from "next/image";
import {
  IoCall,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoWhatsapp,
  IoMailOpen,
} from "react-icons/io5";
import Link from "next/link";
import NewsLetter from "@/components/Home/Blog/newsLetter";

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <NewsLetter />
      <div className={styles.footerWrapper}>
        <section className={styles.space}></section>
        {/* Left Section */}
        <div className={styles.footerLeft}>
          <Image
            src="/images/logo/logo-3.png"
            alt="daro"
            width={100}
            height={40}
          />
          <p>
            Strives to alleviate suffering, because it is compassionate, but
            occasionally circumstances.
          </p>
          <div className={styles.socialIcons}>
            <ul>
              <li>
                <Link
                  href="https://www.instagram.com/daro-nigeria"
                  target="_blank"
                >
                  <IoLogoInstagram size={20} />
                </Link>
              </li>
              <li>
                <Link
                  href="whatsapp://send?text=Hello, I am interested in learning more about your NGO. Could you please provide more details?&phone=+234xxxxxxxx"
                  target="_blank"
                >
                  <IoLogoWhatsapp size={20} />
                </Link>
              </li>
              <li>
                <Link href="https://web.facebook.com/daro" target="_blank">
                  <IoLogoFacebook size={20} />
                </Link>
              </li>
              <li>
                <Link href="https://x.com/daro" target="_blank">
                  <IoLogoTwitter size={20} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Explore Section */}
        <div className={styles.footerSection}>
          <h3>
            EXPLORE <span>—</span>
          </h3>
          <ul>
            <li>
              <Link href="#">About Daro</Link>
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
              <Link href="#">Contact</Link> | <Link href="#">FAQ</Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className={styles.footerSection}>
          <h3>
            CONTACT <span>—</span>
          </h3>
          <p>#31 Airport Road, Lagos, Nigeria</p>
          <p>
            <IoMailOpen size={20} style={{ marginRight: "5px" }} />
            <Link href="mailto:info@daro.ng.org">info@daro.ng.org</Link>
          </p>
          <p>
            <IoCall size={20} /> +234 7032 9429 93
          </p>
          <p>
            <IoCall size={20} /> +234 7064 7991 93
          </p>
          {/* <p>
          <Link href="#">Messages</Link> | <Link href="#">Logout</Link>
        </p> */}
        </div>

        {/* Projects Section */}
        <div className={styles.footerProjects}>
          <h3>
            PROJECTS <span>—</span>
          </h3>
          <div className={styles.projectGrid}>
            <Image
              src="/images/footer/footer1.jpg"
              alt="Project 1"
              width={80}
              height={80}
            />
            <Image
              src="/images/footer/footer2.jpg"
              alt="Project 2"
              width={80}
              height={80}
            />
            <Image
              src="/images/footer/footer3.webp"
              alt="Project 3"
              width={80}
              height={80}
            />
            <Image
              src="/images/footer/footer4.jpg"
              alt="Project 4"
              width={80}
              height={80}
            />
            <Image
              src="/images/footer/footer5.jpg"
              alt="Project 5"
              width={80}
              height={80}
            />
            <Image
              src="/images/footer/footer6.jpg"
              alt="Project 6"
              width={80}
              height={80}
            />
          </div>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className={styles.footerBottom}>
        <p>
          © 2024 -{new Date().toLocaleDateString("en-US", { year: "numeric" })}{" "}
          | Daro Nigeria. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { signOut } from "next-auth/react";
// import { useRouter } from "next/router";
// import {
//   IoLogoFacebook,
//   IoLogoLinkedin,
//   IoLogoTwitter,
//   IoLogoWhatsapp,
// } from "react-icons/io5";
// // import LoginModal from "./login";
// // import { countProps } from "../lib/helpers";
// // import { fetchMessages } from "@/utils/util-fetch";
// import styles from "./Footer.module.css";

// const style = {
//   position: "relative",
//   display: "inline-block",
// };

// const badgeStyle = {
//   position: "absolute",
//   top: "-5px",
//   right: "-9px",
//   backgroundColor: "red",
//   width: "20px",
//   height: "20px",
//   color: "white",
//   borderRadius: "50%",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   fontSize: "12px",
// };

// export default function Footer({ session }) {
//   const router = useRouter();
//   const [isOpen, setIsOpen] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [isUser, setIsUser] = useState(false);
//   const [allItems, setAllItems] = useState();

//   //   useEffect(() => {
//   //     const getAllMessages = async () => {
//   //       setAllItems(await fetchMessages());
//   //     };
//   //     getAllMessages();
//   //   }, []);

//   //   useEffect(() => {
//   //     if (isOpen) return setShowModal(true);
//   //     return setShowModal(false);
//   //   }, [isOpen]);

//   //   const closeModal = () => {
//   //     setShowModal(false);
//   //     setIsOpen(false);
//   //   };

//   const handleUser = async (state) => {
//     if (!state) {
//       await signOut({ redirect: false });
//       setIsUser(false);
//     } else {
//       setIsUser(true);
//     }
//   };

//   const messages = () => {
//     router.push("/message");
//   };

//   return (
//     <>
//       <footer className={styles.mainFooter}>
//         <div className={styles.iconDots2}></div>
//         <div className={styles.widgetsSection}>
//           <div className={styles.autoContainer}>
//             <div className={styles.row}>
//               <div className={`${styles.footerColumn} ${styles.colXl4}`}>
//                 <div className={styles.aboutWidget}>
//                   <div className={styles.widgetContent}>
//                     <div className={styles.logo}>
//                       <Link href="/">
//                         <img src="images/logo.png" alt="" />
//                       </Link>
//                     </div>
//                     <div className={styles.text}>
//                       Desires to obtain pain of itself, because it is pain, but{" "}
//                       <br />
//                       occasionally circumstances.
//                     </div>
//                     <ul className={styles.socialIconTwo}>
//                       <li>
//                         <Link
//                           href="https://www.linkedin.com/company/daro-nigeria"
//                           target="_blank"
//                         >
//                           <IoLogoLinkedin size={20} />
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           href="whatsapp://send?text=Hello, I am interested in learning more about your NGO. Could you please provide more details?&phone=+234xxxxxxxx"
//                           target="_blank"
//                         >
//                           <IoLogoWhatsapp size={20} />
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           href="https://web.facebook.com/daro"
//                           target="_blank"
//                         >
//                           <IoLogoFacebook size={20} />
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="https://x.com/daro" target="_blank">
//                           <IoLogoTwitter size={20} />
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>

//               <div className={`${styles.footerColumn} ${styles.colXl2}`}>
//                 <div className={styles.linksWidget}>
//                   <h5 className={styles.widgetTitle}>Explore</h5>
//                   <div className={styles.widgetContent}>
//                     <ul className={styles.userLinks}>
//                       <li>
//                         <Link href="#">About Organization</Link>
//                       </li>
//                       <li>
//                         <Link href="#">Meet the Team</Link>
//                       </li>
//                       <li>
//                         <Link href="#">News & Media</Link>
//                       </li>
//                       <li>
//                         <Link href="#">Our Projects</Link>
//                       </li>
//                       <li>
//                         <Link href="contact">Contact</Link> &nbsp; &#9758;
//                         &nbsp;
//                         <Link href="faq">FAQ</Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>

//               <div className={`${styles.footerColumn} ${styles.colXl3}`}>
//                 <div className={styles.contactWidget}>
//                   <h5 className={styles.widgetTitle}>Contact</h5>
//                   <div className={styles.widgetContent}>
//                     <div className={styles.text}>
//                       #31 Airport Road, Lagos, Nigeria
//                     </div>
//                     <ul className={styles.contactList}>
//                       <li className={styles.contactInfo}>
//                         <i className="icon fa fa-envelope"></i>
//                         <Link href="#" className="mailto:info@daro.com">
//                           info@daro.com
//                         </Link>
//                       </li>
//                       <li className={styles.contactInfo}>
//                         <i className="icon fa fa-phone"></i>
//                         <Link href="#" className="tel:+234xxxxxxxx">
//                           +234 xxxxxxxxx
//                         </Link>
//                       </li>
//                       <li className={styles.contactInfo}>
//                         <i className="icon fa fa-phone"></i>
//                         <Link href="#" className="tel:+234xxxxxxxx">
//                           +234 xxxxxxxxxxx
//                         </Link>
//                       </li>
//                       {isUser ? (
//                         <li className={styles.contactInfo}>
//                           <i className="icon fa fa-message"></i>
//                           <span
//                             className={styles.login}
//                             onClick={messages}
//                             style={style}
//                           >
//                             Messages
//                             {countProps(allItems, false) ? (
//                               <span style={badgeStyle}>
//                                 {countProps(allItems, false)}
//                               </span>
//                             ) : (
//                               ""
//                             )}
//                           </span>
//                           &nbsp; | &#9758; | &nbsp;
//                           <span
//                             className={styles.login}
//                             onClick={() => handleUser(false)}
//                           >
//                             Logout
//                           </span>
//                         </li>
//                       ) : (
//                         <li className={styles.contactInfo}>
//                           {/* <i className="icon fa fa-sign"></i>
//                           <span
//                             className={styles.login}
//                             onClick={() => setIsOpen(!isOpen)}
//                           >
//                             Login
//                           </span> */}
//                         </li>
//                       )}
//                     </ul>
//                   </div>
//                 </div>
//               </div>

//               <div className={`${styles.footerColumn} ${styles.colXl3}`}>
//                 <div className={styles.galleryWidget}>
//                   <h4 className={styles.widgetTitle}>Projects</h4>
//                   <div className={styles.widgetContent}>
//                     <div className={styles.instaGallery}>
//                       {[1, 2, 3, 4, 5, 6].map((num) => (
//                         <figure key={num} className={styles.image}>
//                           <Link href="#">
//                             <img
//                               src={`images/resource/gallery-thumb-${num}.jpg`}
//                               alt=""
//                             />
//                           </Link>
//                         </figure>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className={styles.footerBottom}>
//           <div className={styles.autoContainer}>
//             <div className={styles.copyrightText}>
//               © 2024 -{" "}
//               {new Date().toLocaleDateString("en-US", { year: "numeric" })} |
//               Daro Nigeria. All rights reserved.
//             </div>
//           </div>
//         </div>
//       </footer>
//       {/* <LoginModal
//         showModal={showModal}
//         closeModal={closeModal}
//         handleUser={handleUser}
//         session={session}
//       /> */}
//     </>
//   );
// }
