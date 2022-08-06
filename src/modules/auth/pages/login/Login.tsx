import React, { ReactNode, useRef, useState } from "react";
import styled from "styled-components";

import variables from "../../../../assets/scss/variables.module.scss";

import { InputField } from "../../../../components/form/formik";
import Button from "../../../../components/button";

import { Typography } from "antd";
import { Formik, Form, FastField } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../services/authApiSlice";
import { useAppDispatch } from "../../../../app/hooks";
import { setCredentials } from "./authSlice";

const { Title } = Typography;

const Login = () => {
   const [errMessage, setErrMessage] = useState<string>("");

   const [login, { isLoading, data, error }] = useLoginMutation();
   const dispatch = useAppDispatch();
   const navigate = useNavigate();

   const initialValue = {
      user: "",
      pwd: "",
   };

   const validationSchema = Yup.object().shape({
      user: Yup.string().required("This field is required"),
      pwd: Yup.string().required("This field is required"),
   });

   const StyledForm = styled(Form)`
      &.form-login {
         margin: 0 auto;
         height: 100vh;
         background-image: linear-gradient(to right, #613785, #493694);
         display: flex;
         align-items: center;
         justify-content: center;

         .container {
            width: 400px;
            background: ${variables.bgGroupContent};
            padding: 30px 40px;
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 1.3rem;

            border-radius: 10px;

            .title {
               color: ${variables.purple};
               user-select: none;
            }

            .input-field {
               .input-label {
                  color: ${variables.txtThird};
                  font-size: 1.35rem;
                  font-weight: 500;
               }

               .input-content {
                  color: black;
                  padding: 10px 12px;
                  display: block;
                  border-radius: 5px;
                  font-size: 1.5rem;
               }
            }

            .ant-btn {
               border-radius: 5px;
               font-size: 2rem;
               font-weight: 600;
               margin-top: 2rem;

               background-color: ${variables.purple};
            }

            .notify {
               color: ${variables.txtSecondary};
               font-size: 1.3rem;
               font-weight: 500;
               margin-top: 1rem;
               a {
                  color: ${variables.purple};
                  font-weight: 700;
               }
            }

            .error {
               margin-top: 0;
            }
         }
      }
   `;

   const handelLogin = async (values: any) => {
      try {
         let userData = await login(values).unwrap();

         dispatch(
            setCredentials({
               ...userData,
               user: values.user,
            })
         );

         navigate("/");
      } catch (error: any) {
         if (!error?.originalStatus) {
            // isLoading: true until timeout occurs
            setErrMessage("No Server Response");
         } else if (error.originalStatus === 400) {
            setErrMessage("Missing Username or Password");
         } else if (error.originalStatus === 401) {
            setErrMessage("Unauthorized");
         } else {
            setErrMessage("Login Failed");
         }
      }
   };
   return (
      <Formik
         initialValues={initialValue}
         validationSchema={validationSchema}
         onSubmit={(values) => handelLogin(values)}
      >
         {(formikProps) => {
            /// do sth
            const { values, errors, touched } = formikProps;

            return (
               <StyledForm className="form-login">
                  <div className="container">
                     <Title className="title" level={2}>
                        Login
                     </Title>
                     <Title
                        className="error"
                        level={5}
                        style={{ display: error ? "block" : "none" }}
                     >
                        {errMessage}
                     </Title>
                     <FastField
                        name="user"
                        component={InputField}
                        layout="vertical"
                        label="Username"
                        placeholder="Enter your username"
                     />
                     <FastField
                        name="pwd"
                        component={InputField}
                        layout="vertical"
                        label="Password"
                        placeholder="Enter your password"
                        type="password"
                     />
                     <Button htmlType="submit" size="large" full={true}>
                        Login
                     </Button>
                     <Title level={5} className="notify">
                        Don't have account?{" "}
                        <span>
                           <Link to="/register">Register</Link>
                        </span>{" "}
                        here
                     </Title>
                  </div>
               </StyledForm>
            );
         }}
      </Formik>
   );
};

export default Login;
