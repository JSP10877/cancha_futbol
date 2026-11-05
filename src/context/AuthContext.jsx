import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  // Ñamoñepyrũ ko'ápe pe estado ojehecha haguã localStorage-pe peteĩ function rupive
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("userActivo");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const saveUser = (usuario) => {
    const userNormalizado = {
      ...usuario,
      Billetera: usuario.billetera !== undefined ? usuario.billetera : (usuario.Billetera || 0)
    };
    localStorage.setItem("userActivo", JSON.stringify(userNormalizado));
    setUser(userNormalizado);
  };

  // REGISTRO
  const register = async (formData) => {
    try {
      const response = await fetch("http://localhost:4000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await response.json();

      if (data.ok) {
        saveUser(data.user);
        return { ok: true };
      } else {
        return { ok: false, msg: data.msg };
      }
    } catch (error) {
      console.error("Error en registro:", error);
      return { ok: false, msg: "❌ No se pudo conectar con el servidor" };
    }
  };

  // LOGIN
  const login = async ({ correo, password }) => {
    try {
      const response = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correo, password })
      });
      const data = await response.json();

      if (data.ok) {
        saveUser(data.user);
        return { ok: true };
      } else {
        return { ok: false, msg: data.msg };
      }
    } catch (error) {
      console.error("Error en login:", error);
      return { ok: false, msg: "❌ No se pudo conectar con el servidor" };
    }
  };

  // ACTUALIZAR PERFIL
  const updateUser = async (dataForm) => {
    if (!user || !user.id) {
      return { ok: false, msg: "Usuario no autenticado" };
    }

    try {
      const response = await fetch(`http://localhost:4000/api/usuarios/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataForm)
      });
      const data = await response.json();

      if (data.ok) {
        saveUser(data.user);
        return { ok: true };
      } else {
        return { ok: false, msg: data.msg };
      }
    } catch (error) {
      console.error("Error al actualizar:", error);
      return { ok: false, msg: "❌ Error de conexión al actualizar" };
    }
  };

  const addBalance = async (amount) => {
    const saldoActual = user.Billetera || 0;
    const nuevoSaldo = saldoActual + amount;
    await updateUser({ ...user, billetera: nuevoSaldo });
  };

  const logout = () => {
    localStorage.removeItem("userActivo");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        updateUser,
        addBalance
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}