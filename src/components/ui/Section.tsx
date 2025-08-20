// src/components/ui/Section.tsx
export default function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={`container-outer ${className}`}>{children}</section>;
}
