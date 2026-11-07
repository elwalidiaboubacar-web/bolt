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
        <WordCloud />
        <Bibliography />
        <div className="mt-16 md:mt-24">
          <Conclusion />
        </div>
      </main>
    </div>
  );
}

export default App;
