import "./style.css";
import Button from "../Button";
import { useState, useEffect, useCallback } from "react";

//import girl from "../rresources/girl.svg";
import girl from "../../resources/img/girl.svg";
import settingsIcon from "../../resources/icons/settings_gear.svg";
import closeIcon from "../../resources/icons/close.svg";
import DynamicBg from "../../components/DynamicBg";
import morning6 from "../../resources/img/clock_bg/morning6h.svg";
//import morning7 from "../resources/morning7h.svg";
import morning8 from "../../resources/img/clock_bg/morning8h.svg";
import morning10 from "../../resources/img/clock_bg/morning10h.svg";
import morning11 from "../../resources/img/clock_bg/morning11h.svg";
import morning12 from "../../resources/img/clock_bg/morning12h.svg";
import day1 from "../../resources/img/clock_bg/day1h.svg";
import day2 from "../../resources/img/clock_bg/day2h.svg";
import day6 from "../../resources/img/clock_bg/day6h.svg";
import evening7 from "../../resources/img/clock_bg/evening7h.svg";
import evening8 from "../../resources/img/clock_bg/evening8h.svg";
import evening9 from "../../resources/img/clock_bg/evening9h.svg";
import night10 from "../../resources/img/clock_bg/night10h.svg";
import night11 from "../../resources/img/clock_bg/night11h.svg";
import night12 from "../../resources/img/clock_bg/night12h.svg";
import night2 from "../../resources/img/clock_bg/night2h.svg";
import night4 from "../../resources/img/clock_bg/night4h.svg";
import night5 from "../../resources/img/clock_bg/night5h.svg";
// console.log(evening7);
const Clock = () => {
  //const [trueTime, setTrueTime] = useState(true);
  let date = new Date();
  const [everyFiveMinutesOn, setEveryFiveMinutesOn] = useState(false);
  const [allMinutesOn, setAllMinutesOn] = useState(false);
  const [hiddenMinutes, setHiddenMinutes] = useState(true);
  const [time, setTime] = useState(0);
  const [enableDrag, setEnableDrag] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [format12, setFormat12] = useState(false);
  const [settingsOn, setSettingsOn] = useState(false);
  const [digitalOn, setDigitalOn] = useState(true);
  const [h, setH] = useState(() => date.getHours());
  const [m, setM] = useState(() => date.getMinutes());
  const [s, setS] = useState(() => date.getSeconds());
  const [hDeg, setHdeg] = useState(30 * h + m / 2);
  const [mDeg, setMdeg] = useState(6 * m);
  const [sDeg, setSdeg] = useState(6 * s + 6);
  // const chooseBackground = useCallback(() => {
  //   let clockBg;
  //   let hour = Number(h);
  //   // console.log(hour);
  //   if (hour === 0) {
  //     clockBg = night12;
  //   } else if (hour >= 1 && hour < 4) {
  //     clockBg = night2;
  //   } else if (hour === 4) {
  //     clockBg = night4;
  //   } else if (hour === 5) {
  //     clockBg = night5;
  //   } else if (hour >= 5 && hour < 7) {
  //     clockBg = morning6;
  //   } else if (hour >= 7 && hour <= 8) {
  //     clockBg = morning8;
  //   } else if (hour > 8 && hour <= 10) {
  //     clockBg = morning10;
  //   } else if (hour > 10 && hour <= 11) {
  //     clockBg = morning11;
  //   } else if (hour > 11 && hour < 13) {
  //     clockBg = morning12;
  //   } else if (hour >= 13 && hour <= 14) {
  //     clockBg = day1;
  //   } else if (hour > 14 && hour <= 16) {
  //     clockBg = day2;
  //   } else if (hour > 16 && hour <= 18) {
  //     clockBg = day6;
  //   } else if (hour > 18 && hour <= 19) {
  //     clockBg = evening7;
  //   } else if (hour > 19 && hour <= 20) {
  //     clockBg = evening8;
  //   } else if (hour > 20 && hour < 22) {
  //     clockBg = evening9;
  //   } else if (hour >= 22 && hour < 23) {
  //     clockBg = night10;
  //   } else if (hour === 23) {
  //     clockBg = night11;
  //   }
  //   return clockBg;
  // }, [h]);

  // const [bg, setBg] = useState(chooseBackground);

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
        //console.log(hDeg, mDeg, sDeg);
      }, 1000);
      return () => clearInterval(timeIntervalId);
    } else {
      setHdeg(30 * h + m / 2);
      setMdeg(6 * m);
      //setSdeg(6 * s + 6);
    }
  }, [s, m, h, interactive]);

  // useEffect(() => {
  //   setBg(chooseBackground);
  // }, [chooseBackground, h]);

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

  function openSettings() {
    setSettingsOn(true);
  }
  function closeSettings() {
    setSettingsOn(false);
  }
  function showEveryFiveMinutes() {
    setEveryFiveMinutesOn(true);
    setAllMinutesOn(false);
  }
  function showAllMinutes() {
    setEveryFiveMinutesOn(false);
    setAllMinutesOn(true);
  }
  function hideMinutes() {
    setEveryFiveMinutesOn(false);
    setAllMinutesOn(false);
    setHiddenMinutes(true);
  }
  function showMinutes() {
    setEveryFiveMinutesOn(false);
    setHiddenMinutes(false);
    setEveryFiveMinutesOn(true);
  }

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
      // console.log(add);
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
      <li data-deg={deg} data-value={i} onTouchEnd={(e) => enableDrag && setMdeg(e.target.dataset.deg)} onMouseOver={(e) => updateInteractiveTime(e)} key={i.toString()} style={{ transform: `rotate(${deg}deg)` }} className="interactive-part unselectable">
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

  return (
    <div dragable="false" onMouseUp={() => interactive && setEnableDrag(false)} onMouseDown={() => interactive && setEnableDrag(true)} className="clock-container">
      <img className="girl" src={girl} widht="100" alt="" />
      <Button addPosClass="clock__button-open-settings-pos" styling="info" handleClick={openSettings} icon={settingsIcon} large={true} />

      <div dragable="false" className="clock" id="clock" style={{ backgroundImage: `url(${night10})` }}>
        <img className="dynamic-bg" src={day1} widht="100" alt="" />
        <div dragable="false" className="clock__face">
          {interactive && (
            <ul dragable="false" className="interactive">
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
      {settingsOn && (
        <div className="clock-settings">
          <div className="clock-settings__inner">
            <Button addPosClass="clock-settings__button-close-pos" styling="close" icon={closeIcon} handleClick={closeSettings} />
            <h1 className="clock-settings__title">Nustatymai</h1>
            <div className="clock-settings__section">
              <h2 className="clock-settings__title-h2">Elektronis laikrodukas</h2>
              <div className="clock-settings__buttons-container">
                {digitalOn && <Button handleClick={() => setDigitalOn(false)} text="Paslėpti" icon={closeIcon}></Button>}
                {!digitalOn && <Button handleClick={() => setDigitalOn(true)} text="Rodyti" icon={closeIcon}></Button>}
                {digitalOn && !format12 && (
                  <button className="button button--simple" onClick={() => setFormat12(true)}>
                    Perjunkti į 12 valandų formatą
                  </button>
                )}
                {digitalOn && format12 && (
                  <button className="button button--simple" onClick={() => setFormat12(false)}>
                    Perjunkti į 24 valandų formatą
                  </button>
                )}
              </div>
            </div>
            <div className="clock-settings__section">
              <h2 className="clock-settings__title-h2">Mokomasis Laikrodukas</h2>
              <div className="clock-settings__buttons-container">
                {!interactive && (
                  <button onClick={() => setInteractive(true)} className="tooltip button button--simple">
                    Įjunkti
                    <span className="tooltip__text">Galėsite sukti laiką ant laikroduko laikydami įspaudę kairį pelės klavišą.</span>
                  </button>
                )}
                {interactive && (
                  <button onClick={() => setInteractive(false)} className="button button--simple">
                    Įšjunkti
                  </button>
                )}
                {interactive && !hiddenMinutes && everyFiveMinutesOn && (
                  <button onClick={showAllMinutes} className="button button--simple">
                    Rodyti visas minutes
                  </button>
                )}
                {interactive && allMinutesOn && !hiddenMinutes && (
                  <button onClick={showEveryFiveMinutes} className="button button--simple">
                    Rodyti kas penkias minutes
                  </button>
                )}
                {interactive && !hiddenMinutes && (
                  <button onClick={hideMinutes} className="button button--simple">
                    Paslėpti minutes
                  </button>
                )}
                {interactive && hiddenMinutes && (
                  <button onClick={showMinutes} className="button button--simple">
                    Rodyti minutes
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clock;
