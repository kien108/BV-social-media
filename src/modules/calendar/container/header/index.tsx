import React from "react";

import per1 from "../../../../assets/images/per1.png";
import per2 from "../../../../assets/images/per2.png";
import per3 from "../../../../assets/images/per3.png";
import per4 from "../../../../assets/images/per4.png";
import per5 from "../../../../assets/images/per5.png";

import Stories from "../../components/story/stories";

import { IStory, EStoryStatus } from "../../interface";

const stories: IStory[] = [
   {
      image: per1,
      border: true,
      status: EStoryStatus.free,
   },
   {
      image: per2,
      status: EStoryStatus.free,
   },
   {
      image: per3,
      status: EStoryStatus.video,
   },
   {
      image: per4,
      status: EStoryStatus.video,
   },
   {
      image: per5,
      status: EStoryStatus.music,
   },
];

const CalendarHeader = (props: any) => {
   return (
      <div>
         <Stories stories={stories} />
      </div>
   );
};

export default CalendarHeader;
