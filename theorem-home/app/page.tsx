import Intro from "./_homepage/intro";
import HomeBottom from "./_homepage/HomeBottom";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 relative overflow-hidden">
      <Intro />
      <HomeBottom />
    </main>
  );
}
