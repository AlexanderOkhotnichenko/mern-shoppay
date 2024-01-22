import { AiOutlineThunderbolt } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { GrRevert } from "react-icons/gr";
import { SlPaypal } from "react-icons/sl";

export const data = [
  {
    title: "Find your favourite model",
    text: "Explore our range of products goods to find your perfect match",
    link: {
      href: "/shop",
      text: "Check out",
    },
    icon: <AiOutlineThunderbolt />,
  },
  {
    title: "Free shipping globally",
    text: "Free shipping for orders over $100 worldwide including duties and customs.",
    icon: <BsTruck />,
  },
  {
    title: "Easy returns",
    text: "Easy returns in North America within 30 days Just contact our team for support!",
    link: {
      href: "/contact",
      text: "Contact",
    },
    icon: <GrRevert />,
  },
  {
    title: "Payment with PayPal!",
    text: "Pay for goods from the comfort of your home with PayPal, MasterCard, Visa, Google Pay, Apple Pay!",
    icon: <SlPaypal />,
  },
];
