import { propsTag } from "./type";
import "./tag.less";

function Tag(props: propsTag) {
  const { type = "plain", value } = props;
  return <span className={`wdu-tag wdu-tag__${type}`}>{value.toString()}</span>;
}

export default Tag;
