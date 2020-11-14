import React from "react";
import logo from "./Logo.svg";
import classes from './logo.module.scss';
const {logo_block} = classes;

export default function Logo() {
  return (
    <>
      <div className={logo_block}>
        <img src={logo} alt="logo" width={60} height={60} />
      </div>
    </>
  );
}
