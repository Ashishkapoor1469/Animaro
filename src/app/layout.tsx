import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/shared/menu/page";
import localFont from "next/font/local";
const font1 = localFont({
  src:"../font/1.ttf"
})
export const metadata: Metadata = {
  title: "Ashish protfolio",
  description:
    "Ashish's personal portfolio showcasing projects, skills, and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font1.className}`} cz-shortcut-listen="true">
        <Menu />
        {children}
      </body>
    </html>
  );
}
