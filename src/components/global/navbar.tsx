import { Ninja } from "../svgs";

export default function Navbar() {
  return (
    <header className="px-[22px] py-[14px] md:px-[88px] md:py-[36x] flex items-center justify-between">
      <div className="flex items-center gap-[2.06px]">
        <Ninja className="animate-spin" />
        <p className="text-[16.28px] font-bold font-clashbold">UI*NINJA</p>
        <Ninja className="animate-spin" />
      </div>
    </header>
  );
}
