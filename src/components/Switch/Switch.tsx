import { useState } from "react";
import { propsSwitch } from "./type";
import "./switch.less";

function Switch(props: propsSwitch) {
  const { id, label, value = false, onChange, disabled = false } = props;

  const [state, setState] = useState(value);

  const handleClick = () => {
    if (disabled) return;

    setState((pre: boolean) => !pre);
    onChange && onChange(!state);
  };

  const triggerClass = `wdu-switch__wrapper ${
    state ? "wdu-switch__active" : ""
  }`;
  const switchClass = `wdu-switch ${disabled ? "wdu-switch__disabled" : ""}`;

  return (
    <div className={switchClass}>
      {label && <span className="wdu-switch__label">{label}</span>}

      <div className="wdu-switch__main" id={id} onClick={handleClick}>
        <div className={triggerClass}>
          <span className="wdu-switch__block"></span>

          <span className="wdu-switch__block-trigger"></span>

          <span className="wdu-switch__block"></span>
        </div>
      </div>
    </div>
  );
}
Switch.displayName = "Switch";

export default Switch;
