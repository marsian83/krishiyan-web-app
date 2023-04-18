import { useState } from "react";
import { signupFields } from "../Auth/FormFields";
import FormAction from "./FormAction";
import Input from "./Input";

const fields = signupFields;
let fieldsState: any = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

const Register = () => {
  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e: any) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };

  //handle Signup API Integration here
  const createAccount = () => {
    console.log("createAccount fn");
    
  };
  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        <FormAction handleSubmit={handleSubmit} text="Signup" type="Button" />
      </div>
    </form>
  );
};

export default Register;
