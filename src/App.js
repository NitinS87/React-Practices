import FormInput from "./components/FormInput";
import "./app.css";
import { useRef, useState } from "react";

function App() {
  // const [username, setUsername] = useState("");
  // const usernameRef = useRef("");
  // console.log(username);
  // console.log(usernameRef);

  console.log("re-rendered");
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: "username",
      placeholder: "Username",
      type: "text",
      name: "username",
      label: "Username",
      required: true,
      pattern: "^[a-zA-Z0-9_]{3,16}$",
      error:
        "Username should be 3-16 characters and shouldn't include any special characters",
    },
    {
      id: "email",
      placeholder: "Email",
      type: "email",
      name: "email",
      label: "Email",
      required: true,
      error: "It should be a valid email address",
    },
    {
      id: "birthday",
      placeholder: "Birthday",
      type: "date",
      name: "birthday",
      label: "Birthday",
      error: "Birthday is required",
    },
    {
      id: "password",
      placeholder: "Password",
      type: "password",
      name: "password",
      label: "Password",
      required: true,
      pattern: "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      error:
        "Password should be 8-20 characters and shouldn't include at least one letter, one number and one special character",
    },
    {
      id: "confirmPassword",
      placeholder: "Confirm Password",
      type: "password",
      name: "confirmPassword",
      label: "Confirm Password",
      required: true,
      pattern: values.password,
      error: "Confirm Password don't match with Password",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(usernameRef);
    // console.log(usernameRef.current.value);

    // const data = new FormData(e.target);
    // console.log(data);
    // console.log(Object.fromEntries(data.entries()));
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        {/* <FormInput
          // inputRef={usernameRef}
          name="username"
          placeholder="Username"
          // setUsername={setUsername}
        />
        <FormInput placeholder="Email" name="email" />
        <FormInput placeholder="Full Name" name="fullname" />
        <FormInput placeholder="Anything Else" name="else" /> */}

        <h1>Sign Up</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            // id={input.id}
            // placeholder={input.placeholder}
            // type={input.type}
            // name={input.name}
            // label={input.label}
            // values={values}
            // setValues={setValues}
            {...input}
            value={values[input.name]}
            onChange={handleChange}
            errorMessage={values[input.error]}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
