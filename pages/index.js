import { useState } from "react";
import {
  About,
  Contact,
  DisClaimer,
  Hero,
  Navbar,
  Projects,
} from "../components";

export default function Home() {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <div>
      {!modal ? (
        <>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Contact onClick={() => Toggle()} />
        </>
      ) : (
        <div className="bg-[#1E293B] h-screen">
          <DisClaimer show={modal} close={Toggle} />
        </div>
      )}
    </div>
  );
}
