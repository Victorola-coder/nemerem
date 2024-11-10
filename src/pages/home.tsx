import { SEO } from "../components/ui";
import { Contact } from "../components/home";
export default function Home() {
  return (
    <>
      <SEO title="Home" />
      <main>
        <Contact />
      </main>
    </>
  );
}
