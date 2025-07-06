import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/shared/menu/page";
export const metadata: Metadata = {
  title: "Ashish protfolio",
  description: "Ashish's personal portfolio showcasing projects, skills, and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Menu/>
        {children}
      </body>
    </html>
  );
}
