// ... existing code ...

import styles from "@/styles/Footer.module.css";

export default function Footer() {
  // ... existing code ...

  return (
    <>
      <footer className={styles.mainFooter}>
        <div className={styles.widgetsSection}>
          <div className={styles.autoContainer}>
            <div className={styles.row}>
              <div className={`${styles.footerColumn} ${styles.colXl4}`}>
                <div className={styles.aboutWidget}>
                  <div className={styles.logo}>
                    <Link href="/">
                      <img src="images/logo.png" alt="" />
                    </Link>
                  </div>
                  <div className={styles.text}>
                    Desires to obtain pain of itself, because it is pain, but
                    occasionally circumstances.
                  </div>
                  <ul className={styles.socialIconTwo}>
                    {/* ... existing social icons ... */}
                  </ul>
                </div>
              </div>

              <div className={`${styles.footerColumn} ${styles.colXl2}`}>
                <div className={styles.linksWidget}>
                  <h5 className={styles.widgetTitle}>Explore</h5>
                  <ul className={styles.userLinks}>
                    {/* ... existing links ... */}
                  </ul>
                </div>
              </div>

              {/* ... rest of the footer sections ... */}
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.autoContainer}>
            <div className={styles.copyrightText}>
              © 2017 -{" "}
              {new Date().toLocaleDateString("en-US", { year: "numeric" })} |
              Daro Nigeria. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
