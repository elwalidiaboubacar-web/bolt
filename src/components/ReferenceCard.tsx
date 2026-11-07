import ImagePlaceholder from '@/components/ImagePlaceholder';

export interface ReferenceData {
  citation: string;
  url: string;
  request: string;
  reason: string;
}

type ImageAspect = 'portrait' | 'square' | 'landscape';

const IMAGE_CLASSES: Record<ImageAspect, string> = {
  portrait: 'aspect-[3/4] w-56 sm:w-64',
  square: 'aspect-square w-full max-w-sm',
  landscape: 'aspect-video w-full max-w-2xl',
};

interface ReferenceCardProps {
  reference: ReferenceData;
  imageAspect: ImageAspect;
  imageLabel: string;
}

export default function ReferenceCard({ reference, imageAspect, imageLabel }: ReferenceCardProps) {
  return (
    <article className="flex flex-col items-center gap-8">
      {/* INSERER L'IMAGE ICI : remplacer ce bloc gris par une balise <img> de même classe de taille */}
      <ImagePlaceholder label={imageLabel} className={`shrink-0 ${IMAGE_CLASSES[imageAspect]}`} />
      <div className="w-full max-w-2xl space-y-4 text-base leading-normal text-neutral-700">
        <p>
          {reference.citation} Disponible sur :{' '}
          <a
            href={reference.url}
            target="_blank"
            rel="noopener noreferrer"
            className="break-all text-accent underline-offset-2 hover:text-accent-dark hover:underline"
          >
            {reference.url}
          </a>
        </p>
        <p>
          <strong className="font-semibold text-neutral-900">Requête :</strong> {reference.request}
        </p>
        <p>
          <strong className="font-semibold text-neutral-900">Motif du choix :</strong> {reference.reason}
        </p>
      </div>
    </article>
  );
}
