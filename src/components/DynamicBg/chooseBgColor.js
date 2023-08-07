export const chooseBgColor = (h) => {
  let underBgColor = "";
  if (h >= 13 && h < 17) {
    underBgColor = `#b2e1ea`;
  } else if (h >= 17 && h < 19) {
    underBgColor = `#f3ded6`;
  } else if (h >= 19 && h < 21) {
    underBgColor = `#ffa737`;
  } else if (h >= 21 && h < 22) {
    underBgColor = `#d51c48`;
  } else if (h >= 22 || h < 6) {
    underBgColor = `#005296`;
  } else if (h >= 6 && h < 7) {
    underBgColor = `#e8d1b5`;
  } else if (h >= 7 && h < 13) {
    underBgColor = `#e3efbd`;
  }
  return underBgColor;
};
