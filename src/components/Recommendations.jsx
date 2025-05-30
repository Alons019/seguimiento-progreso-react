// src/components/Recommendations.jsx
const Recommendations = ({ progreso }) => {
  return (
    <div className="p-4 bg-gray-100 rounded mt-4">
      <h3 className="font-bold">Recomendaciones</h3>
      {progreso < 50 ? (
        <p>Estás por debajo del promedio. Te sugerimos revisar tus objetivos y enfocarte en las áreas con menor rendimiento.</p>
      ) : (
        <p>¡Buen trabajo! Sigue manteniendo tu ritmo para mejorar aún más.</p>
      )}
    </div>
  );
};

export default Recommendations;
