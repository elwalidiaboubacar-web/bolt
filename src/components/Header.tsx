export default function Header() {
  return (
    <header className="w-full">
      {/* J'ai changé min-h-[300px] par min-h-[500px] (mobile) et md:min-h-[600px] (ordi) pour que l'image soit bien plus grande */}
      <div className="relative flex min-h-[500px] w-full items-center justify-center overflow-hidden bg-neutral-100 md:min-h-[600px]">
        <img src="/1.png" alt="Archéologie" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <h1 className="relative z-10 px-4 text-center text-4xl font-light text-white md:text-5xl lg:text-7xl">
          Le métier d'archéologue
        </h1>
      </div>
    </header>
  );
}
