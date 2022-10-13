import "./style.css";
import Button from "../Button";
import { useState, useEffect, useRef } from "react";

import girl from "../../resources/img/girl.svg";
import settingsIcon from "../../resources/icons/settings_gear.svg";
import closeIcon from "../../resources/icons/close.svg";
import DynamicBg from "../../components/DynamicBg";
import ClockContainer from "../ClockContainer";

// const Clock = ({ interactive, everyFiveMinutesOn, allMinutesOn, hideMinutes }) => {
const Clock = ({ everyFiveMinutesOn, allMinutesOn, hiddenMinutes, interactive, digitalOn }) => {
  let date = new Date();
  // const [everyFiveMinutesOn, setEveryFiveMinutesOn] = useState(false);
  // const [allMinutesOn, setAllMinutesOn] = useState(false);
  // const [hiddenMinutes, setHiddenMinutes] = useState(true);
  const [time, setTime] = useState(0);
  const [enableDrag, setEnableDrag] = useState(false);
  // const [interactive, setInteractive] = useState(false);
  const [format12, setFormat12] = useState(false);
  // const [settingsOn, setSettingsOn] = useState(false);
  // const [digitalOn, setDigitalOn] = useState(true);
  const [h, setH] = useState(() => date.getHours());
  const [m, setM] = useState(() => date.getMinutes());
  const [s, setS] = useState(() => date.getSeconds());
  const [hDeg, setHdeg] = useState(30 * h + m / 2);
  const [mDeg, setMdeg] = useState(6 * m);
  const [sDeg, setSdeg] = useState(6 * s + 6);

  useEffect(() => {
    if (!interactive) {
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
  }, [s, m, h, interactive]);

  function pad2(n) {
    let str = "" + n;
    if (str.length < 2) {
      str = "0" + str;
    }
    return str;
  }

  function formatDigitalHour(num) {
    if (format12) {
      if (num > 12) {
        num = num - 12;
      }
    }
    return num;
  }

  // function showSettings() {
  //   setSettingsOn(true);
  // }
  // function hideSettings() {
  //   setSettingsOn(false);
  // }
  // function showEveryFiveMinutes() {
  //   setEveryFiveMinutesOn(true);
  //   setAllMinutesOn(false);
  // }
  // function showAllMinutes() {
  //   setEveryFiveMinutesOn(false);
  //   setAllMinutesOn(true);
  // }
  // function hideMinutes() {
  //   setEveryFiveMinutesOn(false);
  //   setAllMinutesOn(false);
  //   setHiddenMinutes(true);
  // }
  // function showMinutes() {
  //   setEveryFiveMinutesOn(false);
  //   setHiddenMinutes(false);
  //   setEveryFiveMinutesOn(true);
  // }

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
    let fives = !(i % 5);
    let deg = i * 6;
    clockParts.push(
      <li
        data-deg={deg}
        data-value={i}
        // onTouchStart={(e) => enableDrag && setMdeg(e.target.dataset.deg)}
        onMouseOver={(e) => updateInteractiveTime(e)}
        onTouchEnd={(e) => updateInteractiveTime(e)}
        key={i.toString()}
        style={{ transform: `rotate(${deg}deg)` }}
        className="interactive-part unselectable">
        {allMinutesOn && (
          <small
            onMouseOver={(e) => e.stopPropagation()}
            className="interactive-part__minute"
            style={{
              transform: `rotate(${i * -6}deg)`,
              color: `${fives ? "black" : "grey"}`,
            }}>
            {i}
          </small>
        )}
        {everyFiveMinutesOn && fives && (
          <small
            onMouseOver={(e) => e.stopPropagation()}
            className="interactive-part__minute"
            style={{
              transform: `rotate(${i * -6}deg)`,
              color: `${fives ? "black" : "grey"}`,
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
    <div draggable="false" ref={clockRef} className="clock" onMouseUp={() => interactive && setEnableDrag(false)} onMouseDown={() => interactive && setEnableDrag(true)} onTouchEnd={() => interactive && setEnableDrag(false)} onTouchStart={() => interactive && setEnableDrag(true)} id="clock">
      <DynamicBg draggable="false" h={h}></DynamicBg>

      <div draggable="false" className="clock__face">
        {interactive && (
          <ul draggable="false" className="interactive">
            {clockParts}
          </ul>
        )}
        <div style={{ transform: `rotate(${hDeg}deg)` }} className="clock__hand--hours clock__hand"></div>
        <div style={{ transform: `rotate(${mDeg}deg)` }} className="clock__hand--minutes clock__hand"></div>
        {!interactive && <div style={{ transform: `rotate(${sDeg}deg)` }} className="clock__hand--seconds clock__hand"></div>}
        {digitalOn && (
          <p className="digital unselectable" onMouseOver={(e) => e.stopPropagation()}>
            <small className="digital__hours-display">{pad2(formatDigitalHour(h))}:</small>
            <small className="digital__minutes-display">{pad2(m)}</small>
            {!interactive && <small className="digital__senonds-display">:{pad2(s)}</small>}
          </p>
        )}
      </div>
    </div>
  );
};

export default Clock;
