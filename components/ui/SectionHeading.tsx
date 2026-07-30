import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow ? (
        <span className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
          {eyebrow}
        </span>
      ) : null}
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
        <div
          className={cn(
            "h-1 w-16 rounded-full bg-emerald-500",
            align === "center" ? "mx-auto" : ""
          )}
        />
      </div>
      {description ? (
        <p className="max-w-2xl text-lg text-slate-400">{description}</p>
      ) : null}
    </div>
  );
}
