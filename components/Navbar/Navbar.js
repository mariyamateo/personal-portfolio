/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import { scroller } from "react-scroll";
import { NAVBAR_MENU } from "@/constants/navbarMenu";
import styles from "./Navbar.module.scss";
import cx from "classnames";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isNavbarBgWhite, setIsNavbarBgWhite] = useState(false);
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", whiteBgNavbar);
    return () => {
      window.removeEventListener("scroll", whiteBgNavbar);
    };
  }, []);

  const whiteBgNavbar = () => {
    if (window.scrollY >= 20) {
      setIsNavbarBgWhite(true);
    } else {
      setIsNavbarBgWhite(false);
    }
  };

  const onClickNav = (link) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(link, {
          duration: 1000,
          delay: 0,
          smooth: "linear",
          offset: -20,
        });
      }, 300);
    } else {
      scroller.scrollTo(link, {
        duration: 1000,
        delay: 0,
        smooth: "linear",
        offset: 0,
      });
    }
  };

  return (
    <div className={styles.layout} id="navBar">
      <div
        className={cx(styles.navbarlayout, {
          [styles.navScrolled]: isNavbarBgWhite,
        })}
      >
        <div onClick={() => router.push("/")} className="cursor-pointer">
          <h4 className="text-[#7477FF]">macky</h4>
        </div>
        <div className={styles.navbarMenu}>
          {NAVBAR_MENU.map((menu, key) => (
            <button
              key={menu.key}
              className={styles.menu}
              onClick={() => onClickNav(menu.key)}
            >
              <h5>{menu.name}</h5>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
