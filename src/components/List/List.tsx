import { propsList } from "./type";
import "./list.less";

function List(props: propsList) {
  const { headerKey, contentKey, footerKey, data, height } = props;

  return (
    <ul
      className="wdu-list"
      style={{ height: `${height ? `${height}px` : "auto"}` }}
    >
      {data.map((item, index) => {
        return (
          <li className="wdu-list__item" key={index}>
            {item[headerKey] && (
              <div className="wdu-list__header">{item[headerKey]}</div>
            )}

            <div className="wdu-list__content">{item[contentKey]}</div>
            {item[footerKey] && (
              <div className="wdu-list__footer">{item[footerKey]}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default List;
