import React from "react";

import ParrotSection from "../../components/Sections/ParrotSection/ParrotSection";
import TeamSection from "../../components/Sections/TeamSection/TeamSection";
import LogInSection from "../../components/Sections/LogInSection/LogInSection";
import QuestionsSection from "../../components/Sections/QuestionsSection/QuestionsSection";
import SliderSection from "../../components/Sections/SliderSection/SliderSection";

const HomePage = () => {
  const questions = [
    {
      id: "01",
      title: "What can I do to protect our planet?",
      text: "Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources",
      isOpen: false,
    },
    {
      id: "02",
      title: "How to save nature ecology?",
      text: "Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources",
      isOpen: false,
    },
    {
      id: "03",
      title: "What is nature conservation?",
      text: "Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources",
      isOpen: false,
    },
  ];

  return (
    <>
      <ParrotSection />
      <TeamSection />
      <LogInSection />
      <QuestionsSection items={questions} />
      <SliderSection />
    </>
  );
};

export default HomePage;
