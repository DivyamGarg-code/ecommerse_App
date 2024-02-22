import React from 'react';

const Dropdown = ({ options, onChange }) => {
  const handleChange = (e) => {
    const selectedOption = e.target.value;
    onChange(selectedOption);
  };

  return (
    <div>
        <span>Sort : </span>
    <select
      className="border rounded p-2 h-fit"
      onChange={handleChange}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    </div>
  );
};

export default Dropdown;
