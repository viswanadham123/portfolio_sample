import React from "react";

import { Text } from "components";

const ProjectsAndFooterColumnlabel1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start">
          <Text className="text-base text-gray-900" size="txtNunitoSemiBold16">
            {props?.descriptiontext}
          </Text>
        </div>
        <div className="bg-white-A700 border border-indigo-50 border-solid h-40 rounded-lg w-full"></div>
      </div>
    </>
  );
};

ProjectsAndFooterColumnlabel1.defaultProps = { descriptiontext: "Description" };

export default ProjectsAndFooterColumnlabel1;
