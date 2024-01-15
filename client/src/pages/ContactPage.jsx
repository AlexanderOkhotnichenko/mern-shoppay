import React from "react";
import { resetPagePosition } from "../resetPagePosition";
import { SendForm } from "../components/ContactUs/SendForm";

export function ContactPage() {
  resetPagePosition(0, 0);

  return (
    <>
      <SendForm />
    </>
  );
}
