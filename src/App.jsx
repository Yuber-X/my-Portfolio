import './App.css';
import './index.css';
import { Navbar } from '../src/components/NavBar.jsx';
import { LoadingScreen } from './components/LoadingScreen.jsx';
import { MobileMenu } from './components/MobileMenu.jsx';
import { useState } from 'react';



function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <div className="App">
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}
        <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}></div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

    </div>

  )
}

export default App


