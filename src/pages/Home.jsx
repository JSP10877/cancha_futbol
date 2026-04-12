import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-white">

      {/* Menú pagina desde components/Navbar */}
      <Navbar paginaActiva="inicio"/>
      
      <main>
        {/* Aquí sigue el resto de tu contenido del home */}
        <h2 className="text-center text-4xl mt-10">Bienvenido al inicio</h2>
      </main>

    </div>
  );
};

export default Home;