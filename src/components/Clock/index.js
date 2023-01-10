import "./style.css";
import { useState, useEffect, useRef } from "react";

import DynamicBg from "../../components/DynamicBg";
import DigitalClock from "../DigitalClock";
import Button from "../Button";

const Clock = ({ gapForMinutesAroundFace, isMinutesAroundFace, isInteractive, isDigitalVisible, isHourFormat12 }) => {
  let date = new Date();
  const [time, setTime] = useState(0);
  const [enableDrag, setEnableDrag] = useState(false);
  const [h, setH] = useState(() => date.getHours());
  const [m, setM] = useState(() => date.getMinutes());
  const [s, setS] = useState(() => date.getSeconds());
  const [hDeg, setHdeg] = useState(30 * h + m / 2);
  const [mDeg, setMdeg] = useState(6 * m);
  const [sDeg, setSdeg] = useState(6 * s + 6);
  const [touchedEl, setTouchedEl] = useState(null);

  useEffect(() => {
    if (!isInteractive) {
      const timeIntervalId = setInterval(() => {
        let date = new Date();
        setH(date.getHours());
        setM(date.getMinutes());
        setS(date.getSeconds());
        setTime(date.getTime());
        setHdeg(30 * h + m / 2);
        setMdeg(6 * m);
        setSdeg(6 * s + 6);
      }, 1000);
      return () => clearInterval(timeIntervalId);
    } else {
      setHdeg(30 * h + m / 2);
      setMdeg(6 * m);
    }
  }, [s, m, h, isInteractive]);

  function updateInteractiveTime(e) {
    if (enableDrag) {
      let add;
      let value = Number(e.target.dataset.value);
      if (m === value) {
        add = 0;
      } else if (m > 45 && m <= 59 && value >= 0 && value < 15) {
        add = 60 - m + value;
      } else if (m >= 0 && m < 15 && value <= 59 && value > 45) {
        add = (60 - value + m) * -1;
      } else {
        add = value - m;
      }
      let date = new Date(time + add * 60000);
      setTime(date.getTime());
      setM(date.getMinutes());
      setH(date.getHours());
    }
  }

  const clockParts = [];
  for (let i = 0; i < 60; i++) {
    let gap = !(i % gapForMinutesAroundFace);
    let deg = i * 6;
    clockParts.push(
      <li data-deg={deg} data-value={i} onMouseOver={(e) => updateInteractiveTime(e)} style={{ transform: `rotate(${deg}deg)` }} className="interactive-part unselectable">
        {isMinutesAroundFace && gap && (
          <small
            onMouseOver={(e) => e.stopPropagation()}
            className="interactive-part__minute"
            style={{
              transform: `rotate(${i * -6}deg)`,
              color: `${i % 5 ? "grey" : "black"}`,
            }}>
            {i}
          </small>
        )}
      </li>
    );
  }
  const clockRef = useRef();
  useEffect(() => {
    function handler(event) {
      if (!clockRef.current?.contains(event.target)) {
        setEnableDrag(false);
      }
    }
    window.addEventListener("mouseup", handler);
    return () => window.removeEventListener("mouseup", handler);
  }, []);

  return (
    <div draggable="false" ref={clockRef} className="clock" onMouseUp={() => isInteractive && setEnableDrag(false)} onMouseDown={() => isInteractive && setEnableDrag(true)} onTouchEnd={() => isInteractive && setEnableDrag(false)} onTouchStart={() => isInteractive && setEnableDrag(true)} id="clock">
      <DynamicBg draggable="false" h={h}></DynamicBg>

      <div
        onTouchMove={(e) => {
          if (isInteractive) {
            let x = e.touches[0].pageX;
            let y = e.touches[0].pageY;
            let el = document.elementFromPoint(x, y);
            if (touchedEl !== el && el.dataset.value) {
              setTouchedEl(el);
              let fakeE = { target: el }; // to use same function 'updateInteractiveTime'
              console.log(el);
              updateInteractiveTime(fakeE);
            }
          }
        }}
        draggable="false"
        className="clock__face">
        <ul draggable="false" className="interactive">
          {clockParts}
        </ul>
        <div style={{ transform: `rotate(${hDeg}deg)` }} className="clock__hand--hours clock__hand"></div>
        <div style={{ transform: `rotate(${mDeg}deg)` }} className="clock__hand--minutes clock__hand"></div>
        {!isInteractive && <div style={{ transform: `rotate(${sDeg}deg)` }} className="clock__hand--seconds clock__hand"></div>}
        {isDigitalVisible && <DigitalClock h={h} m={m} s={!isInteractive ? s : null} isHourFormat12={isHourFormat12} />}
      </div>
    </div>
  );
};

export default Clock;
