import React, { useEffect } from "react";
import styled from "styled-components";

import post1 from "../../../../assets/images/post1.png";
import post2 from "../../../../assets/images/post2.png";
import post3 from "../../../../assets/images/post3.png";

import variables from "../../../../assets/scss/variables.module.scss";

import { IPost } from "../../interface";

import PostItem from "../../components/postitem";

import { RiDeleteBin7Line } from "react-icons/ri";
import {
   AiOutlineEdit,
   AiOutlinePlusCircle,
   AiOutlineClose,
} from "react-icons/ai";

import { motion } from "framer-motion";

const $$ = document.querySelectorAll.bind(document);
interface Props {
   id: string | undefined;
   onClose: () => void;
}

const StyledPost = styled.div`
   display: flex;
   flex-direction: column;
   gap: 20px;
   position: relative;

   .btn-close {
      position: absolute;
      right: -10px;
      top: -10px;
      color: ${variables.txtPrimary};
      transition: color 0.1s ease-in-out;
      cursor: pointer;

      &:hover {
         color: ${variables.primary};
      }
   }

   .post-title {
      color: ${variables.txtPrimary};
      text-align: center;
      font-size: 1.8rem;
      font-weight: 600;
      user-select: none;
      margin-top: 1rem;
   }
`;

const Post: React.FC<Props> = (props) => {
   const { onClose, id } = props;

   useEffect(() => {
      //call api getPostById
   }, [id]);

   const handelClosePost = () => {
      const cells = $$(".cell");
      cells.forEach((item) => {
         item.classList.remove("cell-active");
      });

      onClose();
   };

   return (
      <StyledPost>
         <AiOutlineClose
            className="btn-close"
            size={"25px"}
            onClick={handelClosePost}
         />
         <motion.h2
            className="post-title"
            initial={{
               x: "-100%",
            }}
            animate={{
               x: 0,
            }}
            transition={{
               duration: 0.8,
            }}
         >
            Post Settings
         </motion.h2>
         <PostItem
            title="Image"
            icon={<RiDeleteBin7Line />}
            images={[post1, post2, post3]}
         />
         <PostItem
            title="Description"
            icon={<AiOutlineEdit />}
            description="Dancing is my thing and I've been involved with dance ever since I was young. When I dance, I feel free, I'm into it and I have good feelings whenever I'm into it and I have good feelings whenever I'm doing it. Also, I love"
         />
         <PostItem
            title="Date of Posting"
            icon={<AiOutlinePlusCircle />}
            date={[
               new Date("September 23, 2022 23:00:00"),
               new Date("September 23, 2022 23:30:00"),
            ]}
         />
         <PostItem
            title="Tags"
            tags={["Party", "Dancing", "Mood", "Girl", "Boy", "Thoughts"]}
         />
      </StyledPost>
   );
};

export default Post;
