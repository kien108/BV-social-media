import React, { useState } from "react";
import styled from "styled-components";

import variables from "../../../../assets/scss/variables.module.scss";

import { InputField } from "../../../../components/form/formik";
import Button from "../../../../components/button";
import { Title } from "../../../../components/typhography";

import { Formik, Form, FastField } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { RegisterParams, useRegisterMutation } from "../../services/registerApiSlice";
import SelectField from "../../../../components/form/formik/selectField";

import { OptionType } from "../../../../components/form/select/types";

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
            margin-bottom: 0px;
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

         .error-msg {
            color: red;
            font-weight: 300;
         }

         .success-msg {
            color: green;
            font-weight: 300;
            margin-top: 0;
         }
      }
   }
`;

const RegisterPage = () => {
   const [register, { data, error, isLoading }] = useRegisterMutation();
   const [errorMsg, setErrorMsg] = useState<string>("");
   const [successMsg, setSuccessMsg] = useState<string>("");

   const initialValue = {
      user: "",
      pwd: "",
      confirmPwd: "",
      email: "",
   };

   const validationSchema = Yup.object().shape({
      user: Yup.string()
         .required("This field must be required")
         .min(6, "Username must contain at least 6 characters"),
      pwd: Yup.string()
         .required("This field must be required")
         .min(8, "Password must contain at least 8 characters")
         .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
            "One uppercase, one lowercase, one number and one special case character"
         ),
      confirmPwd: Yup.string()
         .required("This field must be required")
         .oneOf([Yup.ref("pwd")], "Password must be match"),
      email: Yup.string()
         .required("This field must be required")
         .email("This field must be type email"),
   });

   const onSubmit = async (values: RegisterParams, { resetForm }: { resetForm: any }) => {
      try {
         await register(values).unwrap();
         resetForm({});
         setSuccessMsg("Register successful !!!");
         setErrorMsg("");
      } catch (error: any) {
         setErrorMsg(error?.data?.message);
      }
   };

   return (
      <Formik initialValues={initialValue} validationSchema={validationSchema} onSubmit={onSubmit}>
         {(formikProps) => {
            const { values, errors, touched } = formikProps;

            return (
               <StyledForm className="form-login">
                  <div className="container">
                     <Title className="title" level={1}>
                        Register
                     </Title>
                     {errorMsg && (
                        <Title level={5} className="error-msg">
                           {errorMsg}
                        </Title>
                     )}
                     {successMsg && (
                        <Title level={5} className="success-msg">
                           {successMsg}
                        </Title>
                     )}
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
                     <FastField
                        name="confirmPwd"
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
                     loading={isLoading}
                     <Button htmlType="submit" size="large" full="true" disabled={isLoading}>
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

export default RegisterPage;
