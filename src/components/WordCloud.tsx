export default function WordCloud() {
  return (
    /* On utilise pb-6 pt-2 (petites marges) au lieu de pb-16 */
    <figure className="mx-auto max-w-5xl px-6 pb-6 pt-2 md:pb-8 md:pt-4">
      {/* J'ai activé ta vraie image 2.jpg ici */}
      <img src="/2.jpg" alt="Nuage de mots" className="aspect-video w-full rounded-md object-contain" />
      <figcaption className="mt-4 text-center text-[15px] font-light text-neutral-600">
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
  );
}
