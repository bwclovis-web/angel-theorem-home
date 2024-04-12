'use client'

import Intro from "./_homepage/intro";
import HomeBottom from "./_homepage/HomeBottom";
import { useContext } from "react";
import TheoremContext from "./providers/mainProvider";

export default function Home() {
  const {isNavActive} = useContext(TheoremContext)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 relative overflow-hidden">
      <Intro />
      {isNavActive && <HomeBottom />}
    </main>
  );
}
