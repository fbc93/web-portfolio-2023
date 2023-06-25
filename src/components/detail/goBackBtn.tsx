import { Link, navigate } from "gatsby";
import React from "react";
import { FiArrowLeftCircle } from "react-icons/fi";
import * as GoBackStyles from "../../styles/components/detail/GoBackBtn.module.scss";

export default function GoBackBtn() {
  return (
    <Link to="/" className={GoBackStyles.go_back_btn}>
      <FiArrowLeftCircle />
      <span>Go Back</span>
    </Link>
  );
}