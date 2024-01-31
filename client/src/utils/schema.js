import * as yup from "yup";

export const schema = yup.object().shape({
  firstName: yup
    .string()
    .min(4, "The name's too short.")
    .max(32, "The name's too long.")
    .trim()
    .matches(/^([^0-9]*)$/, "First Name should not contain numbers.")
    .required("First Name is a required field."),
  lastName: yup
    .string()
    .min(4, "The name's too short.")
    .max(32, "The name's too long.")
    .trim()
    .matches(/^([^0-9]*)$/, "Last Name should not contain numbers.")
    .required("Last Name is a required field."),
  email: yup
    .string()
    .email("Email should have correct format.")
    .trim()
    .required("Email is a required field."),
  phone: yup
    .string()
    .min(11, "Incorrect phone number. Minimum length 10 digits.")
    .max(15, "Incorrect phone number. Maximum length 15 digits.")
    .trim()
    .required("Phone number is a required field."),
  message: yup
    .string()
    .min(50, "The text must contain a minimum of 50 letters.")
    .max(500, "Try to keep the text short and informative.")
    .trim()
    .required("The field should contain brief information."),
});