
## 🎭 Simulacro de entrevista técnica Frontend con React

### 🧩 Escenario
Estás en una entrevista para un rol **Frontend React**.
La persona entrevistadora te pide construir un componente funcional que permita agregar y marcar tareas como completadas.

### ✅ Requisitos del ejercicio
1. Debe ser un **componente funcional**.
2. Debe usar **estado** (`useState`) para manejar la lista de tareas y el valor del input.
3. Debe recibir al menos una **prop** (`titulo`) para personalizar el encabezado.
4. Debe implementar **manejo de eventos**:
   - `onChange` para capturar lo que escribe la persona usuaria.
   - `onClick` para agregar una tarea.
   - `onClick` para marcar/desmarcar tareas.

### 💻 Solución esperada (ejemplo)
```jsx
import { useState } from "react";

export default function ListaTareas({ titulo = "Mis tareas" }) {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const agregarTarea = () => {
    const valor = tarea.trim();
    if (!valor) return;

    setTareas((prev) => [
      ...prev,
      { id: Date.now(), texto: valor, completada: false },
    ]);
    setTarea("");
  };

  const alternarTarea = (id) => {
    setTareas((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completada: !item.completada } : item
      )
    );
  };

  return (
    <section>
      <h2>{titulo}</h2>

      <input
        type="text"
        value={tarea}
        onChange={(event) => setTarea(event.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={agregarTarea}>Agregar</button>

      <ul>
        {tareas.map((item) => (
          <li key={item.id}>
            <button onClick={() => alternarTarea(item.id)}>
              {item.completada ? "✅" : "⬜"} {item.texto}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
```

### 🗣️ Preguntas de seguimiento comunes
- ¿Por qué `setTareas` usa una función con `prev`?
- ¿Qué mejoras harías para evitar renders innecesarios?
- ¿Cómo separarías este componente para hacerlo más escalable?
