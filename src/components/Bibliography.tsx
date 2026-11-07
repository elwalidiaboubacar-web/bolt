import ReferenceCard, { type ReferenceData } from '@/components/ReferenceCard';

const BOOK: ReferenceData = {
  citation: 'GARCIA, Dominique (sous la direction de), La Fabrique de la France, 20 ans d\'archéologie préventive [en ligne]. Paris : Flammarion, 2021, 323 p.',
  url: 'https://shs-cairn-info.ressources.univ-poitiers.fr/la-fabrique-de-la-france--9782080234704?lang=fr',
  request: "Pour commencer mes recherches, je suis allé sur le site du SCD. J'ai choisi de garder cette référence car si l'intégralité du livre n'est pas disponible en ligne, de nombreuses pages de chaque chapitre le sont.",
  reason: "J'ai choisi ce livre car en tapant la requête 'archéologue', je pensais trouver des ouvrages sur des pays très lointains. Je me suis rendu compte que l'archéologie est une discipline qui intervient non seulement pour explorer le passé mais pour construire l'avenir, dans la vie de tous les jours, partout en France. Cela me semble loin du cliché 'Indiana Jones' et me semble très pertinent vis-à-vis de mon sujet. En effet, il présente le métier d'archéologue dans toutes ses dimensions et en montre l'extraordinaire variété et utilité.",
};

const ARTICLE: ReferenceData = {
  citation: 'LEHÖERFF Anne. Que faire des restes humains. L\'Histoire [en ligne], 2023/10 N° 512, pp.12-18.',
  url: 'https://shs-cairn-info.ressources.univ-poitiers.fr/magazine-hist-histoire-2023-10-page-12?lang=fr',
  request: "Je suis allé sur le site du SCD et j'ai choisi de consulter le bouquet de ressource généralistes CAIRN. J'ai cherché 'problématique archéologique' dans les revues récentes et je suis allé naturellement sur L'Histoire que je lis régulièrement. J'ai sélectionné les 5 dernières années comme date de publication.",
  reason: "Le numéro en question est disponible intégralement en ligne et reflète une problématique très actuelle : les musées doivent-ils garder ce qu'ils ont recueilli dans d'autres pays, en particulier quand il s'agit de restes humains ? L'auteure est professeure d'université, membre de l'IUF et a beaucoup publié sur le sujet. J'ai donc pensé qu'il s'agit d'une source fiable.",
};

const WEB_SOURCES: ReferenceData[] = [
  {
    citation: 'Ministère chargé de l\'enseignement supérieur et de la recherche. Les personnels de la recherche [en ligne].',
    url: 'https://www.enseignementsup-recherche.gouv.fr/fr/les-personnels-de-la-recherche-46556',
    request: "Pour trouver cette page web j'ai effectué dans le moteur de recherche 'DuckDuckGo' les requêtes 'devenir chercheur', 'devenir archéologue', 'études archéologie'… puis dans le moteur 'Ecosia' pour voir la différence dans les résultats.",
    reason: "Un archéologue est chercheur ou enseignant chercheur, donc employé par le ministère de l'enseignement supérieur et de la recherche. Ce site m'a permis de trouver une information fiable et officielle sur le métier d'enseignant chercheur ou de chercheur en archéologie. On y trouve la fiche de poste d'un enseignant chercheur ou d'un chercheur, les études à effectuer, le salaire et d'autres renseignements. J'ai aussi trouvé d'autres métiers (ingénieur de recherche, chargé d'études) qui sont susceptibles de m'intéresser.",
  },
  {
    citation: 'Ipso Facto, Archéologie [en ligne].',
    url: 'https://ipsofacto.coop/archeologie/',
    request: "Je me suis servi du Guide des ressources d'Emploi qui figure dans les ressources documentaires et j'ai cherché 'archéologue', car je voulais voir si des entreprises offraient ce type de poste.",
    reason: "Ce site est celui d'un bureau d'études, 1er opérateur agréé d’archéologie préventive subaquatique et sous-marine. Comme je suis passionné de plongée, cela m'a ouvert beaucoup de perspectives tant sur les études que les postes possibles.",
  },
  {
    citation: 'Arcade. Les chantiers d\'Arcade [en ligne].',
    url: 'https://patrimoine-arcade.fr/chantiers/',
    request: "Je me suis servi du Guide des ressources d'Emploi qui figure dans les ressources documentaires et j'ai cherché des entreprises ou des structures permettant de chercher du travail.",
    reason: "Arcade est une association qui propose à des jeunes (18-30 ans) des chantiers bénévoles dans toute la France sur tout le patrimoine historique. Je pense aller regarder si je pourrai participer à un chantier de manière à en avoir une vision réaliste et commencer à me tisser un réseau.",
  },
];

export default function Bibliography() {
  return (
    <section className="mx-auto max-w-5xl space-y-16 px-6 py-12 md:space-y-24">
      
      {/* SECTION LIVRE */}
      <div>
        <h2 className="mb-8 text-center text-3xl font-light text-blue-700">Livre</h2>
        <ReferenceCard 
          reference={BOOK} 
          imageSrc="/3.jpg" 
          imageLabel="Couverture du livre" 
          imageAspect="aspect-[3/4]"
        />
      </div>

      {/* SECTION ARTICLE */}
      <div>
        <h2 className="mb-8 text-center text-3xl font-light text-blue-700">Article de revue en ligne</h2>
        <ReferenceCard 
          reference={ARTICLE} 
          imageSrc="/4.jpg" 
          imageLabel="Visuel de la revue" 
          imageAspect="aspect-[4/5]"
        />
      </div>

      {/* SECTION SOURCES WEB */}
      <div>
        <h2 className="mb-8 text-center text-3xl font-light text-blue-700">Sources web</h2>
        <div className="space-y-16 md:space-y-20">
          {WEB_SOURCES.map((source, index) => {
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
