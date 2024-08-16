// app/page.tsx
"use client"; // Add this line at the top of the file

import { useState } from 'react';
import PlotForm from '../components/PlotForm';
import Plot from '../components/Plot';

interface Data {
  x: number[];
  y: number[];
  marker: number[];
  labels: string[];
  colors: string[];
}

export default function Home() {
  const [data, setData] = useState<Data>({ x: [], y: [], marker:[], labels:[], colors:[] });

  const handleFormSubmit = (xValues: number[], yValues: number[], hoursValues: number[], labels: string[]) => {
    const calculateAverages = (values: number[]): number => {
      return values.reduce((sum, value) => sum + value, 0) / values.length;
    };
  
    const averageX = calculateAverages(xValues);
    const averageY = calculateAverages(yValues);
  
    const getColorsBasedOnQuadrants = (xValues: number[], yValues: number[], avgX: number, avgY: number): string[] => {
      return xValues.map((x, index) => {
        const y = yValues[index];
        if (x >= avgX && y >= avgY) {
          return 'green';  // upper right
        } else if (x < avgX && y >= avgY) {
          return 'blue';   // upper left
        } else if (x < avgX && y < avgY) {
          return 'red';    // lower left
        } else {
          return 'orange'; // lower right
        }
      });
    };
  
    const colors = getColorsBasedOnQuadrants(xValues, yValues, averageX, averageY);
    setData({ x: xValues, y: yValues, marker: hoursValues, labels: labels, colors: colors });
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
        <Plot xData={data.x} yData={data.y} markerData={data.marker} labels={data.labels} colors={data.colors} />
      </div>
    </div>
  )}
</div>
  );
}