import { Header } from "@component/Layout/Layout";
import { ReactNode } from "react";

interface propsList {
  headerKey?: any;
  contentKey?: any;
  footerKey?: any;
  data: Array<any>;
  height?: number;
  lazy?: boolean;
}

export type { propsList };
