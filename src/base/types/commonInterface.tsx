import { CSSProperties, ReactElement } from "react";

export default interface commonProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  width?: string | number;
  height?: string | number;
  children?: any;
  disabled?: boolean;
  type?: "plain" | "important" | "danger" | "success" | "warn";
  size?: "small" | "normal" | "large";
  name?: string;
  value?: string | number;
}

interface propsIntroComponent {
  title?: string;
  position: string;
  components: Array<{
    component: ReactElement;
    info?: string;
    code: string;
    api?: Array<{
      title: string;
      description: string;
      value?: string | number;
    }>;
  }>;
}

export type { propsIntroComponent };
