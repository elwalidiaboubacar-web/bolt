export default function WordCloud() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-8">
      <figure className="flex flex-col items-center">
        {/* L'image est centrée, prend toute la largeur disponible (sans être écrasée) */}
        <img 
          src="/2.jpg" 
          alt="Nuage de mots" 
          className="h-auto w-full object-contain" 
        />
        
        {/* Le texte est centré en dessous */}
        <figcaption className="mt-6 text-center text-[17px] font-light leading-relaxed text-neutral-800">
          Nuage de mots généré avec{' '}
          <a
            href="https://www.nuagesdemots.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            nuagesdemots.fr
          </a>
        </figcaption>
      </figure>
    </section>
  );
}
