import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { MdMail } from "react-icons/md";
import { FaUser, FaLock } from "react-icons/fa";
import styles from "./sendform.module.scss";

const nameValidation = /^([^0-9]*)$/;
const emailRegular =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneValidation = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

export function SendForm() {
  const schema = yup.object().shape({
    firstName: yup
      .string()
      .min(4, "The name's too short")
      .max(32, "The name's too long")
      .matches(nameValidation, "First Name should not contain numbers")
      .required("First Name is a required field"),
    lastName: yup
      .string()
      .min(4, "The name's too short")
      .max(32, "The name's too long")
      .matches(nameValidation, "Last Name should not contain numbers")
      .required("Last Name is a required field"),
    email: yup
      .string()
      .email("Email should have correct format")
      .required("Email is a required field"),
    phone: yup
      .string()
      .matches(phoneValidation, "Phone number is not valid")
      .required("Phone number is a required field"),
    message: yup
      .string()
      .matches(phoneValidation, "Try to keep the text short and informative")
      .required("The field should contain brief information"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const [disabledButton, setDisabledButton] = useState(false);

  const onSubmit = (data) => {
    reset();
    alert(JSON.stringify("datas2:", data));
  };

  return (
    <section className={styles.send_form}>
      <div className={styles.send_form__content}>
        <form
          // action=""
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className={styles.form__row}>
            <label className={`${styles.label} ${errors?.firstName ? styles.error : ''}`}>
              <FaUser className={styles.icon} />
              <input
                type="text"
                name={"firstname"}
                placeholder={"First Name"}
                className={styles.input}
                {...register("firstName")}
              />
            </label>
            {errors?.firstName && (
              <span className={styles.error}>{errors?.firstName?.message}</span>
            )}
          </div>
          <div className={styles.form__row}>
            <label className={styles.label}>
              <FaUser className={styles.icon} />
              <input
                type="text"
                name={"lastname"}
                placeholder={"Last Name"}
                className={styles.input}
                {...register("lastname")}
              />
            </label>
            {errors?.lastName && (
              <span className={styles.error}>{errors?.lastName?.message}</span>
            )}
          </div>
          <div className={styles.form__row}>
            <label className={styles.label}>
              <MdMail className={styles.icon} />
              <input
                type="email"
                name={"email"}
                placeholder={"Email"}
                className={styles.input}
                {...register("email")}
              />
            </label>
            {errors?.email && (
              <span className={styles.error}>{errors?.email?.message}</span>
            )}
          </div>
          <div className={styles.form__row}>
            <label className={styles.label}>
              <select
                name="country-phone-number"
                id="country-phone-number"
                className={styles.select}
              >
                <option value="">SELECT 1</option>
                <option value="">SELECT 2</option>
                <option value="">SELECT 3</option>
              </select>
              <input
                type="tel"
                name={"phone"}
                placeholder={"000-000-0000"}
                className={styles.input}
                {...register("phone")}
              />
            </label>
            {errors?.phone && (
              <span className={styles.error}>{errors?.phone?.message}</span>
            )}
          </div>
          <div className={styles.form__row}>
            <label className={styles.label}>
              <textarea
                name={"message"}
                placeholder={"Message"}
                className={styles.message}
                {...register("message")}
              />
            </label>
            {errors?.message && (
              <span className={styles.error}>{errors?.message?.message}</span>
            )}
          </div>
          <button
            type="submit"
            disabled={disabledButton}
            className={styles.submit}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
