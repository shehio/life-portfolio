// app/page.tsx
"use client"; // Add this line at the top of the file

import { useState } from 'react';
import PlotForm from '../components/PlotForm';
import Plot from '../components/Plot';

interface Data {
  x: number[];
  y: number[];
}

export default function Home() {
  const [data, setData] = useState<Data>({ x: [], y: [] });

  const handleFormSubmit = (xValues: number[], yValues: number[]) => {
    setData({ x: xValues, y: yValues });
  };

  return (
    <div>
      <h1>Plot Generator</h1>
      <PlotForm onSubmit={handleFormSubmit} />
      {data.x.length > 0 && <Plot xData={data.x} yData={data.y} />}
    </div>
  );
}