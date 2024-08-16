// components/Plot.tsx
import Plot from 'react-plotly.js';

interface PlotProps {
  xData: number[];
  yData: number[];
  markerData: number[];
}

const PlotComponent: React.FC<PlotProps> = ({ xData, yData, markerData }) => {
  return (
    <Plot
      data={[
        {
          x: xData,
          y: yData,
          type: 'scatter',
          mode: 'markers',
          marker: { size: markerData },
        },
      ]}
      layout={{ width: 600, height: 400, title: 'A Fancy Plot' }}
    />
  );
};

export default PlotComponent;