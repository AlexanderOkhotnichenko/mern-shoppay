import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { Link, NavLink } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { BurgerMenu } from "../BurgerMenu";
import { RxExit } from "react-icons/rx";
import { Icon } from "../Icon";
import { useSelector } from "react-redux";
import styles from "./header.module.scss";

export function Header() {
  const cookies = new Cookies();
  const products = useSelector((state) => state.cart.products);
  const [isOpen, setIsOpen] = useState(false);

  const activeIcon = ({ isActive }) =>
    isActive ? styles.icon_active : styles.icon;
  const activePage = ({ isActive }) =>
    isActive ? styles.link_active : styles.link;

  const handleLogout = () => {
    cookies.remove("token");
    cookies.remove("user");
    // setCookie("user", user, { path: "/" });
    if (!cookies.get("token") && !cookies.get("auth")) {
      window.location.reload("/");
    }
  };

  const user = cookies.get("token");
  const userEmail = cookies.get("user");

  useEffect(() => {
    const scrollWidth =
      window.innerWidth - document.querySelector("main").offsetWidth + "px";

    if (isOpen) {
      document.body.classList.add("is_lock");
      document.body.style.paddingRight = scrollWidth;
    } else {
      document.body.classList.remove("is_lock");
      document.body.style.paddingRight = 0;
    }
  }, [isOpen]);

  return (
    <header className={`${styles.header} ${isOpen ? styles.is_open : ""}`}>
      <div className={styles.header__content}>
        <Link to={"/"} className={styles.logo_link}>
          <Icon id={"shoppay"} className={styles.logo} />
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.nav__wrapper}>
            <li className={styles.nav__item} onClick={() => setIsOpen(false)}>
              <NavLink to={"/"} className={activePage}>
                Home
              </NavLink>
            </li>
            <li className={styles.nav__item} onClick={() => setIsOpen(false)}>
              <NavLink to={"/about"} className={activePage}>
                About
              </NavLink>
            </li>
            <li className={styles.nav__item} onClick={() => setIsOpen(false)}>
              <NavLink to={"/shop"} className={activePage}>
                Shop
              </NavLink>
            </li>
            <li className={styles.nav__item} onClick={() => setIsOpen(false)}>
              <NavLink to={"/contact"} className={activePage}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.overlay} onClick={() => setIsOpen(false)}></div>
        <div className={styles.nav_icons}>
          {user && (
            <NavLink to={"/basket"} className={activeIcon} title={"Basket"}>
              <FaShoppingCart className={styles.icon} />
              <span className={styles.count}>{products.length}</span>
            </NavLink>
          )}
          {user && (
            <RxExit
              className={styles.logout}
              title={"Logout"}
              onClick={handleLogout}
            />
          )}
          {userEmail && (
            <div title={userEmail} className={styles.user_name}>
              {userEmail}
            </div>
          )}
          {!user && (
            <NavLink to={"/signup"} className={activeIcon}>
              <FaUser className={styles.icon} />
            </NavLink>
          )}
        </div>
        <BurgerMenu onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      </div>
    </header>
  );
}
