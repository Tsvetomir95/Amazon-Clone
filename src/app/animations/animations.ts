import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from "@angular/animations";

export const openMenu = trigger("openMenu", [
  // ...
  state(
    "false",
    style({
      position: "absolute",
      zIndex: "900",
      width: "0",
      left: "-250px",
      height: "90vh",
      backgroundColor: "white",
      top: "60px",
    })
  ),
  state(
    "true",
    style({
      position: "fixed",
      zIndex: "900",
      width: "250px",
      left: "0",
      height: "90vh",
      backgroundColor: "#131921",
      // maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
      boxShadow: "0 3px 3px 3px rgba(0,0,0,0.2)",
      top: "60px",
    })
  ),

  transition("false => true", [animate("0.5s")]),
  transition("true => false", [animate("0.5s")]),
]);
