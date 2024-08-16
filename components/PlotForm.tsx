import React, { useState } from 'react';
import LifeUnitSection from './LifeUnitSection';

interface PlotFormProps {
  onSubmit: (xValues: number[], yValues: number[], hoursValues: number[], labels: string[]) => void;
}

const PlotForm: React.FC<PlotFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    x: ['', '', '', '', '', ''],
    y: ['', '', '', '', '', ''],
    hours: ['', '', '', '', '', '']
  });

  const labels = ['Partner', 'Faith', 'Family', 'Sports', 'Career', 'Hobbies'];

  const handleChange = (type: 'x' | 'y' | 'hours', index: number, value: string) => {
    setFormData((prevData) => {
      const updatedValues = [...prevData[type]];
      updatedValues[index] = value;
      return { ...prevData, [type]: updatedValues };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const xValues = formData.x.map((val) => parseFloat(val));
    const yValues = formData.y.map((val) => parseFloat(val));
    const hoursValues = formData.hours.map((val) => parseInt(val, 10));
    onSubmit(xValues, yValues, hoursValues, labels);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h3 className="mb-4">Strategic Life Units</h3>
      {labels.map((label, index) => (
        <LifeUnitSection
          key={label}
          title={label}
          importanceValue={formData.x[index]}
          satisfactionValue={formData.y[index]}
          hoursPerWeek={formData.hours[index]}
          onImportanceChange={(e) => handleChange('x', index, e.target.value)}
          onSatisfactionChange={(e) => handleChange('y', index, e.target.value)}
          onHoursChange={(e) => handleChange('hours', index, e.target.value)}
        />
      ))}
      <button type="submit" className="btn btn-primary mt-3">Generate Plot</button>
    </form>
  );
};

export default PlotForm;