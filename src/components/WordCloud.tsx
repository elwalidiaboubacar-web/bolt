export default function WordCloud() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-8">
      <article className="flex flex-col items-start gap-8 md:flex-row md:gap-12">
        {/* L'image sur le côté, exactement comme dans ReferenceCard */}
        <div className="w-full shrink-0 md:w-64 aspect-video">
          <img 
            src="/2.jpg" 
            alt="Nuage de mots" 
            className="h-full w-full object-contain object-left-top" 
          />
        </div>
        
        {/* Le texte à droite, aligné en face de l'image */}
        <div className="flex-1 space-y-4 text-[17px] font-light leading-relaxed text-neutral-800">
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
