import classes from "./Pyramid.module.scss";

export default function Pyramid() {
  return (
    <div className={classes.pyramidLoader}>
      <div className={classes.wrapper}>
        <span className={`${classes.side} ${classes.side1}`}></span>
        <span className={`${classes.side} ${classes.side2}`}></span>
        <span className={`${classes.side} ${classes.side3}`}></span>
        <span className={`${classes.side} ${classes.side4}`}></span>
        <span className={classes.shadow}></span>
      </div>
    </div>
  );
}
