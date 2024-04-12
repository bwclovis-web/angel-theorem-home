import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import {MainProvider} from "./providers/mainProvider"
import "./globals.css";
import Navigation from "./ui/Navigation/Navigation";

const inter = Nunito_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Angel Theorem Home",
  description: "A play space for the developers mind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <MainProvider>
          <Navigation />
          {children}
        </MainProvider>
      </body>
    </html>
  );
}
