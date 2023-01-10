import "./style.css";

const DigitalClock = ({ h, m, s, isHourFormat12 }) => {
  function pad2(n) {
    let str = "" + n;
    if (str.length < 2) {
      str = "0" + str;
    }
    return str;
  }
  function formatDigitalHour(num) {
    if (isHourFormat12) {
      if (num > 12) {
        num = num - 12;
      }
    }
    return num;
  }
  return (
    <p className="digital unselectable" onMouseOver={(e) => e.stopPropagation()}>
      <small className="digital__hours-display">{pad2(formatDigitalHour(h))}:</small>
      <small className="digital__minutes-display">{pad2(m)}</small>
      {s !== null && <small className="digital__seconds-display">:{pad2(s)}</small>}
    </p>
  );
};
export default DigitalClock;
