import ReferenceCard, { type ReferenceData } from '@/components/ReferenceCard';
import SectionTitle from '@/components/SectionTitle';

const LOREM_SHORT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.';
const LOREM_LONG =
  'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

/* ----- A. LIVRE (1 référence) ----- */
// Citation bibliographique complète (auteur, titre, éditeur, date, pages), sans le "Disponible sur".
// Lien : URL où le livre est consultable (remplacer "https://www.exemple.com").
// Requête et Motif du choix : remplacer le texte lorem ipsum par votre rédaction.
const BOOK: ReferenceData = {
  citation: 'NOM Prénom (sous la direction de), Titre du livre [en ligne]. Lieu : Éditeur, Année, 000 p.',
  url: 'https://www.exemple.com',
  request: LOREM_SHORT,
  reason: LOREM_LONG,
};

/* ----- B. ARTICLE DE REVUE EN LIGNE (1 référence) ----- */
// Citation : auteur, "titre de l'article", revue, numéro, pages.
// Lien : URL de l'article en ligne.
const ARTICLE: ReferenceData = {
  citation: 'NOM Prénom, "Titre de l\'article", Titre de la revue [en ligne], n° 00, pp. 00-00.',
  url: 'https://www.exemple.com',
  request: LOREM_SHORT,
  reason: LOREM_LONG,
};

/* ----- C. SOURCES WEB (3 références) ----- */
// Citation : auteur ou organisme, titre de la page, nom du site.
// Lien : URL de la page web consultée.
const WEB_SOURCES: ReferenceData[] = [
  {
    citation: 'Organisme ou auteur, Titre de la page web [en ligne]. Nom du site.',
    url: 'https://www.exemple.com',
    request: LOREM_SHORT,
    reason: LOREM_LONG,
  },
  {
    citation: 'Organisme ou auteur, Titre de la page web [en ligne]. Nom du site.',
    url: 'https://www.exemple.com',
    request: LOREM_SHORT,
    reason: LOREM_LONG,
  },
  {
    citation: 'Organisme ou auteur, Titre de la page web [en ligne]. Nom du site.',
    url: 'https://www.exemple.com',
    request: LOREM_SHORT,
    reason: LOREM_LONG,
  },
];

export default function Bibliography() {
  return (
    <section className="mx-auto max-w-4xl space-y-16 px-6 md:space-y-24">
      <div>
        <SectionTitle>Livre</SectionTitle>
        {/* Image : couverture du livre (format portrait) */}
        <ReferenceCard reference={BOOK} imageAspect="portrait" imageLabel="Couverture du livre (format portrait)" />
      </div>

      <div>
        <SectionTitle>Article de revue en ligne</SectionTitle>
        {/* Image : capture de la revue (format carré ou portrait) */}
        <ReferenceCard reference={ARTICLE} imageAspect="square" imageLabel="Visuel de la revue (format carré)" />
      </div>

      <div>
        <SectionTitle>Sources web</SectionTitle>
        <div className="space-y-16 md:space-y-24">
          {WEB_SOURCES.map((source, index) => (
            <ReferenceCard
              key={index}
              reference={source}
              imageAspect="landscape"
              imageLabel={`Capture de la source web ${index + 1} (format paysage)`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
