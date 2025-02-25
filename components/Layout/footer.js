import styles from "./Footer.module.css";
import Image from "next/image";
import {
  IoCall,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoWhatsapp,
  IoLogoYoutube,
  IoMailOpen,
} from "react-icons/io5";
import Link from "next/link";
import NewsLetter from "../Home/Blog/newsLetter";

const Footer = () => {
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
                  href="whatsapp://send?text=Hello, I am interested in learning more about your NGO. Could you please provide more details?&phone=+2347032942993"
                  target="_blank"
                >
                  <IoLogoWhatsapp size={20} />
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/share/15zivZkprA/" target="_blank">
                  <IoLogoFacebook size={20} />
                </Link>
              </li>
              <li>
                <Link href="https://youtube.com/@daronigeria?si=oOXRbxEXtVRxNxCM" target="_blank">
                  <IoLogoYoutube size={20} />
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
            <IoCall size={20} /> +234 7032942993
          </p>
          <p>
            <IoCall size={20} /> +234 7064799193
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
        <p style={{ color: "#fff" }}>
          powered by{" "}
          <Link
            href="https://ajiozi.com"
            target="_blank"
            style={{ color: "skyblue"}}
          >
            Ajiozi
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
