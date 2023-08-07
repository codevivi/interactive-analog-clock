import { useContext } from "react";
import { TimeCtx } from "../../../context/TimeCtx";

function MinuteHand() {
  const { minutes } = useContext(TimeCtx);
  const mDeg = 6 * minutes;
  return <div style={{ transform: `rotate(${mDeg}deg)` }} className="clock__hand--minutes clock__hand"></div>;
}
export default MinuteHand;
