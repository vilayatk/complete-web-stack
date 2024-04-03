import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormControl, MenuItem, Select } from '@mui/material';

const MaterialDropdown = ({ options, parentHandleChange }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    parentHandleChange(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <Select
        value={selectedOption}
        onChange={handleChange}
        displayEmpty
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option}>{option}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

MaterialDropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  parentHandleChange: PropTypes.any.isRequired
};

export default MaterialDropdown;
