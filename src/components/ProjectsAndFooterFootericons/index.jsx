import React from "react";

import { Img, Text } from "components";

const ProjectsAndFooterFootericons = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-6 items-start justify-start w-auto">
          <Img
            className="h-12 w-12"
            src="images/img_phinstagramlogofill.svg"
            alt="phinstagramlogo"
          />
          <Img
            className="h-12 w-12"
            src="images/img_bilinkedin.svg"
            alt="bilinkedin"
          />
          <Img
            className="h-12 w-12"
            src="images/img_bienvelopefill.svg"
            alt="bienvelopefill"
          />
        </div>
        <Text
          className="text-base text-gray-600 w-auto"
          size="txtNunitoRegular16"
        >
          {props?.languageOne}
        </Text>
      </div>
    </>
  );
};

ProjectsAndFooterFootericons.defaultProps = {
  languageOne: "Copyright © 2024.  All rights reserved",
};

export default ProjectsAndFooterFootericons;
