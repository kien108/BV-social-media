import React from "react";
import styled from "styled-components";

import variables from "../../../../assets/scss/variables.module.scss";

import { InputField } from "../../../../components/form/formik";
import Button from "../../../../components/button";

import { Typography } from "antd";
import { Formik, Form, FastField } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const { Title } = Typography;
const Register = () => {
   const initialValue = {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
   };

   const validationSchema = Yup.object().shape({
      username: Yup.string()
         .required("This field must be required")
         .min(6, "Username must contain at least 6 characters"),
      password: Yup.string()
         .required("This field must be required")
         .min(8, "Password must contain at least 8 characters")
         .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
            "One uppercase, one lowercase, one number and one special case character"
         ),
      confirmPassword: Yup.string()
         .required("This field must be required")
         .oneOf([Yup.ref("password")], "Password must be match"),
      email: Yup.string()
         .required("This field must be required")
         .email("This field must be type email"),
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
         }
      }
   `;
   return (
      <Formik
         initialValues={initialValue}
         validationSchema={validationSchema}
         onSubmit={(values) => console.log(values)}
      >
         {(formikProps) => {
            /// do sth
            const { values, errors, touched } = formikProps;

            return (
               <StyledForm className="form-login">
                  <div className="container">
                     <Title className="title" level={2}>
                        Register
                     </Title>
                     <FastField
                        name="username"
                        component={InputField}
                        layout="vertical"
                        label="Username"
                        placeholder="Enter your username"
                     />
                     <FastField
                        name="password"
                        component={InputField}
                        layout="vertical"
                        label="Password"
                        placeholder="Enter your password"
                        type="password"
                     />
                     <FastField
                        name="confirmPassword"
                        component={InputField}
                        layout="vertical"
                        label="Confirm Password"
                        placeholder="Confirm your password"
                        type="password"
                     />
                     <FastField
                        name="email"
                        component={InputField}
                        layout="vertical"
                        label="Email"
                        placeholder="Enter your email"
                        type="email"
                     />
                     <Button htmlType="submit" size="large" full={true}>
                        Register
                     </Button>
                     <Title level={5} className="notify">
                        You already have account.
                        <span>
                           <Link to="/login"> Login</Link>
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

export default Register;
