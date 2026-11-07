import Header from '@/components/Header';
import Introduction from '@/components/Introduction';
import WordCloud from '@/components/WordCloud';
import Bibliography from '@/components/Bibliography';
import Conclusion from '@/components/Conclusion';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto max-w-7xl space-y-12 pb-24 pt-12">
        <Introduction />
        <WordCloud />
        <Bibliography />
        <Conclusion />
      </main>
    </div>
  );
}

export default App;
