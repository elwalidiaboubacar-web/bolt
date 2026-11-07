export default function WordCloud() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
      <article className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-16">
        
        {/* L'image sur le côté : on a augmenté la largeur md:w-96 (au lieu de 64) */}
        <div className="w-full shrink-0 md:w-96">
          <img 
            src="/2.jpg" 
            alt="Nuage de mots" 
            className="h-auto w-full object-contain" 
          />
        </div>
        
        {/* Le texte à droite */}
        <div className="flex-1 pt-4 text-[17px] font-light leading-relaxed text-neutral-800">
          <p>
            <strong className="font-semibold">Illustration :</strong>
            <br />
            Nuage de mots généré avec{' '}
            <a
              href="https://www.nuagesdemots.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              nuagesdemots.fr
            </a>
          </p>
        </div>
        
      </article>
    </section>
  );
}
