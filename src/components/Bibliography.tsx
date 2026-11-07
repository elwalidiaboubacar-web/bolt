import ReferenceCard, { type ReferenceData } from '@/components/ReferenceCard';
import SectionTitle from '@/components/SectionTitle';

const BOOK: ReferenceData = {
  citation: 'WEIR, Jamie et MURRAY, Alison D. Atlas d\'anatomie clinique : radiologie et imagerie médicale. Traduction de la 1ère édition anglaise par Antoine Dhem. Bruxelles : De Boeck Université, 2000, 248 p.',
  url: 'https://share.google/j4gURZy9Bbw2s854j',
  linkText: 'ODéBU+ - Anatomie et imagerie médicale',
  request: "Pour effectuer ma recherche de référence imprimée, je me suis rendue sur le catalogue Odébu du Service Commun de la Documentation (SCD) de l'Université de Poitiers. J'ai saisi la requête avec les mots-clés : \"Anatomie et imagerie médicale\".",
  reason: "J'ai choisi cet ouvrage rédigé par des radiologues praticiens car la connaissance approfondie de l'anatomie est le fondement incontournable du métier de radiologue. Cet atlas permet de faire le lien direct entre les structures anatomiques et leur représentation en imagerie médicale (radiographie, scanner, IRM), ce qui est indispensable pour l'apprentissage du diagnostic.",
};

const ARTICLE: ReferenceData = {
  citation: "TRUPIA, Dilara Vanessa, GAGLIO, Gérald et MATHIEU-FRITZ, Alexandre. Comment l'IA s'invite-t-elle dans l'imagerie médicale ? Une approche comparative entre radiologie et dermatologie. Revue française des affaires sociales [en ligne], 2026, vol. Janvier-Mars, n° 1, pp. 151-172.",
  url: 'https://share.google/7xR8iyMB8R7IyI0cv',
  linkText: 'Comment l’IA s’invite-t-elle dans l’imagerie médicale ? Une approche comparative entre radiologie et dermatologie - ODéBU+ - Université de Poitiers',
  request: "Pour trouver cet article de recherche, je me suis servie du catalogue de la BU (Odébu) en utilisant les mots-clés : intelligence artificielle, radiologie, imagerie médicale et en filtrant les résultats pour n'afficher que les articles de revue évalués.",
  reason: "J'ai choisi cet article car il analyse précisément comment l'intelligence artificielle modifie la pratique quotidienne des radiologues. C'est une source scientifique et très récente qui m'apporte des éléments professionnels précis sur l'avenir de mon futur métier.",
};

const WEB_SOURCES: ReferenceData[] = [
  {
    citation: "ANNONCES MÉDICALES. Radiologue - Annonces en radiologie : offres d'emploi et de remplacement [en ligne].",
    url: 'https://www.annonces-medicales.com',
    linkText: 'https://www.annonces-medicales.com',
    request: "Pour trouver des informations concrètes sur l'insertion professionnelle et le marché de l'emploi du secteur, j'ai effectué une recherche sur un moteur de recherche avec les mots-clés : \"offres d'emploi\" radiologue remplacement installation.",
    reason: "J'ai choisi cette plateforme car elle permet d'analyser directement les besoins du marché du travail pour les radiologues (CDI, CDD, remplacements ou cessions d'installation). Cela apporte une vision réaliste et pratique des perspectives d'embauche après le cursus de spécialisation.",
  },
  {
    citation: "L'ÉTUDIANT. Devenir Radiologue : métier, études, salaire [en ligne].",
    url: 'https://www.letudiant.fr/metiers/radiologue.html',
    linkText: 'https://www.letudiant.fr/metiers/radiologue.html',
    request: "Pour documenter l'aspect orientation et formation, j'ai utilisé le moteur de recherche Google avec la requête : \"Devenir Radiologue\" site:letudiant.fr.",
    reason: "J'ai choisi cette source car c'est un portail d'orientation de référence pour les étudiants. Elle détaille clairement le parcours de formation (le passage par les études de santé, le concours de l'internat et la spécialisation), ainsi que la réalité du salaire et les conditions d'exercice du métier, ce qui répond directement à mes interrogations de poursuite d'études.",
  },
  {
    citation: "SOCIÉTÉ FRANÇAISE DE RADIOLOGIE (SFR). Dépistage organisé du cancer du sein : les propositions de la SIFEM pour faire évoluer le dispositif [en ligne].",
    url: 'https://www.radiologie.fr',
    linkText: 'https://www.radiologie.fr',
    request: "Pour trouver une source qui évoque directement des instances professionnelles du secteur, j'ai effectué une recherche sur un moteur de recherche avec les mots-clés : \"Société Française de Radiologie\" actualités métier.",
    reason: "J'ai choisi le site de la SFR car il s'agit de l'organisme de référence pour les radiologues en France. Cette source me permet de me tenir informée des actualités de la profession, des recommandations de santé publique (comme le dépistage) et des enjeux scientifiques actuels gérés par les praticiens du secteur.",
  },
];

export default function Bibliography() {
  return (
    <section className="mx-auto max-w-5xl space-y-16 px-6 py-12 md:space-y-24">
      
      <div>
        <SectionTitle>Livre</SectionTitle>
        <ReferenceCard 
          reference={BOOK} 
          imageSrc="/3.jpg" 
          imageLabel="Couverture du livre" 
          imageAspect="aspect-[3/4]"
        />
      </div>

      <div>
        <SectionTitle>Article de revue en ligne</SectionTitle>
        <ReferenceCard 
          reference={ARTICLE} 
          imageSrc="/4.jpg" 
          imageLabel="Visuel de la revue" 
          imageAspect="aspect-[4/5]"
        />
      </div>

      <div>
        <SectionTitle>Sources web</SectionTitle>
        <div className="space-y-16 md:space-y-20">
          {WEB_SOURCES.map((source, index) => {
             // Utilisation des images 5, 6 et 7. 
             // Ajuste les extensions (.png ou .jpg) selon les fichiers exacts que tu as dans public/
             const ext = index === 1 ? 'jpg' : 'png';
             return (
               <ReferenceCard
                 key={index}
                 reference={source}
                 imageSrc={`/${index + 5}.${ext}`}
                 imageLabel={`Capture de la source web ${index + 1}`}
                 imageAspect="aspect-video"
               />
             )
          })}
        </div>
      </div>
      
    </section>
  );
}
