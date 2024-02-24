import React from 'react';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const CheckboxComponent: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <div>
      <label className='space-x-2'>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};

export default CheckboxComponent;
