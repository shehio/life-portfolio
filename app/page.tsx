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
    <div className="container">
  <h1 className="display-4 text-center col-md-5">Life Portfolio</h1>
  <div className="row justify-content-center">
    <div className="col-md-10">
      <PlotForm onSubmit={handleFormSubmit} />
    </div>
  </div>
  {data.x.length > 0 && (
    <div className="row justify-content-center mt-4">
      <div className="col-md-12">
        <Plot xData={data.x} yData={data.y} markerData={data.marker} />
      </div>
    </div>
  )}
</div>
  );
}