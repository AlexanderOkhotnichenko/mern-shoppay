import React from "react";
import { Cookies } from "react-cookie";
import { Link, NavLink } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { BurgerMenu } from "../BurgerMenu";
import { RxExit } from "react-icons/rx";
import { Icon } from "../Icon";
import styles from "./header.module.scss";
import { useSelector } from "react-redux";

export function Header() {
  const cookies = new Cookies();
  const products = useSelector(state => state.cart.products);
  const activeIcon = ({ isActive }) =>
    isActive ? styles.nav__icon_active : styles.nav__icon;
  const activePage = ({ isActive }) =>
    isActive ? styles.nav__link_active : styles.nav__link;

  const handleLogout = () => {
    cookies.remove("token");
    cookies.remove("user");
    window.location.reload();
  };

  const user = cookies.get("token");
  const userEmail = cookies.get("user");

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Link to={"/"}>
          <Icon id={"shoppay"} className={styles.header__logo} />
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.nav__wrapper}>
            <li className={styles.nav__item}>
              <NavLink to={"/"} className={activePage}>
                Home
              </NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink to={"/about"} className={activePage}>
                About
              </NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink to={"/shop"} className={activePage}>
                Shop
              </NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink to={"/contact"} className={activePage}>
                Contact
              </NavLink>
            </li>
          </ul>
          <div className={styles.nav__icons}>
            {user && (
              <NavLink to={"/basket"} className={activeIcon} title={"Basket"}>
                <FaShoppingCart className={styles.nav__icon} />
                <span className={styles.count}>{products.length}</span>
              </NavLink>
            )}
            {user && <RxExit className={styles.nav__logout} title={"Logout"} onClick={handleLogout} />}
            {userEmail && <div title={userEmail} className={styles.nav__user_name}>{userEmail}</div>}
            {!user && (
              <NavLink to={"/signup"} className={activeIcon}>
                <FaUser className={styles.nav__icon} />
              </NavLink>
            )}
          </div>
        </nav>
        <BurgerMenu />
      </div>
    </header>
  );
}
