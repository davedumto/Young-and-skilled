import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const myFont = localFont({src: "../public/fonts/cocon.otf"})
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className={myFont.className}>
        {children}
      </body>
    </html>
  );
}
// echo "# young-and-skilled-initiative" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Richardudeh4/young-and-skilled-initiative.git
// git push -u origin main
