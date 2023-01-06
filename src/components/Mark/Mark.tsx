import { ReactNode } from "react";
import "./mark.less";

interface propsMark {
  type?: "important" | "light" | "remind";
  link?: string; // 跳转链接的目标 url 地址
  children?: ReactNode;
}

const CLS = "wdu-mark";
function Mark(props: propsMark) {
  const { type = "important", link, children } = props;

  const componentStyle = `${CLS} ${CLS}__${type}`;

  return (
    <mark className={componentStyle}>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : children}
    </mark>
  );
}

export default Mark;
