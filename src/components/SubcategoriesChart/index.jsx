import React, { useState, useEffect } from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';

export const SubcategoriesChart = ({ countBySubcategory }) => {
  const [subcategories, setSubcategories] = useState(null);
  const [counts, setCounts] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    if (countBySubcategory !== undefined) {
      setSubcategories(Object.keys(countBySubcategory));
      setCounts(Object.values(countBySubcategory));
    }
  }, [countBySubcategory]);
  useEffect(() => {
    if (subcategories && counts) {
      setData({
        labels: subcategories,
        datasets: [
          {
            data: counts,
          },
        ],
      });
    }
  }, [subcategories, counts]);
  if (!subcategories || !counts) {
    return <h1>Cargando...</h1>;
  }
  return (
    <div>
      <h1>Productos por subcategorías</h1>
      <RadarChart outerRadius={90} width={730} height={250} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, Math.max(...counts) + 50]} />
        <Radar
          name="Subcategorías"
          dataKey="data"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </div>
  );
};