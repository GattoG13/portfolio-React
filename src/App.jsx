import Navbar from './components/Navbar';
import Home from './components/Home';
import FloatingEye from './components/EyeAnimation';
import Projects from './components/Projects';

function App() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <FloatingEye />
      <Home />
      <div className="mt-[5vh]"> 
      <Projects />
      </div>
    </div>
  );
}

export default App;
