/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import { scroller } from "react-scroll";
import { NAVBAR_MENU } from "@/constants/navbarMenu";
import styles from "./Navbar.module.scss";
import cx from "classnames";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", whiteBgNavbar);
    return () => {
      window.removeEventListener("scroll", whiteBgNavbar);
    };
  }, []);

  const whiteBgNavbar = () => {
    if (window.scrollY >= 20) {
      setIsNavbarScrolled(true);
    } else {
      setIsNavbarScrolled(false);
    }
  };

  return (
    <div
      className={cx(styles.layout, {
        [styles.layoutScrolled]: isNavbarScrolled,
      })}
      id="navBar"
    >
      <div
        className={cx(styles.navbarlayout, {
          [styles.navScrolled]: isNavbarScrolled,
        })}
      >
        <div onClick={() => router.push("/")} className="cursor-pointer">
          <img
            className="w-20 h-20"
            src="/images/svg/macky-dark.svg"
            alt="logo-macky"
            draggable={false}
          />
        </div>
        <div className={styles.navbarMenu}>
          {NAVBAR_MENU.map((menu, key) => (
            <button
              key={menu.key}
              className={styles.menu}
              onClick={() => window.open(menu.link, "_blank")}
            >
              <img
                className="w-8 h-8"
                src={menu.imageDark}
                alt={menu.key}
                draggable={false}
              />
            </button>
          ))}
          {/* <div
            className="pl-5 hidden md:block"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1hgX9u40z6RaBJ7INk2pTmR3TOUtVCjzG/view?usp=sharing",
                "_blank"
              )
            }
          >
            <div className={styles.cvDownload}>
              <h6>Download CV</h6>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
