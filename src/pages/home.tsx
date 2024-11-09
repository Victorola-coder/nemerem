import { SEO } from "../components";

export default function Home() {
  return (
    <>
      <SEO title="Home" />
      <div className="min-h-[100dvh] mx-auto flex flex-col items-center justify-center text-primary text-[40px]">
        Home
      </div>
    </>
  );
}
