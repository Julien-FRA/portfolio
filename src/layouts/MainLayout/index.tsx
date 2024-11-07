import type { ChildrenProps } from "@/types/Props";

export const MainLayout = ({ children }: ChildrenProps) => {
  return <main className="main-layout">{children}</main>;
};
