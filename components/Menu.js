import Router from "next/router";
import classes from "./Menu.module.scss";
import Image from "next/legacy/image";
import MinimalTechLab from "@/assets/MinimalTechLab.svg";
import logo from "@/assets/lab.png";

export default function Menu() {
  return (
    <div className={classes.container}>
      <div className={classes.largeMenu}>
        <Image
          width={220}
          height={220}
          src={MinimalTechLab}
          alt="logo"
          onClick={() => Router.push("/")}
          priority
        />
        <Image
          width={80}
          height={70}
          src={logo}
          alt="logo"
          onClick={() => Router.push("/")}
          priority
        />
      </div>
    </div>
  );
}
