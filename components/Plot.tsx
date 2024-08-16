import Plot from 'react-plotly.js';

interface PlotProps {
  xData: number[];
  yData: number[];
  markerData: number[];
  labels: string[];
}

const PlotComponent: React.FC<PlotProps> = ({ xData, yData, markerData, labels }) => {
  return (
    <Plot
      data={[
        {
          x: xData,
          y: yData,
          type: 'scatter',
          mode: 'markers',
          text: labels,
          marker: { size: markerData },
        },
      ]}
      layout={{ width: 800, height: 600, title: 'Life!' }}
    />
  );
};

export default PlotComponent;