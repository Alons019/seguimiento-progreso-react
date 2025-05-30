// src/pages/Dashboard.jsx
import { useState } from 'react';
import ProgressChart from '../components/ProgressChart';
import Filters from '../components/Filters';
import Recommendations from '../components/Recommendations';

const Dashboard = () => {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState([
    { fecha: '2025-05-01', progreso: 40 },
    { fecha: '2025-05-08', progreso: 55 },
    { fecha: '2025-05-15', progreso: 60 },
  ]);

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const progresoPromedio = data.reduce((acc, val) => acc + val.progreso, 0) / data.length;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Seguimiento de Progreso</h1>
      <Filters onFilterChange={handleFilterChange} />
      <ProgressChart data={data} />
      <Recommendations progreso={progresoPromedio} />
    </div>
  );
};

export default Dashboard;
