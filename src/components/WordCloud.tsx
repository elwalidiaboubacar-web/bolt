import ImagePlaceholder from '@/components/ImagePlaceholder';

export default function WordCloud() {
  return (
    <figure className="mx-auto max-w-5xl px-6 pb-16 md:pb-24">
      {/* INSERER LE NUAGE DE MOTS ICI : remplacer le bloc gris par une balise <img> (ratio 16:9) */}
      <ImagePlaceholder label="Nuage de mots (ratio 16:9)" className="aspect-video w-full" />
      <figcaption className="mt-4 text-center text-sm text-neutral-600">
        Nuage de mots généré avec{' '}
        {/* Lien vers l'outil utilisé pour générer le nuage (modifiable) */}
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
