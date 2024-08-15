import React, { useState } from 'react';
import LifeUnitSection from './LifeUnitSection';

interface PlotFormProps {
  onSubmit: (xValues: number[], yValues: number[]) => void;
}

const PlotForm: React.FC<PlotFormProps> = ({ onSubmit }) => {
  const [x1, setX1] = useState<string>('');
  const [y1, setY1] = useState<string>('');
  const [x2, setX2] = useState<string>('');
  const [y2, setY2] = useState<string>('');
  const [x3, setX3] = useState<string>('');
  const [y3, setY3] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const xValues = [parseFloat(x1), parseFloat(x2), parseFloat(x3)];
    const yValues = [parseFloat(y1), parseFloat(y2), parseFloat(y3)];
    onSubmit(xValues, yValues);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h3 className="mb-4">Strategic Life Units</h3>
      <LifeUnitSection
        title="Faith"
        importanceValue={x1}
        satisfactionValue={y1}
        onImportanceChange={(e) => setX1(e.target.value)}
        onSatisfactionChange={(e) => setY1(e.target.value)}
      />
      <LifeUnitSection
        title="Family"
        importanceValue={x2}
        satisfactionValue={y2}
        onImportanceChange={(e) => setX2(e.target.value)}
        onSatisfactionChange={(e) => setY2(e.target.value)}
      />
      <LifeUnitSection
        title="Sports"
        importanceValue={x3}
        satisfactionValue={y3}
        onImportanceChange={(e) => setX3(e.target.value)}
        onSatisfactionChange={(e) => setY3(e.target.value)}
      />
      <button type="submit" className="btn btn-primary mt-3">Generate Plot</button>
    </form>
  );
};

export default PlotForm;