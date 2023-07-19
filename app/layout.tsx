"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { RecoilRoot } from "recoil";
import Nav from "../components/nav/Nav";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilRoot>
          <Nav />
          {children}
        </RecoilRoot>
      </body>
    </html>
  );
}
