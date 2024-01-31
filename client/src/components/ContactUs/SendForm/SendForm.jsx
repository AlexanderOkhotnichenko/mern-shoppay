import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import Swal from "sweetalert2";
import { TailSpin } from "react-loading-icons";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { MdMail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { useSizeWindow } from "../../../hooks/useSizeWindow";
import { schema } from "../../../utils/schema";
import { SendEmail } from "../../../API/API";
import styles from "./sendform.module.scss";
import "react-phone-input-2/lib/style.css";
import "../../../sweetalert2.scss";

const SwalOptionsToast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3500,
  customClass: {
    container: 'send-mail-swal2-container',
  },
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

const SwalOptionsModal = Swal.mixin({
  customClass: {
    container: 'send-mail-swal2-container',
  },
});

export function SendForm() {
  const [loading, setLoading] = useState(false);
  const [send, setSend] = useState("");
  const [width] = useSizeWindow();
  const breakpoint = 425;

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
    SendEmail(data, { setSend, setLoading });
    reset();
  };

  useEffect(() => {
    if (send) {
      if (width <= breakpoint) {
        SwalOptionsModal.fire({
          title: `${send?.message}!`,
          icon: "success",
        });
      } else {
        SwalOptionsToast.fire({
          title: `${send?.message}!`,
          icon: "success",
        });
      }

      setSend('');
    }
  }, [send, width]);

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
          <button type="submit" disabled={loading} className={styles.submit}>
            {loading ? <TailSpin className={styles.loading} /> : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}
