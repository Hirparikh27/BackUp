import { useState } from "react";
import { Aside } from "../../styles/global";
import { Button, ErrorInput } from "./registerStyles";
import { Content, Main, Form } from "./registerStyles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { http } from "../../config/http";

type erros = {
  username: string;
  email: string;
  password: string;
  confirmpassword: string;
  auth: string | undefined;
};

export default function Register() {
  const navigate = useNavigate();
  const [erros] = useState<erros>({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    auth: "",
  });

  const [showPassword] = useState(false);

  const registerValidation = Yup.object().shape({
    username: Yup.string().required(" User Name is required."),
    email: Yup.string()
      .email("Enter a valid email.")
      .required("Email is Required."),
    password: Yup.string()
      .required("Password is required.")
      .min(8, "Your Password Should be minimum 8 Character."),
    confirmpassword: Yup.string()
      .required("Enter Password Again.")
      .when("password", {
        is: (val: string | any[]) => (val && val.length > 7 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Both Password Should be Same."
        ),
      }),
  });

  const formikRegister: any = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    },

    validationSchema: registerValidation,
    async onSubmit(values: any) {
      alert(JSON.stringify(values, null, 2));
      const res = await http.post("user/register", values);
      console.log(res);
      navigate("/login");
    },
  });

  return (
    <Content>
      <Aside>
        <img height="420" width="420" src="./OnlineChat.svg" alt="chat" />
      </Aside>
      <Main>
        <h1>Register</h1>
        <Form onSubmit={formikRegister.handleSubmit}>
          <label>{formikRegister.errors.username}</label>
          <input
            type="text"
            placeholder="Enter Your Username"
            id="username"
            value={formikRegister.values.username}
            onChange={formikRegister.handleChange}
          />
          {erros.username && (
            <ErrorInput style={{ color: "#f00", margin: 0 }}>
              {erros.username}
            </ErrorInput>
          )}
          <label>{formikRegister.errors.email}</label>
          <input
            type="text"
            id="email"
            placeholder="Enter Your Email"
            value={formikRegister.values.email}
            onChange={formikRegister.handleChange}
          />
          {erros.email && (
            <ErrorInput style={{ color: "#f00", margin: 0 }}>
              {erros.email}
            </ErrorInput>
          )}
          <label>{formikRegister.errors.password}</label>

          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter Your Password"
            value={formikRegister.values.password}
            onChange={formikRegister.handleChange}
          />
          {erros.password && (
            <ErrorInput style={{ color: "#f00", margin: 0 }}>
              {erros.password}
            </ErrorInput>
          )}
          <label>{formikRegister.errors.confirmpassword}</label>
          <input
            type={showPassword ? "text" : "password"}
            id="confirmpassword"
            placeholder="Enter Password Again"
            value={formikRegister.values.confirmpassword}
            onChange={formikRegister.handleChange}
          />
          {erros.confirmpassword && (
            <ErrorInput style={{ color: "#f00", margin: 0 }}>
              {erros.confirmpassword}
            </ErrorInput>
          )}

          <Button id="register" type="submit">
            Register
          </Button>
          <a href="/login">Already a User?</a>
        </Form>
      </Main>
    </Content>
  );
}

// function setLogin(arg0: boolean) {
//   throw new Error("Function not implemented.");
// }
