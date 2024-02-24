import React, { useState } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import CheckboxComponent from './components/CheckboxComponent';

const App: React.FC = () => {
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [countries, setCountries] = useState([
    { name: 'India', checked: false },
    { name: 'USA', checked: false },
    { name: 'France', checked: false },
  ]);

  const handleSelectAllChange = () => {
    const newSelectAllChecked = !selectAllChecked;
    setSelectAllChecked(newSelectAllChecked);
    const newCountries = countries.map(country => ({ ...country, checked: newSelectAllChecked }));
    setCountries(newCountries);
  };

  const handleCheckboxChange = (index: number) => {
    const newCountries = [...countries];
    newCountries[index].checked = !newCountries[index].checked;
    setCountries(newCountries);
    if (newCountries.every(country => country.checked)) {
      setSelectAllChecked(true);
    } else if (newCountries.some(country => !country.checked)) {
      setSelectAllChecked(false);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='mt-24 text-white font-extrabold text-6xl'>
          OWorkers Test
        </h1>
        <div className='flex flex-col items-start'>
          <h2 className='font-bold sm:mt-10 lg:mt-24'>Select Country</h2>
          <CheckboxComponent
            label="Select All"
            checked={selectAllChecked}
            onChange={handleSelectAllChange}
          />
          {countries.map((country, index) => (
            <CheckboxComponent
              key={index}
              label={country.name}
              checked={country.checked}
              onChange={() => handleCheckboxChange(index)}
            />
          ))}
        </div>
      </header>
      
    </div>
  );
}

export default App;
