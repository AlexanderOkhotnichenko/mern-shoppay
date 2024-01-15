import React from "react";
import { Banner } from "../components/Home/Banner";
import { Featureds } from "../components/Home/Featureds";
import { DesignModel } from "../components/Home/DesignModel";
import { TypesPayment } from "../components/Home/TypesPayment";
import { Advantages } from "../components/Home/Advantages";
import { Categories } from "../components/Home/Categories";
import { resetPagePosition } from "../resetPagePosition";

export function HomePage() {
  resetPagePosition(0, 0);

  return (
    <>
      <Banner />
      <Featureds />
      <DesignModel />
      <TypesPayment />
      <Advantages />
      <Categories />
    </>
  );
}
