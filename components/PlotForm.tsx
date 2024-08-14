// components/PlotForm.tsx
import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit} className="p-3">
      <h3>Strategic Life Units</h3>
      <div className="form-group">
        <h4>Faith</h4>
        <label className="mr-2">
          X1:
          <input
            type="text"
            value={x1}
            onChange={(e) => setX1(e.target.value)}
            className="form-control d-inline-block w-auto ml-2"
          />
        </label>
        <label className="mr-2">
          Y1:
          <input
            type="text"
            value={y1}
            onChange={(e) => setY1(e.target.value)}
            className="form-control d-inline-block w-auto ml-2"
          />
        </label>
      </div>
      <div className="form-group">
        <h4>Family</h4>
        <label className="mr-2">
          X2:
          <input
            type="text"
            value={x2}
            onChange={(e) => setX2(e.target.value)}
            className="form-control d-inline-block w-auto ml-2"
          />
        </label>
        <label className="mr-2">
          Y2:
          <input
            type="text"
            value={y2}
            onChange={(e) => setY2(e.target.value)}
            className="form-control d-inline-block w-auto ml-2"
          />
        </label>
      </div>
      <div className="form-group">
        <h4>Sports</h4>
        <label className="mr-2">
          X3:
          <input
            type="text"
            value={x3}
            onChange={(e) => setX3(e.target.value)}
            className="form-control d-inline-block w-auto ml-2"
          />
        </label>
        <label className="mr-2">
          Y3:
          <input
            type="text"
            value={y3}
            onChange={(e) => setY3(e.target.value)}
            className="form-control d-inline-block w-auto ml-2"
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">Generate Plot</button>
    </form>
  );
};

export default PlotForm;