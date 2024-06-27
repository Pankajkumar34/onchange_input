# On chnage input hook
onchangeinput is a custom React hook designed to handle form input changes and validation efficiently. It provides a simple interface to manage form state, validate inputs, and display error messages.



## Examples 

```js
import logo from "./logo.svg";
import "./App.css";
import OnChangeInput from 'onchangeinput'; // Assuming this is the correct import path for your custom hook

function App() {
  // Define validation rules for each input field
  const validationRules = {
    email: {
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      errorMessage: "Invalid email format",
    },
    fname: {
      pattern: /^[a-zA-Z]+$/,
      maxLength: 30,
      errorMessage: "Only letters are allowed",
    },
  };

  // Initialize the custom hook to manage form state and validation
  const { values, errors, handleChange, resetForm, setErrors } = OnChangeInput(
    {
      fname: "",
      email: "",
    },
    validationRules
  );

  // Function to get empty fields from the form
  const getEmptyFields = (values) => {
    const emptyFields = [];
    const keyValues = ["fname", "email"];
    for (const field of keyValues) {
      if (!values[field]) {
        emptyFields.push(field);
      }
    }
    return emptyFields;
  };

  // Function to handle form submission
  const submitData = (e) => {
    e.preventDefault();
    console.log(values); // Log the values on form submission
    const emptyFields = getEmptyFields(values); // Check for empty fields
    if (emptyFields.length > 0) {
      // If there are empty fields, set errors for each empty field
      emptyFields.forEach(field => {
        setErrors((prev) => ({ ...prev, [field]: `${field} is required` }));
      });
    } else {
      // If there are no empty fields, proceed with data submission
      console.log("All values filled:", values);
      // Add further logic for data submission or API calls here
    }
  };

  // Render the component
  return (
    <div className="App">
      {/* Input field for first name */}
      <input
        type="text"
        name="fname"
        value={values.fname}
        onChange={handleChange}
        placeholder="Enter your first name"
      />
      {/* Display error message if validation fails */}
      {errors.fname && <span className="error">{errors.fname}</span>}

      {/* Input field for email */}
      <input
        type="text"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Enter your email address"
      />
      {/* Display error message if validation fails */}
      {errors.email && <span className="error">{errors.email}</span>}

      {/* Submit button */}
      <button onClick={submitData}>Submit</button>
    </div>
  );
}

export default App;

***************************************************************************************************

 // Validation rules for each input field
  const validationRules = {
    email: {
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Regex pattern for email validation
      errorMessage: "Invalid email format", // Error message when email format is invalid
    },
    fname: {
      pattern: /^[a-zA-Z]+$/, // Regex pattern for first name validation (only letters)
      maxLength: 30, // Maximum length allowed for first name
      errorMessage: "Only letters are allowed", // Error message when non-letter characters are entered
    },
  };


    // Initialize the custom hook to manage form state and validation
  const { values, errors, handleChange, resetForm, setErrors } = OnChangeInput(
    {
      fname: "",
      email: "",
    },
    validationRules
  );

  // Function to get empty fields from the form
  const getEmptyFields = (values) => {
    const emptyFields = [];
    const keyValues = ["fname", "email"];
    for (const field of keyValues) {
      if (!values[field]) {
        emptyFields.push(field);
      }
    }
    return emptyFields;
  };

   // Function to handle form submission
  const submitData = (e) => {
    e.preventDefault();
    console.log(values); // Log the form values
    const emptyFields = getEmptyFields(values); // Check for empty fields
    if (emptyFields.length > 0) {
      // If there are empty fields, set errors for each empty field
      emptyFields.forEach(field => {
        setErrors((prev) => ({ ...prev, [field]: `${field} is required` }));
      });
    } else {
      // If there are no empty fields, proceed with data submission
      console.log("All values filled:", values);
      // Add further logic for data submission or API calls here
    }
  };

```