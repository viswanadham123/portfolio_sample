import React from "react";

import { Button, Text } from "components";

const ProjectsAndFooterProjectnfo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-6 items-start justify-start my-[106px] w-[406px] sm:w-full">
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900 w-full"
            size="txtPlayfairDisplayBold40"
          >
            {props?.projectname}
          </Text>
          <Text
            className="leading-[150.00%] max-w-[406px] md:max-w-full text-gray-600 text-lg"
            size="txtNunitoRegular18"
          >
            {props?.projectdescription}
          </Text>
          <Button
            className="cursor-pointer font-medium font-roboto min-w-[150px] outline-[1px] rounded-[21px] text-center text-lg"
            color="gray_900"
            size="xs"
            variant="outline"
          >
            {props?.viewprojectbutton}
          </Button>
        </div>
      </div>
    </>
  );
};

ProjectsAndFooterProjectnfo.defaultProps = {
  projectname: "Project Name",
  projectdescription:
    "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
  viewprojectbutton: "View Project",
};

export default ProjectsAndFooterProjectnfo;
