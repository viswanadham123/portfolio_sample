import React from "react";

import { Text } from "components";

const ProjectsAndFooterHeader = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="sm:ml-[0] ml-[106px] text-gray-900 text-lg"
          size="txtComfortaaBold18"
        >
          {props?.username}
        </Text>
        <div className="flex flex-row gap-12 items-start justify-start mr-[106px] w-auto">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-gray-900 text-lg w-auto"
              size="txtRalewayMedium18"
            >
              {props?.abouttext}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-gray-900 text-lg w-auto"
              size="txtRalewayMedium18"
            >
              {props?.projectstext}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-gray-900 text-lg w-auto"
              size="txtRalewayMedium18"
            >
              {props?.contactstext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

ProjectsAndFooterHeader.defaultProps = {
  username: "Madelyn Torff",
  abouttext: "About",
  projectstext: "Projects",
  contactstext: "Contacts",
};

export default ProjectsAndFooterHeader;
