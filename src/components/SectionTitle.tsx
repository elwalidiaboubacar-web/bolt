import type { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className="mb-10 text-center">
      <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-accent" aria-hidden="true" />
      <h2 className="text-2xl font-semibold leading-[1.2] text-neutral-900 md:text-3xl">{children}</h2>
    </div>
  );
}
