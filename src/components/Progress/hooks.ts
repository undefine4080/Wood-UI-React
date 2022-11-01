function getColorStage(percent: number) {
  let color;
  if (percent <= 20) {
    color = "wdu-bg-danger";
  } else if (percent <= 50 && percent > 20) {
    color = "wdu-bg-warn";
  } else if (percent <= 80 && percent > 50) {
    color = "wdu-bg-success";
  } else if (percent > 80) {
    color = "wdu-bg-important";
  }
  return color;
}

export { getColorStage };
