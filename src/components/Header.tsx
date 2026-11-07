export default function Header() {
  return (
    <header className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-neutral-500 px-6 py-20 md:min-h-[420px]">
      <img src="/1.png" alt="Archéologie" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-neutral-900/60" aria-hidden="true" />
      <h1 className="relative z-10 max-w-4xl text-center text-3xl font-semibold leading-[1.2] text-white md:text-5xl">
        Le métier d'archéologue
      </h1>
    </header>
  );
}
