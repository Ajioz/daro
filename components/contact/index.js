import styles from "./contact.module.css";
import { FaPhoneAlt, FaEnvelope, FaChurch } from "react-icons/fa";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h2 className={styles.title}>Get in Touch</h2>
          <p className={styles.description}>
            Have questions or need assistance? We're here to help. Reach out to
            us anytime, and we'll get back to you as soon as possible.
          </p>

          <div className={styles.contactItem}>
            <div className={styles.iconBox}>
              {/* <FaMapMarkerAlt color="white" /> */}
              <FaChurch color="white" />
            </div>
            <div>
              <h4 className={styles.contactDetailsTitle}>Donate Here</h4>
              <p className={styles.contactDetailsText}>
                DIVINE ASSISTANCE RELIEF ORGANIZATION
              </p>
              <p>1027650209 UBA</p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.iconBox}>
              <FaPhoneAlt color="white" />
            </div>
            <div>
              <h4 className={styles.contactDetailsTitle}>Call Us</h4>
              <p className={styles.contactDetailsText}>+234-703-294-2993</p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.iconBox}>
              <FaEnvelope color="white" />
            </div>
            <div>
              <h4 className={styles.contactDetailsTitle}>Email Us</h4>
              <p className={styles.contactDetailsText}>
                support@daronigeria.org
              </p>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <h2 className={styles.title}>Contact Us</h2>
          <form className={styles.form}>
            <div className={styles.row}>
              <input
                type="text"
                placeholder="First Name"
                className={styles.inputField}
              />
              <input
                type="text"
                placeholder="Last Name"
                className={styles.inputField}
              />
            </div>
            <div className={styles.row}>
              <input
                type="email"
                placeholder="Your Email"
                className={styles.inputField}
              />
              <input
                type="text"
                placeholder="Subject"
                className={styles.inputField}
              />
            </div>
            <textarea
              placeholder="Write your message here..."
              className={styles.textarea}
            ></textarea>
            <button type="submit" className={styles.button}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
