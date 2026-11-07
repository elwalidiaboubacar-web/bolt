export default function Header() {
  return (
    <header className="w-full">
      {/* On utilise items-center et justify-center pour tout centrer au milieu de la bannière */}
      <div className="relative flex h-[250px] w-full items-center justify-center overflow-hidden bg-neutral-100 md:h-[300px]">
        <img 
          src="/1.png" 
          alt="Archéologie" 
          className="absolute inset-0 h-full w-full object-cover object-center" 
        />
        {/* On remet un filtre noir uniforme pour que le texte soit lisible au centre */}
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        
        {/* Le conteneur du texte est maintenant centré (text-center) */}
        <div className="relative z-10 w-full px-4 text-center">
          <h1 className="text-3xl font-light text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Le métier d'archéologue
          </h1>
        </div>
      </div>
    </header>
  );
}
