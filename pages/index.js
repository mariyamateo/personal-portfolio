import { About, Hero, Navbar } from "../components";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <About />
      <Hero />
    </div>
  );
}
