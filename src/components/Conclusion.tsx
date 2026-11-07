import SectionTitle from '@/components/SectionTitle';

export default function Conclusion() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-16 md:pb-24">
      <SectionTitle>Conclusion</SectionTitle>
      
      {/* On utilise un espace de 4 entre les paragraphes (space-y-4) pour aérer la lecture */}
      <div className="space-y-4 text-[17px] font-light leading-relaxed text-neutral-800">
        <p>
          Pour réaliser ce travail, j'ai consacré environ 10H à mes recherches, à la collecte des informations et à la création de ma page web. J'ai utilisé plusieurs outils pour mener à bien ce projet, notamment Google et Ecosia pour mes recherches, les bases de données universitaires comme le SCD et Cairn.info, ainsi que ChatGPT pour m'aider à mieux comprendre certaines notions et à organiser mes idées.
        </p>
        <p>
          Ces recherches m'ont permis de découvrir plus en détail le métier de radiologue et de mieux comprendre son importance dans le domaine médical. J'ai notamment appris que cette profession ne se limite pas à l'utilisation d'appareils d'imagerie, mais demande également de solides connaissances médicales et une grande capacité d'analyse.
        </p>
        <p>
          J'ai aussi pu constater que la radiologie est un domaine qui évolue beaucoup avec les nouvelles technologies. L'intelligence artificielle et la téléradiologie apportent de nouvelles possibilités dans la pratique du métier. Même si ces outils peuvent faciliter certaines tâches, le rôle du radiologue reste essentiel pour interpréter les résultats et prendre des décisions médicales.
        </p>
        <p>
          Concernant le marché de l'emploi, ce métier offre des perspectives intéressantes, notamment grâce aux besoins en imagerie médicale et à l'évolution des techniques de diagnostic. Cependant, il demande un long parcours d'études, de la rigueur et une capacité à s'adapter aux évolutions technologiques.
        </p>
        <p>
          Enfin, ce travail m'a permis de confirmer mon intérêt pour cette profession. Il m'a également aidée à avoir une vision plus concrète du métier et des possibilités qu'il peut offrir pour mon avenir professionnel.
        </p>
      </div>
    </section>
  );
}
