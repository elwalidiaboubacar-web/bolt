export default function Header() {
  return (
    <header className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-neutral-500 px-6 py-24 md:min-h-[480px]">
      {/* INSERER L'IMAGE DE FOND ICI : remplacer le fond gris par une balise <img> en position absolue (object-cover) */}
      <div className="absolute inset-0 bg-neutral-500" aria-hidden="true" />
      <div className="absolute inset-0 bg-neutral-900/60" aria-hidden="true" />
      <h1 className="relative z-10 max-w-4xl text-center text-3xl font-semibold leading-[1.2] text-white md:text-5xl">
        Titre de mon projet
      </h1>
    </header>
  );
}
