import { ReactNode } from "react";

export interface PageHeaderProps {
  title: string;
  description?: string;
  badge?: ReactNode;
  className?: string;
}

export function PageHeader({
  title,
  description,
  badge,
  className = "",
}: PageHeaderProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      {badge && <div className="mb-4 flex justify-center">{badge}</div>}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
      {description && (
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  );
}
