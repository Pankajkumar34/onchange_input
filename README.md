
# OnChangeInput Hook

`onchangeinput` is a custom React hook designed to handle form input changes and validation efficiently. It provides a simple interface to manage form state, validate inputs, and display error messages.

## Installation

To install `onchangeinput`, use npm:

```bash
  npm install onchangeinput
  
```



## Examples 


```bash
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
  ```
  ```bash
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
  ```
```bash
import React from "react"
import OnChangeInput from 'onchangeinput';

function App() {
  // Initialize the custom hook to manage form state and validation //

  const { values, errors, handleChange, resetForm, setErrors } = OnChangeInput(
    {
      fname: "",
      email: "",
    },
    validationRules
  );

  // Function to handle form submission
  const submitData = (e) => {
    e.preventDefault();
    const emptyFields = getEmptyFields(values);
    if (emptyFields.length > 0) {
      // If there are empty fields, set errors for each empty field
      emptyFields.forEach(field => {
        setErrors((prev) => ({ ...prev, [field]: `${field} is required` }));
      });
    } else {
      console.log("All values filled:", values);
      // Add further logic for data submission or API calls here
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        name="fname"
        value={values.fname}
        onChange={handleChange}
        placeholder="Enter your first name"
      />
     
      {errors.fname && <span className="error">{errors.fname}</span>}

      <input
        type="text"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Enter your email address"
      />
      
      {errors.email && <span className="error">{errors.email}</span>}
      <button onClick={submitData}>Submit</button>
    </div>
  );
}
export default App;
 ```



## Installation

Install onchangeinput use npm

```bash
  npm install onchangeinput
  
```

## Authors

- [@Pankajkumar34](https://github.com/Pankajkumar34/onchange_input)


## 🚀 About Me
I'm a Mern stack developer...

## Other Common Github Profile Sections
👩‍💻 I'm currently working on...

👯‍♀️ I'm looking to collaborate on...

💬 Ask me about...

