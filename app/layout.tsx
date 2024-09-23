import type { Metadata } from "next";
import "./globals.css";

import { Inter_Tight } from "next/font/google";

export const metadata: Metadata = {
  title: "Task list",
  description: "Gerenciador de tarefas"
};

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800"]
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={interTight.className}>{children}</body>
    </html>
  );
}
