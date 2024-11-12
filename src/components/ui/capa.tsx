import clsx from "clsx";

export default function Capa({ className }: { className: string }) {
  return (
    <div className={clsx("absolute h-full top-0 left-0 w-full", className)}>
      <img
        src="/images/pattern.svg"
        alt="wave background"
        draggable={false}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
