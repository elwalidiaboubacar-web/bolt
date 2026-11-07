export interface ReferenceData {
  citation: string;
  url: string;
  request: string;
  reason: string;
}

interface ReferenceCardProps {
  reference: ReferenceData;
  imageSrc: string;
  imageLabel: string;
}

export default function ReferenceCard({ reference, imageSrc, imageLabel }: ReferenceCardProps) {
  return (
    <article className="flex flex-col gap-6 rounded-lg border border-neutral-200 bg-white p-6 transition-shadow duration-300 hover:shadow-lg md:flex-row md:gap-8 md:p-8">
      <div className="flex-shrink-0 flex justify-center md:justify-start">
          <img 
            src={imageSrc} 
            alt={imageLabel} 
            className="w-full max-w-[250px] object-contain rounded-md shadow-sm" 
          />
      </div>
      <div className="min-w-0 flex-1 space-y-4 text-base leading-normal text-neutral-700">
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
