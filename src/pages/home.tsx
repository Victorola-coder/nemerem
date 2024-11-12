import { SEO } from "../components/ui";
import { Contact, Hero, Projects } from "../components/home";

export default function Home() {
  return (
    <>
      <SEO title="Home" />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
