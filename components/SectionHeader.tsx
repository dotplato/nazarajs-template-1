import Link from "next/link";
import { Button } from "@/components/ui/button";

export interface SectionHeaderProps {
  subtitle: string;
  title: string;
  href: string;
  linkLabel?: string;
}

export function SectionHeader({
  subtitle,
  title,
  href,
  linkLabel = "View All",
}: SectionHeaderProps) {
  return (
    <div className="flex items-end justify-between mb-6">
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
          {subtitle}
        </p>
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      </div>
      <Button
        asChild
        variant="outline"
        className="rounded-full border-black hover:bg-black hover:text-white transition-all text-sm px-5"
      >
        <Link href={href}>{linkLabel} →</Link>
      </Button>
    </div>
  );
}
