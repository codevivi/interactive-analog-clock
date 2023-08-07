export const chooseBg = (h) => {
  let clockBg;
  let hour = Number(h);
  if (hour === 0) {
    clockBg = "night12";
  } else if (hour >= 1 && hour < 4) {
    clockBg = "night2";
  } else if (hour === 4) {
    clockBg = "night4";
  } else if (hour === 5) {
    clockBg = "night5";
  } else if (hour >= 5 && hour < 7) {
    clockBg = "morning6";
  } else if (hour >= 7 && hour <= 8) {
    clockBg = "morning8";
  } else if (hour > 8 && hour <= 10) {
    clockBg = "morning10";
  } else if (hour > 10 && hour <= 11) {
    clockBg = "morning11";
  } else if (hour > 11 && hour < 13) {
    clockBg = "morning12";
  } else if (hour >= 13 && hour <= 14) {
    clockBg = "day1";
  } else if (hour > 14 && hour <= 16) {
    clockBg = "day2";
  } else if (hour > 16 && hour <= 18) {
    clockBg = "day6";
  } else if (hour > 18 && hour <= 19) {
    clockBg = "evening7";
  } else if (hour > 19 && hour <= 20) {
    clockBg = "evening8";
  } else if (hour > 20 && hour < 22) {
    clockBg = "evening9";
  } else if (hour >= 22 && hour < 23) {
    clockBg = "night10";
  } else if (hour === 23) {
    clockBg = "night11";
  }
  return clockBg;
};
