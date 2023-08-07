import { useContext } from "react";
import { TimeCtx } from "../../../context/TimeCtx";

function HourHand() {
  const { hours, minutes } = useContext(TimeCtx);
  const hDeg = 30 * hours + minutes / 2;
  return <div style={{ transform: `rotate(${hDeg}deg)` }} className="clock__hand--hours clock__hand"></div>;
}
export default HourHand;
