import { useState } from 'react';
import './index.css' // Import global styles
import './App.css'   // Import app specific styles

function App() {
  const [currentPage, setCurrentPage] = useState('landing'); // 'landing' or 'info'


  const handleShowInfo = () => {
    setCurrentPage('info');

  };

  const handleShowLanding = () => {
    setCurrentPage('landing');
  };

  return (
    <div className="antialiased font-sans bg-[#1a1a1a] text-[#ffffff] m-0 p-0 overflow-hidden h-screen">

      {/* SECTION 1: Landing Page
        We use React's conditional rendering. This section will only
        be rendered if 'currentPage' is 'landing'.
      */}
      {currentPage === 'landing' && (
        <div id="landingPage" className="flex flex-col items-center justify-center h-screen w-full text-center p-4">

          {/* Converted '.placeholder-logo' to Tailwind */}
          <div className="w-[80%] max-w-[400px] h-[150px] border-[3px] border-dashed border-gray-500 flex justify-center items-center text-2xl font-bold rounded-xl text-center mb-8">
            STWBCS
          </div>

          {/* Using the updated text from your HTML */}
          <p className="text-xl mb-4 text-gray-400">TRIO FRAMES STUDIO!</p>

          {/* This button uses a React 'onClick' handler */}
          <button
            id="enterButton"
            className="bg-yellow-400 text-red-900 font-bold text-2xl py-4 px-10 rounded-full shadow-lg transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-yellow-300"
            onClick={handleShowInfo}
          >
            CLICK HERE!
          </button>

          {/* Using the updated text from your HTML */}
          <div className="absolute bottom-10 text-gray-500">
            -
          </div>
        </div>
      )}

      {/* SECTION 2: Info Pages Container
        This section will only be rendered if 'currentPage' is 'info'.
      */}
      {currentPage === 'info' && (
        // Converted '#infoPagesContainer' to Tailwind
        <div id="infoPagesContainer" className="h-screen overflow-y-auto snap-y snap-mandatory">

          {/* Fixed "Back to Home" Button with React 'onClick' */}
          <button
            id="homeButton"
            className="fixed top-4 left-4 z-50 bg-gray-700 text-white py-2 px-4 rounded-lg shadow hover:bg-gray-600"
            onClick={handleShowLanding}
          >
            &larr; Home
          </button>

          {/* Page 1: What!? */}
          {/* Converted '.info-section' to Tailwind */}
          <section className="h-screen w-full flex flex-col justify-center items-center p-8 border-b-2 border-dashed border-gray-700 snap-start">
            <h1 className="text-6xl font-extrabold mb-6">WHAT!?</h1>
            <p className="text-2xl text-gray-400 mb-8">The show is about...</p>
            {/* Converted '.placeholder-info' to Tailwind */}
            <div className="w-full max-w-[500px] h-[100px] border-2 border-dashed border-gray-500 rounded-lg p-4 bg-gray-800 mb-8">
              <p>Placeholder for description of the show. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex space-x-4">
              {/* Converted '.placeholder-character' to Tailwind */}
              <div className="w-[80px] h-[80px] border-2 border-dashed border-gray-500 rounded-full flex justify-center items-center text-xs text-center bg-gray-800">Character 1</div>
              <div className="w-[80px] h-[80px] border-2 border-dashed border-gray-500 rounded-full flex justify-center items-center text-xs text-center bg-gray-800">Character 2</div>
              <div className="w-[80px] h-[80px] border-2 border-dashed border-gray-500 rounded-full flex justify-center items-center text-xs text-center bg-gray-800">Character 3</div>
            </div>
            <div className="absolute bottom-10 text-gray-500 animate-bounce">
              Scroll Down &darr;
            </div>
          </section>

          {/* Page 2: Hosts */}
          <section className="h-screen w-full flex flex-col justify-center items-center p-8 border-b-2 border-dashed border-gray-700 snap-start">
            <h2 className="text-5xl font-bold mb-8">Hosts</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
              {/* Host 1: Paisley */}
              <div className="flex flex-col items-center">
                {/* Converted inline 'style' to Tailwind classes */}
                <div className="w-[120px] h-[120px] border-2 border-dashed border-gray-500 rounded-full flex justify-center items-center text-xs text-center bg-gray-800 mb-4">Paisley</div>
                <h3 className="text-3xl font-semibold mb-2">PAISLEY</h3>
                <div className="w-full max-w-[500px] h-[100px] border-2 border-dashed border-gray-500 rounded-lg p-4 bg-gray-800">
                  Info about Paisley...
                </div>
              </div>
              {/* Host 2: Beefy (Using updated name) */}
              <div className="flex flex-col items-center">
                <div className="w-[120px] h-[120px] border-2 border-dashed border-gray-500 rounded-full flex justify-center items-center text-xs text-center bg-gray-800 mb-4">Beefy</div>
                <h3 className="text-3xl font-semibold mb-2">BEEFY</h3>
                <div className="w-full max-w-[500px] h-[100px] border-2 border-dashed border-gray-500 rounded-lg p-4 bg-gray-800">
                  Info about Beefy...
                </div>
              </div>
              {/* Host 3: Chessy */}
              <div className="flex flex-col items-center">
                <div className="w-[120px] h-[120px] border-2 border-dashed border-gray-500 rounded-full flex justify-center items-center text-xs text-center bg-gray-800 mb-4">Chessy</div>
                <h3 className="text-3xl font-semibold mb-2">CHESSY</h3>
                <div className="w-full max-w-[500px] h-[100px] border-2 border-dashed border-gray-500 rounded-lg p-4 bg-gray-800">
                  Info about Chessy...
                </div>
              </div>
            </div>
          </section>

          {/* Page 3: Contestants */}
          <section className="h-screen w-full flex flex-col justify-center items-center p-8 border-b-2 border-dashed border-gray-700 snap-start">
            <h2 className="text-5xl font-bold mb-8">Contestants</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Contestant Placeholders */}
              <div className="flex flex-col items-center">
                <div className="w-[80px] h-[80px] border-2 border-dashed border-gray-500 rounded-full flex justify-center items-center text-xs text-center bg-gray-800">Contestant</div>
                <p className="mt-2 text-lg">Name 1</p>
                <p className="text-sm text-gray-400">(they/them)</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-[80px] h-[80px] border-2 border-dashed border-gray-500 rounded-full flex justify-center items-center text-xs text-center bg-gray-800">Contestant</div>
                <p className="mt-2 text-lg">Name 2</p>
                <p className="text-sm text-gray-400">(she/her)</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-[80px] h-[80px] border-2 border-dashed border-gray-500 rounded-full flex justify-center items-center text-xs text-center bg-gray-800">Contestant</div>
                <p className="mt-2 text-lg">Name 3</p>
                <p className="text-sm text-gray-400">(he/him)</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-[80px] h-[80px] border-2 border-dashed border-gray-500 rounded-full flex justify-center items-center text-xs text-center bg-gray-800">Contestant</div>
                <p className="mt-2 text-lg">Name 4</p>
                <p className="text-sm text-gray-400">(she/they)</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-[80px] h-[80px] border-2 border-dashed border-gray-500 rounded-full flex justify-center items-center text-xs text-center bg-gray-800">Contestant</div>
                <p className="mt-2 text-lg">Name 5</p>
                <p className="text-sm text-gray-400">(he/they)</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-[80px] h-[80px] border-2 border-dashed border-gray-500 rounded-full flex justify-center items-center text-xs text-center bg-gray-800">Contestant</div>
                <p className="mt-2 text-lg">Name 6</p>
                <p className="text-sm text-gray-400">(any)</p>
              </div>
            </div>

            <button className="mt-12 bg-gray-700 text-white py-2 px-4 rounded-lg shadow hover:bg-gray-600">
              Credits
            </button>
          </section>


        </div>
      )}
    </div>
  );
}

export default App;