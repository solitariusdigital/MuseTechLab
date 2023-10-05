import { useContext } from "react";
import { StateContext } from "@/context/stateContext";
import Router from "next/router";
import classes from "./Menu.module.scss";
import Image from "next/legacy/image";
import MuseTechLab from "@/assets/MuseTechLab.svg";
import logo from "@/assets/lab.png";

export default function Menu() {
  const { language, setLanguage } = useContext(StateContext);

  return (
    <div className={classes.container}>
      <div className={classes.largeMenu}>
        <Image
          width={220}
          height={100}
          src={MuseTechLab}
          alt="logo"
          onClick={() => Router.push("/")}
          priority
        />
        <div className={classes.row} onClick={() => setLanguage(!language)}>
          <p>{!language ? "English" : "فارسی"}</p>
          <Image
            width={70}
            height={60}
            src={logo}
            alt="logo"
            onClick={() => Router.push("/")}
            priority
          />
        </div>
      </div>
    </div>
  );
}
