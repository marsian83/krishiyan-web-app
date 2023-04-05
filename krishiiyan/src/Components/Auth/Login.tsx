import { useState } from "react";
import { loginFields } from "./FormFields";
import Input from "./Input";
import FormAction from "./FormAction";

const fields = loginFields;
let fieldsState: any = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

const Login = () => {
  const [loginState, setLoginState] = useState(fieldsState);
  console.log(loginState,"change________");
  const handleChange = (e: any) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(loginState,"submit_____________");
    authenticateUser();
  };
  //handle Signin API Integration here
  const authenticateUser = () => {
     console.log("authenticateUser_________");
     
  };

  return (
    <form className="mt-8 space-y-6">
      <div className="-space-y-px">
        {fields.map((field) => (
          <>
            <Input
              key={field.id}
              handleChange={handleChange}
              value={loginState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          </>
        ))}
      </div>
      <FormAction handleSubmit={handleSubmit} text="Login" type="Button" />
    </form>
  );
};

export default Login;
