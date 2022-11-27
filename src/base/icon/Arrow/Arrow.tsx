import "./arrow.less";

interface propsArrow {
  style?: "top" | "right" | "bottom" | "left";
}

function Arrow(props: propsArrow) {
  const { style = "top" } = props;

  return <i className={`wdu-icon-arrow wdu-icon-arrow__${style}`}></i>;
}

export default Arrow;
