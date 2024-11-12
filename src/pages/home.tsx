import { SEO } from "../components/ui";
import { Contact, Hero } from "../components/home";

export default function Home() {
  return (
    <>
      <SEO title="Home" />
      <main>
        <Hero />
        <Contact />
      </main>
    </>
  );
}
