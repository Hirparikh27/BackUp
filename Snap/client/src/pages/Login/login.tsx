import { useState } from "react";
// import { useHistory } from "react-router";
import { Aside } from "../../styles/global";
import { ErrorInput, Button } from "../Register/registerStyles";
import { Content, Main, Form } from "./loginStyles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

type erros = {
  email: string;
  password: string;
  auth: string | undefined;
};

export default function Login() {
  const navigate = useNavigate();
  const [erros, setErros] = useState({
    email: "",
    password: "",
    auth: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  // const history = useHistory();

  const loginValidation = Yup.object().shape({
    email: Yup.string()
      .email("Enter Valid Email")
      .required("Enter Valid Email."),
    password: Yup.string()
      .required("Password is Required.")
      .min(8, "Your Password Should be minimum 8 Character."),
  });
  // const history = useHistory();
  const formikLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidation,
    onSubmit(values) {
      alert(JSON.stringify(values));
      navigate("/dashboard");

      // setLogin(false);
    },
  });

  // const handleSubmit = async () => {
  //   const validateEmail = /\S+@\S+\.\S+/;
  //   let check = true;
  //   setErros({ email: "", password: "", auth: "" });

  return (
    <Content>
      <Aside>
        <img height="420" width="420" src="./OnlineChat.svg" alt="chat" />
      </Aside>
      <Main>
        <h1>Login</h1>
        <Form onSubmit={formikLogin.handleSubmit}>
          <label>{formikLogin.errors.email}</label>
          <input
            type="text"
            id="email"
            placeholder="Enter Valid Email"
            value={formikLogin.values.email}
            onChange={formikLogin.handleChange}
          />
          {erros.email && (
            <ErrorInput style={{ color: "#f00", margin: 0 }}>
              {erros.email}
            </ErrorInput>
          )}
          <label>{formikLogin.errors.password}</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter Your Password"
            value={formikLogin.values.password}
            onChange={formikLogin.handleChange}
          />
          {erros.password && (
            <ErrorInput style={{ color: "#f00", margin: 0 }}>
              {erros.password}
            </ErrorInput>
          )}
          {/* <ForgetPassword onClick={() => history.push("/recover")}>
            Esqueceu a senha?
          </ForgetPassword>
          <ReCAPTCHA
            sitekey="6LcLSJgcAAAAAPy5dNjbUcJ9icl_KAFj_gErN2p6"
            onChange={onReCAPTCHAChange}
          /> */}
          <Button id="login" type="submit">
            Login
          </Button>

          {erros.auth && (
            <ErrorInput style={{ color: "#f00" }}>{erros.auth}</ErrorInput>
          )}
          <a href="/">New User?</a>

          {/* <span>
            <Line />
            ou
            <Line />
            </span>
            <OtherLogin>
            <button
            type="button"
            onClick={() => {
              signInWithGoogle();
            }}
            >
            <img
            width="32"
            height="32"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt="entrar com o google"
            />
            </button>
          </OtherLogin> */}
          {/* <ChangeAuthOp onClick={() => history.push("/signup")}>
            Não possui uma conta? Crie uma!
          </ChangeAuthOp> */}
        </Form>
      </Main>
    </Content>
  );
}
