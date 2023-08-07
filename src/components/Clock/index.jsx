import "./style.css";
import { useEffect, useRef, useContext } from "react";
import DynamicBg from "../DynamicBg";
import DigitalClock from "../DigitalClock";
import HourHand from "./HourHand";
import MinuteHand from "./MinuteHand";
import SecondHand from "./SecondHand";
import Parts from "./Parts";
import { SettingsCtx } from "../../context/SettingsCtx";
import { ClockCtx } from "../../context/ClockCtx";
import { TimeProvider } from "../../context/TimeCtx";

const Clock = () => {
  const { isInteractive, isDigitalVisible } = useContext(SettingsCtx);
  const { isDragEnabled, enableDrag, removeDrag } = useContext(ClockCtx);
  const clockRef = useRef();

  useEffect(() => {
    function handler(event) {
      if (!clockRef.current?.contains(event.target)) {
        removeDrag();
      }
    }
    window.addEventListener("mouseup", handler);
    return () => window.removeEventListener("mouseup", handler);
  }, [removeDrag]);

  return (
    <div draggable="false" ref={clockRef} className="clock" onMouseUp={removeDrag} onMouseDown={enableDrag} onTouchEnd={removeDrag} onTouchStart={enableDrag} id="clock">
      <TimeProvider>
        <DynamicBg draggable="false"></DynamicBg>
        <div draggable="false" className="clock__face">
          <Parts isDragEnabled={isDragEnabled} />
          <HourHand />
          <MinuteHand />
          {!isInteractive && <SecondHand />}
          {isDigitalVisible && <DigitalClock />}
        </div>
      </TimeProvider>
    </div>
  );
};

export default Clock;
