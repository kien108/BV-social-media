import React from "react";
import styled from "styled-components";

import variables from "../../assets/scss/variables.module.scss";

import RegisterPage from "../auth/pages/register/RegisterPage";

import { useGetUserQuery, useGetUsersQuery, User } from "../user/services/userApiSlice";

import { Row, Col } from "antd";
import { useAppSelector } from "../../app/hooks";

import FormAddUser from "../user/components/FormAddUser";
import { Paragraph } from "../../components/typhography";

const StyledDashBoard = styled.div`
   color: white !important;
   font-size: 2rem;
   padding: 30px;

   .users-container {
      .title {
         color: ${variables.txtPrimary};
      }
      .users {
         .user {
            list-style: none;
            color: ${variables.txtThird};
            font-size: 1.5rem;
            font-weight: 500;
         }
      }
   }

   .form-login {
      background-image: unset !important;
      height: auto;

      .container {
         background: ${variables.bgGroup};
         border: 2px solid ${variables.purple};
      }
   }
`;
const DashboardPage = () => {
   const { isLoading, isError, data: users, error } = useGetUsersQuery();

   return (
      <StyledDashBoard>
         {isLoading ? (
            <p>"Loading..."</p>
         ) : isError ? (
            <p>{JSON.stringify(error)}</p>
         ) : (
            <>
               <Row>
                  <Col span={10}>
                     <section className="users-container">
                        <h1 className="title">Users List</h1>
                        <ul className="users">
                           {users &&
                              users.map((user: User, index: number) => (
                                 <li className="user" key={user._id}>
                                    {index + 1}. {user.username} - {user.email} - {user.role}
                                 </li>
                              ))}
                        </ul>
                     </section>
                     <Paragraph bg={variables.bgGroupContent} color={variables.txtPrimary}>
                        <strong>Rule:</strong> <br /> 1. Role admin c?? th??? truy c???p t???t c??? page{" "}
                        <br /> 2. Role user kh??ng ???????c v??o trang Dashboard
                     </Paragraph>
                  </Col>
                  <Col span={14}>
                     <FormAddUser />
                  </Col>
               </Row>
            </>
         )}
      </StyledDashBoard>
   );
};

export default DashboardPage;
