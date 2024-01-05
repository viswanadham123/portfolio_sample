import { useState } from "react";

import { Button, Img, Line, List, Text } from "components";
import ProjectsAndFooterFootericons from "components/ProjectsAndFooterFootericons";
import ProjectsAndFooterProjectnfo from "components/ProjectsAndFooterProjectnfo";

const ProjectsandfooterPage = () => {


  const [projectTitle, setProjectTitle] = useState('');
  const [projectLink, setProjectLink] = useState('');
  const [description, setDescription] = useState('');

  const handleAddButtonClick = () => {
    // You can access projectTitle, projectLink, and description here and perform further actions like storing in a database or updating a parent component's state.
    console.log('Project Title:', projectTitle);
    console.log('Project Link:', projectLink);
    console.log('Description:', description);

    // Add your logic to store or process the data here
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-comfortaa items-center justify-start mx-auto w-full">
        <div id ="aboutSection" className="h-[629px] md:px-5 relative w-full">
          <div
            className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-1/2"
            style={{ backgroundImage: "url('images/img_image.png')" }}
          >
          </div>
          
          <div className="absolute flex sm:flex-col flex-row md:gap-10 inset-x-[0] items-center justify-between mx-auto p-3.5 top-[0] w-full">
        <Text
          className="sm:ml-[0] ml-[106px] text-gray-900 text-lg"
          size="txtComfortaaBold18"
        >
          viswanadham
        </Text>
        <div className="flex flex-row gap-12 items-start justify-start mr-[106px] w-auto">
          <div  onClick={() => scrollToSection("aboutSection")} className="cursor-pointer flex flex-col items-start justify-start w-auto">
            <Text
              className="text-gray-900 text-lg w-auto"
              size="txtRalewayMedium18"
            >
              About
            </Text>
          </div>
          <div onClick={() => scrollToSection("ProjectsSection")} className="cursor-pointer flex flex-col items-start justify-start w-auto">
            <Text
              className="text-gray-900 text-lg w-auto"
              size="txtRalewayMedium18"
            >
            Projects
            </Text>
          </div>
          <div onClick={() => scrollToSection("ContactSection")} className="cursor-pointer flex flex-col items-start justify-start w-auto">
            <Text
              className="text-gray-900 text-lg w-auto"
              size="txtRalewayMedium18"
            >
             Contact
            </Text>
          </div>
        </div>
      </div>
          
          
          {/* <ProjectsAndFooterHeader className="absolute flex sm:flex-col flex-row md:gap-10 inset-x-[0] items-center justify-between mx-auto p-3.5 top-[0] w-full" /> */}
          <div className="absolute flex flex-col font-nunito gap-3 h-max inset-y-[0] items-start justify-start left-[8%] my-auto w-[486px] sm:w-full">
            <Text
              className="text-xl text-yellow-700 uppercase w-full"
              size="txtNunitoBold20"
            >
              UI/UX Designer
            </Text>
            <div className="flex flex-col font-playfairdisplay gap-8 items-start justify-start w-auto sm:w-full">
              <Text
                className="leading-[120.00%] max-w-[486px] md:max-w-full md:text-5xl text-[64px] text-blue_gray-900"
                size="txtPlayfairDisplayBold64"
              >
                Hello, my name is viswanadham
              </Text>
              <div className="flex flex-col font-nunito items-start justify-start w-auto sm:w-full">
                <Text
                  className="leading-[36.00px] max-w-[486px] md:max-w-full text-2xl md:text-[22px] text-gray-600 sm:text-xl"
                  size="txtNunitoRegular24"
                >
                  Short text with details about you, what you do or your
                  professional career. You can add more information on the about
                  page.
                </Text>
              </div>
              <div className="flex flex-row font-roboto gap-3 items-start justify-start w-auto">
                <Button
                  className="cursor-pointer font-medium min-w-[115px] text-center text-lg"
                  shape="round"
                  color="yellow_700"
                  size="xs"
                  variant="fill"
                >
                  Projects
                </Button>
                <Button
                  className="cursor-pointer font-medium min-w-[117px] text-center text-lg"
                  shape="round"
                  color="gray_900"
                  size="xs"
                  variant="outline"
                >
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div  id ="addProjectSection" className="flex flex-col font-playfairdisplay md:gap-10 gap-[85px] items-start mt-36 md:px-10 sm:px-5 px-[426px] w-full">
          <div className="flex flex-col gap-1 items-center justify-center ml-6 md:ml-[0] w-auto">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-center text-gray-900 w-auto"
              size="txtPlayfairDisplayBold48"
            >
              Add Project
            </Text>
            <Line className="bg-yellow-700 h-1 rounded-sm w-[39%]" />
          </div>
          <div className="flex flex-col items-center justify-center w-4/5 sm:w-full">
      <div className="flex flex-col gap-6 items-end justify-center w-full">
        <List className="flex flex-col font-nunito gap-6 items-start w-full" orientation="vertical">
          <label htmlFor="projectTitle">Project title</label>
          <input
            id="projectTitle"
            onChange={(e) => setProjectTitle(e.target.value)}
            className="flex flex-1 flex-col gap-2 items-start justify-start w-full pb-[30px]  pt-2 border border-indigo-50 pl-5 border-solid rounded-[15px]"
            placeholder="Project title"
            value={projectTitle}
          />
          <label htmlFor="projectLink">Project link</label>
          <input
            id="projectLink"
            onChange={(e) => setProjectLink(e.target.value)}
            className="flex flex-1 flex-col gap-2 items-start justify-start pb-[30px] pt-2 w-full border border-indigo-50 border-solid pl-5 rounded-[10px]"
            placeholder="Project link"
            value={projectLink}
          />

          <label htmlFor="description">Description</label>
          <input
            id="description"
            onChange={(e) => setDescription(e.target.value)}
            style={{ height: '400px', paddingBottom: '60px' }}
            className="flex flex-1 flex-col gap-2 items-start justify-start h-[500px] w-full border border-indigo-50 border-solid pl-5 rounded-[10px]"
            value={description}
          />
        </List>
        <Button
          className="cursor-pointer font-medium font-roboto min-w-[81px] text-center text-lg"
          shape="round"
          color="yellow_700"
          size="xs"
          variant="fill"
          onClick={handleAddButtonClick}
        >
          Add
        </Button>
      </div>
    </div>
        </div>
        <div  id ="ProjectsSection" className="flex flex-col font-playfairdisplay md:gap-10 gap-20 items-center justify-center max-w-[992px] mt-[251px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-1 items-center justify-center w-auto">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-center text-gray-900 w-auto"
              size="txtPlayfairDisplayBold48"
            >
              Projects
            </Text>
            <Line className="bg-yellow-700 h-1 rounded-sm w-[56%]" />
          </div>
          <div className="flex flex-col md:gap-10 gap-20 items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-5 h-[524px] md:h-auto items-start justify-start max-w-[992px] rounded-[24px] shadow-bs w-full">
              <ProjectsAndFooterProjectnfo className="bg-white-A700 flex md:flex-1 flex-col items-center justify-center p-[38px] sm:px-5 w-1/2 md:w-full" />
              <Img
                className="md:flex-1 h-[524px] sm:h-auto object-cover w-[496px] md:w-full"
                src="images/img_pexelsellyfairytale3823207.png"
                alt="pexelsellyfairy"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 h-[524px] md:h-auto items-start justify-start rounded-[24px] shadow-bs w-auto md:w-full">
              <Img
                className="h-[524px] sm:h-auto object-cover w-[496px] md:w-full"
                src="images/img_rectangle7.png"
                alt="rectangleSeven"
              />
              <ProjectsAndFooterProjectnfo
                className="bg-white-A700 flex flex-col items-center justify-center p-[38px] sm:px-5 w-1/2 md:w-full"
                projectdescription="What was your role, your deliverables, if the project was personal, freelancing."
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 h-[524px] md:h-auto items-start justify-start rounded-[24px] shadow-bs w-auto md:w-full">
              <ProjectsAndFooterProjectnfo
                className="bg-white-A700 flex flex-col items-center justify-center p-[38px] sm:px-5 w-1/2 md:w-full"
                projectdescription="You can also add in this description the type of the project, if it was for web, mobile, electron."
              />
              <Img
                className="h-[524px] sm:h-auto object-cover w-[496px] md:w-full"
                src="images/img_rectangle7_524x496.png"
                alt="rectangleSeven_One"
              />
            </div>
          </div>
        </div>
        <div id= "ContactSection" className="font-nunito h-[162px] md:h-[235px] mt-[124px] md:px-5 relative w-full">
          <Img
            className="absolute bottom-[0] h-[111px] inset-x-[0] mx-auto"
            src="images/img_vector.svg"
            alt="vector"
          />
          <ProjectsAndFooterFootericons className="absolute flex flex-col gap-8 items-center justify-center left-[36%] top-[0] w-auto" />
        </div>
      </div>
    </>
  );
};

export default ProjectsandfooterPage;
