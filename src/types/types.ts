import { ReactNode } from "react";

export type FCC<T = unknown> = React.FC<T & { children: ReactNode }>;
