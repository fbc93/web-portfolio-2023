import { navigate } from "gatsby";
import React from "react";
import { FiArrowLeftCircle } from "react-icons/fi";
import * as GoBackStyles from "../../styles/components/detail/GoBackBtn.module.scss";

export default function GoBackBtn() {
  return (
    <button className={GoBackStyles.go_back_btn} onClick={() => navigate(-1)}>
      <FiArrowLeftCircle />
      <span>Go Back</span>
    </button>
  );
}