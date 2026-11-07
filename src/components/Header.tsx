export default function Header() {
  return (
    <header className="w-full">
      {/* On réduit la hauteur avec h-[250px] md:h-[300px] pour un effet bannière */}
      {/* On utilise items-end pour caler le contenu (le titre) vers le bas */}
      <div className="relative flex h-[250px] w-full items-end overflow-hidden bg-neutral-100 md:h-[300px]">
        {/* object-center permet de centrer l'image verticalement dans la zone visible */}
        <img 
          src="/1.png" 
          alt="Archéologie" 
          className="absolute inset-0 h-full w-full object-cover object-center" 
        />
        {/* Un léger dégradé noir en bas pour que le texte blanc soit bien lisible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" aria-hidden="true" />
        
        {/* On aligne le texte à gauche (text-left) avec un peu de marge (pb-8 pl-8) */}
        <div className="relative z-10 w-full pb-8 pl-8 md:pb-12 md:pl-16">
          <h1 className="text-3xl font-light text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Le métier d'archéologue
          </h1>
        </div>
      </div>
    </header>
  );
}
