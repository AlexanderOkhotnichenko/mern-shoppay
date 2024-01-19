import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import Swal from "sweetalert2";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { MdMail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { SendEmail } from "../../../API/API";
import "react-phone-input-2/lib/style.css";
import styles from "./sendform.module.scss";

const nameValidation = /^([^0-9]*)$/;

export function SendForm() {
  const [disabledButton, setDisabledButton] = useState(false);
  const [send, setSend] = useState(false);
  const [dataSend, setDataSend] = useState("");

  const schema = yup.object().shape({
    firstName: yup
      .string()
      .min(4, "The name's too short.")
      .max(32, "The name's too long.")
      .matches(nameValidation, "First Name should not contain numbers.")
      .required("First Name is a required field."),
    lastName: yup
      .string()
      .min(4, "The name's too short.")
      .max(32, "The name's too long.")
      .matches(nameValidation, "Last Name should not contain numbers.")
      .required("Last Name is a required field."),
    email: yup
      .string()
      .email("Email should have correct format.")
      .required("Email is a required field."),
    phone: yup
      .string()
      .min(11, "Incorrect phone number. Minimum length 10 digits.")
      .max(15, "Incorrect phone number. Maximum length 15 digits.")
      .required("Phone number is a required field."),
    message: yup
      .string()
      .min(50, "The text must contain a minimum of 50 letters.")
      .max(500, "Try to keep the text short and informative.")
      .required("The field should contain brief information."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
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

  const onSubmit = (data) => {
    SendEmail(data);
    // reset();
  };

  return (
    <section className={styles.send_form}>
      <div className={styles.send_form__content}>
        <form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <h1 className={styles.form__title}>Contact Us</h1>
          <div className={styles.form__line}>
            <div className={styles.form__row}>
              <label
                className={`${styles.label} ${
                  errors?.firstName?.message ? styles.error : ""
                }`}
              >
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
                <span className={styles.error_message}>
                  {errors?.firstName?.message}
                </span>
              )}
            </div>
            <div className={styles.form__row}>
              <label
                className={`${styles.label} ${
                  errors?.lastName?.message ? styles.error : ""
                }`}
              >
                <FaUser className={styles.icon} />
                <input
                  type="text"
                  name={"lastName"}
                  placeholder={"Last Name"}
                  className={styles.input}
                  {...register("lastName")}
                />
              </label>
              {errors?.lastName && (
                <span className={styles.error_message}>
                  {errors?.lastName?.message}
                </span>
              )}
            </div>
          </div>
          <div className={styles.form__row}>
            <label
              className={`${styles.label} ${
                errors?.email?.message ? styles.error : ""
              }`}
            >
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
              <span className={styles.error_message}>
                {errors?.email?.message}
              </span>
            )}
          </div>
          <div className={styles.form__row}>
            <label
              className={`${styles.label} ${
                errors?.phone?.message ? styles.error : ""
              }`}
            >
              <MdOutlinePhoneIphone className={styles.icon} />
              <Controller
                name="phone"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <PhoneInput
                    value={value}
                    onChange={onChange}
                    country="us"
                    enableSearch={true}
                    disableSearchIcon={true}
                    dropdownClass={styles.dropdown}
                    buttonClass={styles.dropdown_button}
                    inputClass={`${styles.input} ${styles.phone}`}
                    searchClass={styles.search}
                  />
                )}
              />
            </label>
            {errors?.phone && (
              <span className={styles.error_message}>
                {errors?.phone?.message}
              </span>
            )}
          </div>
          <div className={styles.form__row}>
            <label
              className={`${styles.label} ${
                errors?.message?.message ? styles.error : ""
              }`}
            >
              <textarea
                rows={4}
                name={"message"}
                placeholder={"Message"}
                className={styles.message}
                {...register("message")}
              />
            </label>
            {errors?.message && (
              <span className={styles.error_message}>
                {errors?.message?.message}
              </span>
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
