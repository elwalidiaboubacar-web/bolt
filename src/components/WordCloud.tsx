export default function WordCloud() {
  return (
    <figure className="mx-auto max-w-5xl px-6 pb-16 md:pb-24">
      <img src="/2.jpg" alt="Nuage de mots" className="aspect-video w-full object-contain rounded-md" />
      <figcaption className="mt-4 text-center text-sm text-neutral-600">
        Nuage de mots généré avec{' '}
        <a
          href="https://www.nuagesdemots.fr/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline-offset-2 hover:text-accent-dark hover:underline"
        >
          nuagesdemots.fr
        </a>
      </figcaption>
    </figure>
  );
}
