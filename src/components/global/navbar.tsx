import { Link } from "react-router-dom";
import { Ninja } from "../svgs";

const links: { link: string; label: string }[] = [
  { link: "home", label: "Home" },
  { link: "about", label: "About" },
  { link: "contact", label: "Contact" },
  { link: "services", label: "Services" },
];

export default function Navbar() {
  return (
    <header className="px-[22px] py-[14px] md:px-[88px] md:py-[36x] flex items-center justify-between">
      <nav className="flex items-center justify-between w-full">
        <div className="flex items-center gap-[2.06px]">
          <Ninja className="animate-spinn hover:animate-none" />
          <p className="text-[16.28px] font-bold font-clashbold cursor-pointer active:motion-preset-confetti ">
            UI*NINJA
          </p>
          <Ninja className="animate-spinn hover:animate-none" />
        </div>
        <ul className="flex items-center gap-[70px]">
          {links.map((link) => (
            <li
              className="cursor-pointer font-clashmed font-medium text-base"
              key={link.link}
            >
              <Link to={link.link}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
