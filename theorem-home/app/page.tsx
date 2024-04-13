'use client'

import Intro from "./_homepage/intro";
import HomeBottom from "./_homepage/HomeBottom";
import { useContext } from "react";
import TheoremContext from "./providers/mainProvider";

export default function Home() {
  const {isNavActive} = useContext(TheoremContext)
  return (
    <div className="flex text-slate-100 bg-slate-950 min-h-screen flex-col items-center justify-between md:px-24 relative overflow-hidden">
      <Intro />
      {!isNavActive && <HomeBottom />}
    </div>
  );
}
