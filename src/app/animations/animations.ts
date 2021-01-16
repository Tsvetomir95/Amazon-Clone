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
      zIndex: "-1",
      transform: 'translateX(-250px)',
      height: "90vh",
      left: '-250px',
      top: "60px",
      backgroundColor: "#131921",
    })
  ),
  state(
    "true",
    style({
      position: "fixed",
      zIndex: "900",
      transform: 'translateX(0)',
      left: "0",
      height: "90vh",
      backgroundColor: "#131921",
      // maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
      boxShadow: "0 3px 3px 3px rgba(0,0,0,0.2)",
      top: "60px",
      
    })
  ),

  transition("false <=> true", [animate("0.7s ease-in-out")]),
  // transition("true => false", [animate("0.3s ease-in-out")]),
]);
export const modalAnimation = trigger("modalAnimation", [
  // ...
  state(
    "false",
    style({
      opacity: 0,
      visibility: 'hidden',
      position: 'absolute',
     display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
     width: '100%',
    })
  ),
  state(
    "true",
    style({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      opacity: 1,
      visibility: 'visible',
     height: '100vh',
     width: '100%',
     backgroundColor: 'rgba(0, 0, 0, 0.555)',
     zIndex: 40,
    })
  ),

  transition("false <=> true", [animate("0.5s")]),
  // transition("true => false", [animate("0.7s")]),
]);

export const overlay = trigger("overlay", [
  // ...
  state(
    "false",
    style({
      opacity: 0,
      visibility: 'hidden',
    })
  ),
  state(
    "true",
    style({
      opacity: 1,
      visibility: 'visible',
      
      width: '100vw',
     height: '100vh',
     zIndex: 40,
      
    })
  ),

  transition("false => true", [animate("0.3s")]),
  transition("true => false", [animate("0.3s")]),
]);
