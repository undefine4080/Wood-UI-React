import "./mark.less";

interface propsMark {
  type?: "important" | "light" | "remind";
  link?: string; // 跳转链接的目标 url 地址
  children?: any;
}

function Mark(props: propsMark) {
  const PREFIX = "wdu-mark";
  const { type = "important", link, children } = props;
  const componentStyle = `${PREFIX} ${PREFIX}-${type}`;

  return (
    <span className={componentStyle}>
      {link && link.length > 0 ? (
        <a href={link} target="_blank">
          {children}
        </a>
      ) : (
        children
      )}
    </span>
  );
}

export default Mark;
