import React, { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const educationData = [
    {
      id: 1,
      title: "Bachelor of Engineering",
      place: "Dayananda Sagar Academy of Technology and Management, Bengaluru",
      year: "2023 – 2027",
      description:
        "Specialization in Information Science Engineering. Focused on web development, data structures, and software engineering.",
    },
    {
      id: 2,
      title: "Pre-University (PU)",
      place: "Sri Chaitanya Girls PU College, Bellari",
      year: "2021 – 2023",
      description:
        "Completed higher secondary education with majors in Mathematics, Physics, Chemistry, and Biology.",
    },
    {
      id: 3,
      title: "High School",
      place: "Holy Cross School, Bellari",
      year: "2020 – 2021",
      description:
        "Completed school education with excellent academic performance (scored 93%) and active participation in co-curriculars.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="education" className="py-24 px-4 bg-background text-foreground">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Education
        </h2>

        <div className="space-y-4">
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              className="bg-card border border-primary/40 rounded-lg shadow-md overflow-hidden"
            >
              {/* Accordion Header */}
              <button
                className={`flex justify-between items-center w-full px-6 py-4 text-left font-semibold text-lg transition-colors ${
                  activeIndex === index ? "bg-primary/10" : "hover:bg-primary/5"
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center gap-4">
                  <FaGraduationCap className="text-primary h-6 w-6" />
                  <span>{edu.title}</span>
                </div>
                <span className="text-primary">
                  {activeIndex === index ? (
                    <FiMinus className="h-6 w-6" />
                  ) : (
                    <FiPlus className="h-6 w-6" />
                  )}
                </span>
              </button>

              {/* Accordion Content */}
              <div
                className={`px-6 pb-4 text-muted-foreground transition-all duration-300 ease-in-out ${
                  activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <p className="font-medium">{edu.place}</p>
                <p className="text-sm text-primary">{edu.year}</p>
                <p className="mt-2">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Education };
