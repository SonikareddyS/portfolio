import { Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Web Developer Intern",
    place: "InternPE",
    year: "August 2025 – September 2025",
    description:
      "Worked on building responsive UI components using React and integrated APIs for dynamic data rendering.",
  },
  {
    id: 2,
    title: "Hackathon Participant",
    place: "Cyber Quest",
    year: "September 2025",
    description:
      "Built a project Intrusion Detection System using Python, cyber attacks prototype in under 24 hours with a team of 4. Focused on problem-solving, teamwork, and rapid development.",
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-24 px-4 text-foreground"
    >
      {/* Transparent overlay for readability */}
      <div className="absolute inset-0 bg-black/40 -z-10"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Experience
        </h2>

        <div className="relative">
          {/* Central vertical line */}
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-1 bg-primary/50"></div>

          {experiences.map((exp, index) => (
            <div key={exp.id} className="mb-12 flex w-full relative">
              {/* Left side content */}
              {index % 2 === 0 ? (
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-lg p-6 shadow-md inline-block">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="font-medium">{exp.place}</p>
                    <p className="text-sm text-muted-foreground">{exp.year}</p>
                    <p className="mt-2 text-muted-foreground">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="w-1/2 pl-8 text-left">
                  <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-lg p-6 shadow-md inline-block">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="font-medium">{exp.place}</p>
                    <p className="text-sm text-muted-foreground">{exp.year}</p>
                    <p className="mt-2 text-muted-foreground">
                      {exp.description}
                    </p>
                  </div>
                </div>
              )}

              {/* Timeline circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center z-10 shadow-lg">
                <Briefcase size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
