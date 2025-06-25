import { SEO } from "../components/ui";
import { Contact, Hero, About, Projects } from "../components/home";

export default function Home() {
  return (
    <>
      <SEO title="Home" />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  );
}
