import Header from '@/components/Header';
import Introduction from '@/components/Introduction';
import WordCloud from '@/components/WordCloud';
import Bibliography from '@/components/Bibliography';
import Conclusion from '@/components/Conclusion';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-8 md:pt-12">
        <Introduction />
        {/* Le WordCloud suit directement sans gros espacement */}
        <WordCloud />
        {/* On réduit l'espace au dessus de la bibliographie */}
        <div className="mt-8 md:mt-12">
          <Bibliography />
        </div>
        <div className="mt-12 md:mt-20">
          <Conclusion />
        </div>
      </main>
    </div>
  );
}

export default App;
