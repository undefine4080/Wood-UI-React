import { type } from "os";
import commonProps from "types/commonInterface";

interface eventProgress {
  onProgress?: (progress: number) => any;
  onStart?: (progress: number) => any;
  onComplete?: (progress: number) => any;
}

interface propsProgress extends eventProgress {
  showProgress?: boolean;
  size?: commonProps["size"];
  align?: "center" | "right" | "flowing";
  className?: string;
  max: number;
  value: number;
}

export type { propsProgress };
