import React from "react";
import styled from "styled-components";

import Button from "../../../../components/button";
import Story from "./story";

import { IStory } from "../../interface";

import { AiOutlinePlus } from "react-icons/ai";

import { motion } from "framer-motion";

interface Props {
   stories: IStory[];
}

const StyledStories = styled(motion.div)`
   display: flex;
   align-items: center;
   gap: 1.8rem;
`;
const Stories: React.FC<Props> = (props) => {
   const { stories } = props;

   return (
      <StyledStories
         initial={{
            x: "-100%",
         }}
         animate={{
            x: 0,
         }}
         transition={{
            duration: 1,
         }}
      >
         {stories?.map((story, index) => (
            <Story
               key={index}
               image={story.image}
               border={story.border}
               status={story.status}
            />
         ))}
         <Button shape="circle" icon={<AiOutlinePlus />} />
      </StyledStories>
   );
};

export default Stories;
