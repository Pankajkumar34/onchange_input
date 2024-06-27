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
    errorMessage: {
      patternMsg:"Invalid email format"
    }
  },
  fname: {
    pattern: /^[a-zA-Z]+$/,
    errorMessage: {
      patternMsg:"Only letters are allowed"
    },

  },
  lname: {
    pattern: /^[a-zA-Z]+$/,
    errorMessage: {
      patternMsg:"Only letters are allowed"
    },

  },
  phoneNumber:{
    pattern:/^[0-9]/,
    errorMessage: {
      patternMsg:"Only numbers are allowed"
    },
  },
  password: {
    pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    minLength: 4,
    maxLength: 10,
    errorMessage: {
      minLengthMsg: "Password must be at least 4 characters long",
      maxLengthMsg: "Password must not exceed 10 characters"
    }
  },
  confirmPassword: {
    errorMessage: {
      mismatch: "Passwords do not match"
    }
  },
};
```

```bash
  // Function to get empty fields from the form

const getEmptyFields = (values) => {
const emptyFields = [];
const keyValues = ["fname", "email","lname","password","phoneNumber","confirmPassword"];
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
      lname:"",
      phoneNumber:"",
      password:"",
      confirmPassword:""
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
        <input
        type="text"
        name="lname"
        value={values.lname}
        onChange={handleChange}
        placeholder="Enter your lname address"
      />
      {errors.lname && <span className="error">{errors.lname}</span>}
        <input
        type="text"
        name="phoneNumber"
        value={values.phoneNumber}
        onChange={handleChange}
        placeholder="Enter your number address"
      />
      {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
        <input
        type="text"
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="Enter your password address"
      />
         <input
        type="text"
        name="confirmPassword"
        value={values.confirmPassword}
        onChange={handleChange}
        placeholder="Enter your confirmPassword address"
      />

{errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
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
