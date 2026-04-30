import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { reservasMock } from "../data/reservasMock";
import { useAuth } from "../context/AuthContext";

import canchasfutbol from "../assets/images/futbol.jpg";
import canchaspadel from "../assets/images/padel.jpg";
import canchasvoleibol1 from "../assets/images/canchavoleibol.jpg";
import canchasvoleibol2 from "../assets/images/canchapisovoleibol.jpg";

const infoCanchas = {
  1: { nombre: "Arena 5 Norte", precio: 35000, imagen: canchasfutbol },
  2: { nombre: "Arena 5 Sur", precio: 45000, imagen: canchasfutbol },
  3: { nombre: "Estadio Urbano", precio: 48000, imagen: canchasfutbol },
  4: { nombre: "Padel Cancha 1", precio: 25000, imagen: canchaspadel },
  5: { nombre: "Padel Cancha 2", precio: 25000, imagen: canchaspadel },
  6: { nombre: "Padel Cancha 3", precio: 30000, imagen: canchaspadel },
  7: { nombre: "Voleibol Arena 1", precio: 35000, imagen: canchasvoleibol1 },
  8: { nombre: "Voleibol Piso", precio: 35000, imagen: canchasvoleibol2 },
  9: { nombre: "Voleibol Arena 2", precio: 30000, imagen: canchasvoleibol1 },
};

export default function Reservar() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const cancha = infoCanchas[id];
  const data = reservasMock[id] || reservasMock[1];

  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [mensaje, setMensaje] = useState("");

  if (!cancha) return <p className="text-white p-6">Cancha no encontrada</p>;

  const hoy = new Date();
  const fechaHoy = hoy.toISOString().split("T")[0];
  const horaActual = hoy.getHours();

  const bloqueado = data.noDisponibles.includes(fecha);
  const duracionReserva = 2;
  const totalReserva = cancha.precio * duracionReserva;

  const generarHorarios = () => {
    const horariosBase = [8, 10, 12, 14, 16, 18, 20, 22];

    if (!fecha) return [];

    if (fecha === fechaHoy) {
      return horariosBase.filter((h) => h > horaActual);
    }

    return horariosBase;
  };

  const horariosDisponibles = generarHorarios();
  const reservasGuardadas =
    JSON.parse(localStorage.getItem("reservas")) || [];

  const ocupadosMock = data.ocupados[fecha] || [];

  const ocupadosLocales = reservasGuardadas
    .filter(
      (r) =>
        r.canchaId === id &&
        r.fecha === fecha
    )
    .map((r) => r.hora);

  const ocupados = [...new Set([...ocupadosMock, ...ocupadosLocales])];

  const guardarReserva = () => {
    if (!user) return;

    if (!fecha || !hora) {
      setMensaje("Selecciona fecha y hora");
      return;
    }

    const reservas = JSON.parse(localStorage.getItem("reservas")) || [];

    const yaExiste = reservas.some(
      (r) => r.canchaId === id && r.fecha === fecha && r.hora === hora
    );

    if (yaExiste) {
      setMensaje("⚠️ Ese horario ya está reservado");
      return;
    }

    const nuevaReserva = {
      usuario: user.nombre,
      canchaId: id,
      cancha: cancha.nombre,
      fecha,
      hora,
    };

    localStorage.setItem(
      "reservas",
      JSON.stringify([...reservas, nuevaReserva])
    );

    setMensaje("✅ Reserva realizada con éxito.");

    setTimeout(() => {
      navigate("/canchas");
    }, 1800);
  };

  return (
    <div className="relative min-h-screen text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${cancha.imagen})` }}
      />
      <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm" />

      <div className="relative z-10">
        <Navbar paginaActiva="reservas" />

        <div
          className={`max-w-5xl mx-auto p-6 ${
            !user ? "blur-sm pointer-events-none" : ""
          }`}
        >
          {/* Header */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src={cancha.imagen}
              className="w-full h-72 object-cover"
              alt={cancha.nombre}
            />

            <div className="p-8">
              <h1 className="text-4xl font-bold text-green-400">
                {cancha.nombre}
              </h1>

              <p className="text-xl text-yellow-400 mt-2 font-semibold">
                ${cancha.precio.toLocaleString()} / hora
              </p>
            </div>
          </div>

          {/* Selector */}
          <div className="mt-8 bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-xl">
            <h2 className="text-2xl font-bold mb-6">
              Selecciona tu reserva
            </h2>

            {/* Fecha */}
            <div className="mt-6">
              <label className="block mb-3 text-slate-300 font-medium">
                Fecha de reserva
              </label>

              <div
                onClick={() =>
                  document.getElementById("fechaReserva")?.showPicker()
                }
                className={`group relative overflow-hidden rounded-3xl border cursor-pointer transition-all duration-300 ${
                  fecha
                    ? "border-green-400 bg-gradient-to-r from-green-500/10 to-emerald-500/5"
                    : "border-white/10 bg-white/5 hover:border-green-400"
                }`}
              >
                <input
                  id="fechaReserva"
                  type="date"
                  min={fechaHoy}
                  value={fecha}
                  onChange={(e) => {
                    setFecha(e.target.value);
                    setHora("");
                    setMensaje("");
                  }}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />

                <div className="p-6 flex justify-between items-center">
                  <div>
                    <p className="text-sm text-slate-400">
                      {fecha ? "Fecha seleccionada" : "Selecciona tu día"}
                    </p>

                    <p className="text-xl font-semibold capitalize">
                      {fecha
                        ? new Date(
                            fecha + "T00:00:00"
                          ).toLocaleDateString("es-CO", {
                            weekday: "long",
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })
                        : "Haz clic para elegir"}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-green-500">
                    📅
                  </div>
                </div>
              </div>
            </div>

            {/* Horarios */}
            {fecha && !bloqueado && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">
                  Bloques disponibles (2 horas)
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {horariosDisponibles.map((horaNum) => {
                    const h = `${horaNum.toString().padStart(2, "0")}:00`;
                    const ocupado = ocupados.includes(h);

                    return (
                      <button
                        key={h}
                        disabled={ocupado}
                        onClick={() => setHora(h)}
                        className={`p-4 rounded-2xl font-semibold transition-all ${
                          ocupado
                            ? "bg-red-500/40 cursor-not-allowed"
                            : hora === h
                            ? "bg-green-500 scale-105 shadow-lg"
                            : "bg-white/10 hover:bg-white/20"
                        }`}
                      >
                        {h}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Resumen */}
            {hora && (
              <div className="mt-8 bg-white/10 rounded-2xl p-5 border border-white/10">
                <h3 className="font-bold text-green-400 mb-3">
                  Resumen
                </h3>

                <p>{cancha.nombre}</p>
                <p>{fecha}</p>



                <p>{hora} - {parseInt(hora.split(":")[0]) + duracionReserva}:00</p>

                <p className="text-slate-300 mt-2">
                  {cancha.precio.toLocaleString()} x {duracionReserva} horas
                </p>

                <p className="text-yellow-400 font-bold mt-3 text-xl">
                  Total: ${totalReserva.toLocaleString()}
                </p>



              </div>
            )}

            {/* Botón */}
            {hora && (
              <button
                onClick={guardarReserva}
                className="mt-6 w-full bg-green-500 hover:bg-green-600 py-4 rounded-2xl font-bold text-lg"
              >
                Confirmar reserva
              </button>
            )}

            {mensaje && (
              <div className="mt-5 p-4 rounded-2xl bg-green-500/15 border border-green-400 text-center animate-pulse">
                {mensaje}
              </div>
            )}
          </div>
        </div>

        {/* Modal login */}
        {!user && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50">
            <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl text-center max-w-md border border-white/10">
              <h2 className="text-3xl font-bold text-green-400 mb-4">
                Acceso requerido
              </h2>

              <Link
                to="/miperfil"
                className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-2xl font-bold"
              >
                Iniciar sesión
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}