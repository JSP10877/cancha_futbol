import Navbar from '../components/Navbar'; // Importas la pieza de Lego

const Home = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-white">
      <Navbar />
      
      <main>
        {/* Aquí sigue el resto de tu contenido del home */}
        <h2 className="text-center text-4xl mt-10">Bienvenido a la cancha</h2>
      </main>
    </div>
  );
};

export default Home;