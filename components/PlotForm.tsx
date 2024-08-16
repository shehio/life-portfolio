import React, { useState } from 'react';
import LifeUnitSection from './LifeUnitSection';

interface PlotFormProps {
  onSubmit: (xValues: number[], yValues: number[], hoursValues: number[], labels: string[]) => void;
}

const PlotForm: React.FC<PlotFormProps> = ({ onSubmit }) => {
  const [x1, setX1] = useState<string>('');
  const [y1, setY1] = useState<string>('');
  const [x2, setX2] = useState<string>('');
  const [y2, setY2] = useState<string>('');
  const [x3, setX3] = useState<string>('');
  const [y3, setY3] = useState<string>('');
  const [hours1, setHours1] = useState<string>('');
  const [hours2, setHours2] = useState<string>('');
  const [hours3, setHours3] = useState<string>('');

  const labels = ['Faith', 'Family', 'Sports'];
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const xValues = [parseFloat(x1), parseFloat(x2), parseFloat(x3)];
    const yValues = [parseFloat(y1), parseFloat(y2), parseFloat(y3)];
    const hoursValues = [parseInt(hours1, 10), parseInt(hours2, 10), parseInt(hours3, 10)];
    onSubmit(xValues, yValues, hoursValues, labels);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h3 className="mb-4">Strategic Life Units</h3>
      <LifeUnitSection
        title={labels[0]}
        importanceValue={x1}
        satisfactionValue={y1}
        hoursPerWeek={hours1}
        onImportanceChange={(e) => setX1(e.target.value)}
        onSatisfactionChange={(e) => setY1(e.target.value)}
        onHoursChange={(e) => setHours1(e.target.value)}
      />
      <LifeUnitSection
        title={labels[1]}
        importanceValue={x2}
        satisfactionValue={y2}
        hoursPerWeek={hours2}
        onImportanceChange={(e) => setX2(e.target.value)}
        onSatisfactionChange={(e) => setY2(e.target.value)}
        onHoursChange={(e) => setHours2(e.target.value)}
      />
      <LifeUnitSection
        title={labels[2]}
        importanceValue={x3}
        satisfactionValue={y3}
        hoursPerWeek={hours3}
        onImportanceChange={(e) => setX3(e.target.value)}
        onSatisfactionChange={(e) => setY3(e.target.value)}
        onHoursChange={(e) => setHours3(e.target.value)}
      />
      <button type="submit" className="btn btn-primary mt-3">Generate Plot</button>
    </form>
  );
};

export default PlotForm;