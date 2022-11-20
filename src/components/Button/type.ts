interface propsButton {
  type?:
    | "plain"
    | "important"
    | "danger"
    | "success"
    | "border"
    | "warn"
    | "line";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => any;
  loading?: boolean;
  size?: "small" | "normal" | "large";
  disabled?: boolean;
  children?: any;
}

export type { propsButton };
