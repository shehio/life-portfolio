import React from 'react';

interface LifeUnitSectionProps {
  title: string;
  importanceValue: string;
  satisfactionValue: string;
  onImportanceChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onSatisfactionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const LifeUnitSection: React.FC<LifeUnitSectionProps> = ({
  title,
  importanceValue,
  satisfactionValue,
  onImportanceChange,
  onSatisfactionChange,
}) => {
  // Create an array of numbers from 1 to 10 for the dropdown options
  const options = Array.from({ length: 10 }, (_, i) => (i + 1).toString());

  return (
    <div className="form-group mb-3">
      <h4 className="mb-3">{title}</h4>
      <div className="row mb-2">
        <div className="col-md-4">
          <label className="form-label">
            How Important? (1 to 10):
            <select
              value={importanceValue}
              onChange={onImportanceChange}
              className="form-control"
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="col-md-4">
          <label className="form-label">
            How Satisfied? (1 to 10):
            <select
              value={satisfactionValue}
              onChange={onSatisfactionChange}
              className="form-control"
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default LifeUnitSection;