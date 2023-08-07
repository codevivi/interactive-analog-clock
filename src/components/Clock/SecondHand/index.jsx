import { useContext } from "react";
import { TimeCtx } from "../../../context/TimeCtx";

function SecondHand() {
  const { seconds } = useContext(TimeCtx);
  const sDeg = 6 * seconds + 6;
  return <div style={{ transform: `rotate(${sDeg}deg)` }} className="clock__hand--seconds clock__hand"></div>;
}
export default SecondHand;
