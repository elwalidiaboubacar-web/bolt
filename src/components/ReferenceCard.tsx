export interface ReferenceData {
  citation: string;
  url: string;
  linkText?: string; // Ajout du texte personnalisé pour le lien
  request: string;
  reason: string;
}

interface ReferenceCardProps {
  reference: ReferenceData;
  imageSrc: string;
  imageLabel: string;
  imageAspect?: string;
}

export default function ReferenceCard({ reference, imageSrc, imageLabel, imageAspect = "aspect-[3/4]" }: ReferenceCardProps) {
  return (
    <article className="flex flex-col gap-8 md:flex-row md:items-start">
      {/* L'image sur le côté (largeur fixe sur grand écran) */}
      <div className={`w-full shrink-0 md:w-64 ${imageAspect}`}>
        <img 
          src={imageSrc} 
          alt={imageLabel} 
          className="h-full w-full object-contain object-left-top" 
        />
      </div>
      
      {/* Le texte à droite */}
      <div className="flex-1 space-y-4 text-[17px] font-light leading-relaxed text-neutral-800">
        <p>
          <strong className="font-semibold">Référence bibliographique :</strong>
          <br />
          {reference.citation}{' '}
          <a
            href={reference.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Disponible sur : {reference.linkText || reference.url}
          </a>
        </p>
        <p>
          <strong className="font-semibold">Requête :</strong> {reference.request}
        </p>
        <p>
          <strong className="font-semibold">Motif du choix :</strong> {reference.reason}
        </p>
      </div>
    </article>
  );
}
