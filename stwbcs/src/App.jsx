import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const handleShowInfo = () => {
    setCurrentPage('info');
  };

  const handleShowLanding = () => {
    setCurrentPage('landing');
  };

  return (
    <div className="antialiased font-sans bg-[#1a1a1a] text-white m-0 p-0 overflow-hidden h-screen">

      {/* Landing Page */}
      {currentPage === 'landing' && (
        <div className="flex flex-col items-center justify-center h-screen w-full text-center p-4">
          
          {/* Logo */}
          <div className="w-4/5 max-w-md h-36 border-4 border-dashed border-gray-500 flex justify-center items-center text-2xl font-bold rounded-xl mb-8">
            STWBCS
          </div>

          <p className="text-xl mb-4 text-gray-400">TRIO FRAMES STUDIO!</p>

          <button
            className="bg-yellow-400 text-red-900 font-bold text-2xl py-4 px-10 rounded-full shadow-lg transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-yellow-300 cursor-pointer"
            onClick={handleShowInfo}
          >
            CLICK HERE!
          </button>

          <div className="absolute bottom-10 text-gray-500">
            -
          </div>
        </div>
      )}

      {/* Info Pages Container */}
      {currentPage === 'info' && (
        <div className="h-screen overflow-y-auto snap-y snap-mandatory">

          {/* Back to Home Button */}
          <button
            className="fixed top-4 left-4 z-50 bg-gray-700 text-white py-2 px-4 rounded-lg shadow hover:bg-gray-600 cursor-pointer transition-colors"
            onClick={handleShowLanding}
          >
            ← Home
          </button>

          {/* Page 1: What!? */}
          <section className="h-screen w-full flex flex-col justify-center items-center p-8 border-b-2 border-dashed border-gray-700 snap-start">
            <h1 className="text-6xl font-extrabold mb-6">WHAT!?</h1>
            <p className="text-2xl text-gray-400 mb-8">The show is about...</p>
            
            <div className="w-full max-w-lg h-24 border-2 border-dashed border-gray-500 rounded-lg p-4 bg-gray-800 mb-8 flex items-center">
              <p className="text-gray-300">Placeholder for description of the show. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            
            <div className="flex space-x-4">
              <div className="w-20 h-20 border-2 border-dashed border-gray-500 rounded-full flex justify-center items-center text-xs text-center bg-gray-800">Character 1</div>
              <div className="w-20 h-20 border-2 border-dashed border-gray-500 rounded-full flex justify-center items-center text-xs text-center bg-gray-800">Character 2</div>
              <div className="w-20 h-20 border-2 border-dashed border-gray-500 rounded-full flex justify-center items-center text-xs text-center bg-gray-800">Character 3</div>
            </div>
            
            <div className="absolute bottom-10 text-gray-500 animate-bounce">
              Scroll Down ↓
            </div>
          </section>

          {/* Page 2: Hosts */}
          <section className="h-screen w-full flex flex-col justify-center items-center p-8 border-b-2 border-dashed border-gray-700 snap-start">
            <h2 className="text-5xl font-bold mb-8">Hosts</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
              {/* Host 1: Paisley */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 border-2 border-dashed border-gray-500 rounded-full flex justify-center items-center text-xs text-center bg-gray-800 mb-4">Paisley</div>
                <h3 className="text-3xl font-semibold mb-2">PAISLEY</h3>
                <div className="w-full h-24 border-2 border-dashed border-gray-500 rounded-lg p-4 bg-gray-800 flex items-center">
                  <p className="text-gray-300 text-sm">Info about Paisley...</p>
                </div>
              </div>
              
              {/* Host 2: Beefy */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 border-2 border-dashed border-gray-500 rounded-full flex justify-center items-center text-xs text-center bg-gray-800 mb-4">Beefy</div>
                <h3 className="text-3xl font-semibold mb-2">BEEFY</h3>
                <div className="w-full h-24 border-2 border-dashed border-gray-500 rounded-lg p-4 bg-gray-800 flex items-center">
                  <p className="text-gray-300 text-sm">Info about Beefy...</p>
                </div>
              </div>
              
              {/* Host 3: Chessy */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 border-2 border-dashed border-gray-500 rounded-full flex justify-center items-center text-xs text-center bg-gray-800 mb-4">Chessy</div>
                <h3 className="text-3xl font-semibold mb-2">CHESSY</h3>
                <div className="w-full h-24 border-2 border-dashed border-gray-500 rounded-lg p-4 bg-gray-800 flex items-center">
                  <p className="text-gray-300 text-sm">Info about Chessy...</p>
                </div>
              </div>
            </div>
          </section>

          {/* Page 3: Contestants */}
          <section className="h-screen w-full flex flex-col justify-center items-center p-8 border-b-2 border-dashed border-gray-700 snap-start">
            <h2 className="text-5xl font-bold mb-8">Contestants</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 border-2 border-dashed border-gray-500 rounded-full flex justify-center items-center text-xs text-center bg-gray-800">C1</div>
                <p className="mt-2 text-lg">Name 1</p>
                <p className="text-sm text-gray-400">(they/them)</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 border-2 border-dashed border-gray-500 rounded-full flex justify-center items-center text-xs text-center bg-gray-800">C2</div>
                <p className="mt-2 text-lg">Name 2</p>
                <p className="text-sm text-gray-400">(she/her)</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 border-2 border-dashed border-gray-500 rounded-full flex justify-center items-center text-xs text-center bg-gray-800">C3</div>
                <p className="mt-2 text-lg">Name 3</p>
                <p className="text-sm text-gray-400">(he/him)</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 border-2 border-dashed border-gray-500 rounded-full flex justify-center items-center text-xs text-center bg-gray-800">C4</div>
                <p className="mt-2 text-lg">Name 4</p>
                <p className="text-sm text-gray-400">(she/they)</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 border-2 border-dashed border-gray-500 rounded-full flex justify-center items-center text-xs text-center bg-gray-800">C5</div>
                <p className="mt-2 text-lg">Name 5</p>
                <p className="text-sm text-gray-400">(he/they)</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 border-2 border-dashed border-gray-500 rounded-full flex justify-center items-center text-xs text-center bg-gray-800">C6</div>
                <p className="mt-2 text-lg">Name 6</p>
                <p className="text-sm text-gray-400">(any)</p>
              </div>
            </div>

            <button className="mt-12 bg-gray-700 text-white py-2 px-4 rounded-lg shadow hover:bg-gray-600 cursor-pointer transition-colors">
              Credits
            </button>
          </section>

        </div>
      )}
    </div>
  );
}

export default App;