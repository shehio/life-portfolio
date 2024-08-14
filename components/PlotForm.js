// components/PlotForm.js
import { useState } from 'react';

export default function PlotForm({ onSubmit }) {
  const [xValues, setXValues] = useState('');
  const [yValues, setYValues] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const xArray = xValues.split(',').map(Number);
    const yArray = yValues.split(',').map(Number);
    onSubmit(xArray, yArray);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        X Values (comma-separated):
        <input
          type="text"
          value={xValues}
          onChange={(e) => setXValues(e.target.value)}
        />
      </label>
      <br />
      <label>
        Y Values (comma-separated):
        <input
          type="text"
          value={yValues}
          onChange={(e) => setYValues(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Generate Plot</button>
    </form>
  );
}