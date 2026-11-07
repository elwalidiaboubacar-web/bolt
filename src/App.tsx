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
        
        {/* On remet le nuage de mots ici */}
        <div className="mt-8 md:mt-12">
          <WordCloud />
        </div>
        
        <div className="mt-12 md:mt-16">
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
