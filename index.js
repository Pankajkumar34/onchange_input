
/**
 * Custom hook for handling input fields with validation.
 * @param {Object} initialState - Initial values for input fields.
 * @param {Object} validationRules - Validation rules for each input field.
 * @returns {Object} - An object containing values, errors, handleChange function, resetForm function,
 * setValues function, and setErrors function.
 */


import { useState } from "react";

const OnChangeInput = (initialState, validationRules = {}) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

    /**
   * Handles change in input fields.
   * @param {Event} e - The event object triggered by input change.
   */

    const handleChange = (e) => {
        const { name, value } = e.target;
      
        if (validationRules[name]) {
          const { pattern, maxLength, errorMessage } = validationRules[name];
          let validationError = "";
      
          // Check for pattern validation
          if (pattern && value.length > 0 && !pattern.test(value)) {
            validationError = errorMessage;
          }
      
          // Check for maxLength validation
          if (maxLength && value.length > maxLength) {
            validationError = `Exceeds maximum length of ${maxLength} characters`;
          }
      
          // Update errors state
          setErrors((prev) => ({ ...prev, [name]: validationError }));
        }
      
        // Update values state
        setValues((prev) => ({ ...prev, [name]: value }));
      };
      


/**
   * Resets the form to its initial state.
   */
  const resetForm = () => {
    setValues(initialState);
    setErrors({});
  };

  return {
    values,
    errors,
    handleChange,
    resetForm,
    setValues,
    setErrors,
  };
};

export default OnChangeInput;
