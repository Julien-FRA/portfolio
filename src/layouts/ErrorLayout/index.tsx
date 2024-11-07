import Link from "next/link";

import type { ChildrenProps } from "@/types/Props";

export const metadata = {
  title: "Something is wrong",
  description: "Something is wrong",
};

export default function ErrorLayout({ children }: ChildrenProps) {
  return (
    <main>
      {children}
      <Link href="/">Go back to home</Link>
    </main>
  );
}
