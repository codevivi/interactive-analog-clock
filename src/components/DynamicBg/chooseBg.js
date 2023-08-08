export const chooseBg = (h) => {
  let clockBg;
  let hour = Number(h);
  if (hour === 0) {
    clockBg = "h0";
  } else if (hour >= 1 && hour < 4) {
    clockBg = "h1";
  } else if (hour === 4) {
    clockBg = "h4";
  } else if (hour === 5) {
    clockBg = "h5";
  } else if (hour >= 5 && hour < 7) {
    clockBg = "h6";
  } else if (hour >= 7 && hour <= 8) {
    clockBg = "h7";
  } else if (hour > 8 && hour <= 10) {
    clockBg = "h9";
  } else if (hour > 10 && hour <= 11) {
    clockBg = "h11";
  } else if (hour > 11 && hour < 13) {
    clockBg = "h12";
  } else if (hour >= 13 && hour <= 14) {
    clockBg = "h13";
  } else if (hour > 14 && hour <= 16) {
    clockBg = "h15";
  } else if (hour > 16 && hour <= 18) {
    clockBg = "h17";
  } else if (hour === 19) {
    clockBg = "h19";
  } else if (hour === 20) {
    clockBg = "h20";
  } else if (hour === 21) {
    clockBg = "h21";
  } else if (hour === 22) {
    clockBg = "h22";
  } else {
    clockBg = "h23";
  }
  return clockBg;
};
