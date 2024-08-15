import React from 'react';

interface LifeUnitSectionProps {
  title: string;
  importanceValue: string;
  satisfactionValue: string;
  onImportanceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSatisfactionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LifeUnitSection: React.FC<LifeUnitSectionProps> = ({
  title,
  importanceValue,
  satisfactionValue,
  onImportanceChange,
  onSatisfactionChange,
}) => {
  return (
    <div className="form-group mb-3">
      <h4 className="mb-3">{title}</h4>
      <div className="row mb-2">
        <div className="col-md-4">
          <label className="form-label">
            How Important? (1 to 10):
            <input
              type="text"
              value={importanceValue}
              onChange={onImportanceChange}
              className="form-control"
            />
          </label>
        </div>
        <div className="col-md-4">
          <label className="form-label">
            How Satisfied? (1 to 10):
            <input
              type="text"
              value={satisfactionValue}
              onChange={onSatisfactionChange}
              className="form-control"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default LifeUnitSection;