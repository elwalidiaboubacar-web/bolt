export default function Header() {
  return (
    <header className="w-full">
      <div className="relative flex min-h-[300px] w-full items-center justify-center overflow-hidden bg-neutral-100">
        <img src="/1.png" alt="Archéologie" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <h1 className="relative z-10 px-4 text-center text-4xl font-light text-white md:text-5xl lg:text-6xl">
          Le métier d'archéologue
        </h1>
      </div>
    </header>
  );
}
