// src/components/Filters.jsx
const Filters = ({ onFilterChange }) => {
  return (
    <div className="p-4">
      <select onChange={e => onFilterChange('actividad', e.target.value)}>
        <option value="">Todas las actividades</option>
        <option value="tareas">Tareas</option>
        <option value="pruebas">Pruebas</option>
      </select>
      <input
        type="month"
        onChange={e => onFilterChange('fecha', e.target.value)}
        className="ml-4"
      />
    </div>
  );
};

export default Filters;
