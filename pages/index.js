import { About, Contact, Hero, Navbar, Projects } from "../components";

export default function Home() {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
