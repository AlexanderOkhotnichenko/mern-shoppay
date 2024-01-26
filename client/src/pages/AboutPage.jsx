import React from "react";
import { Banner } from "../components/About/Banner";
import { OurValues } from "../components/About/OurValues";
import { ExtendedInformation } from "../components/About/ExtendedInformation";
import { Recommendations } from "../components/About/Recommendations";
import { resetPagePosition } from "../resetPagePosition";
import ethos_values_1 from "../assets/img/ethos_values_1.webp";
import ethos_values_2 from "../assets/img/ethos_values_2.webp";
import styles from "../App.module.scss";

const options_1 = {
  title: "Who We Are",
  text: {
    0: 'Shoppay is a socially and environmentally progressive brand of outdoor footwear and accessories. We are made up of a small ragtag band of industry outsiders from around the world.',
    1: 'We have big imaginations but we listen, think and act carefully. We believe that positive change happens when even simple ideas are given wings. Our ideas are brought to life through connection, commitment, and design simplicity.',
  }
};

const options_2 = {
  title: "Transparency",
  text: {
    0: 'At Thesus we believe that honesty and transparency are the most important drivers in ensuring progress is made for People and the Planet. We reveal our entire materials list on each product page, so there are no questions left unanswered.',
    1: 'We are always looking to be better at what we do. That means, we are constantly on the lookout for new and innovative materials and partners. If you have any suggestions or direction, please reach out to us at support@test.com.',
  }
};

export function AboutPage() {
  resetPagePosition(0, 0);
  
  return (
    <>
      <Banner />
      <OurValues />
      <img src={ethos_values_1} alt="Ethos Values 1" className={styles.about_page_image} />
      <ExtendedInformation options={options_1} />
      <img src={ethos_values_2} alt="Ethos Values 2" className={styles.about_page_image} />
      <ExtendedInformation options={options_2} />
      <Recommendations />
    </>
  );
}
