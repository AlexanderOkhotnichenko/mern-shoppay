import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { TailSpin } from "react-loading-icons";
import styles from "./signup.module.scss";

export function SignUp() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [disabledButton, setDisabledButton] = useState(false);
  const [error, setError] = useState(false);
  const [create, setCreate] = useState("");
  const time = 3000;

  const handleData = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleTimeOut = () => {
    const timeout = setTimeout(() => {
      setCreate('');
    }, time);

    return () => clearTimeout(timeout);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setDisabledButton(true);
      const url = "http://localhost:8080/api/users";
      const response = await axios.post(url, data);
      setCreate(response.data.message);
      setData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
      setDisabledButton(false);
      setError('');
      handleTimeOut();
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        setDisabledButton(false);
      }
    }
  };

  return (
    <div className={styles.signup__container}>
      <form className={styles.signup__form} onSubmit={handleSubmit}>
        <h1 className={styles.signup__title}>Create Account</h1>
        <div className={styles.label__wrapper}>
          <div className={styles.label__content}>
            <label className={styles.label__label}>
              <FaUser className={styles.label__icon} />
              <input
                type="text"
                name={"firstName"}
                value={data.firstName}
                onChange={handleData}
                required
                placeholder={"First Name"}
                className={styles.label__input}
              />
            </label>
            <label className={styles.label__label}>
              <FaUser className={styles.label__icon} />
              <input
                type="text"
                name={"lastName"}
                value={data.lastName}
                onChange={handleData}
                required
                placeholder={"Last Name"}
                className={styles.label__input}
              />
            </label>
            <label className={styles.label__label}>
              <MdMail className={styles.label__icon} />
              <input
                type="email"
                name={"email"}
                value={data.email}
                onChange={handleData}
                required
                placeholder={"Email"}
                className={styles.label__input}
              />
            </label>
            <label className={styles.label__label}>
              <FaLock className={styles.label__icon} />
              <input
                type="password"
                name={"password"}
                value={data.password}
                onChange={handleData}
                required
                placeholder={"Password"}
                className={styles.label__input}
              />
            </label>
          </div>
          {error && <div className={styles.error_message}>{error}</div>}
          {create && <div className={styles.create_message}>{create}</div>}
        </div>
        <div className={styles.submit__wrapper}>
          <button
            disabled={disabledButton}
            type="submit"
            className={styles.submit__submit}
            onClick={() => console.log('click:', true)}
          >
            {disabledButton ? <TailSpin className={styles.submit_loading} /> : "Sign Up"}
          </button>
          <Link to={"/login"} className={styles.submit__link}>
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
