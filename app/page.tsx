// app/page.tsx
"use client"; // Add this line at the top of the file

import { useState } from 'react';
import PlotForm from '../components/PlotForm';
import Plot from '../components/Plot';

interface Data {
  x: number[];
  y: number[];
  marker: number[];
}

export default function Home() {
  const [data, setData] = useState<Data>({ x: [], y: [], marker:[] });

  const handleFormSubmit = (xValues: number[], yValues: number[], hoursValues: number[]) => {
    setData({ x: xValues, y: yValues, marker: hoursValues });
  };

  return (
    <div>
      <h1>Life Portfolio</h1>
      <PlotForm onSubmit={handleFormSubmit} />
      {data.x.length > 0 && <Plot xData={data.x} yData={data.y} markerData={data.marker} />}
    </div>
  );
}