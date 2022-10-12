import "./style.css";
import Button from "../Button";
import { useState, useEffect } from "react";

import girl from "../../resources/img/girl.svg";
import settingsIcon from "../../resources/icons/settings_gear.svg";
import closeIcon from "../../resources/icons/close.svg";
import DynamicBg from "../../components/DynamicBg";

const Clock = () => {
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

      <div dragable="false" className="clock" id="clock">
        <DynamicBg dragable="false" h={h}></DynamicBg>

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
                {digitalOn && (
                  <button className="button botton--simple" onClick={() => setDigitalOn(false)}>
                    Paslėpti
                  </button>
                )}
                {!digitalOn && (
                  <button className="button botton--simple" onClick={() => setDigitalOn(true)}>
                    Rodyti
                  </button>
                )}
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
                    Išjunkti
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
