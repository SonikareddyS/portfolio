import React from "react";

// Import certificate images
import cert1 from "../assets/cert1.jpg";
import cert2 from "../assets/cert2.jpg";
import cert3 from "../assets/cert3.jpg";
import cert4 from "../assets/cert4.jpg";
import cert5 from "../assets/cert5.jpg";
import cert6 from "../assets/cert6.jpg";
import cert7 from "../assets/cert7.jpg";
import cert8 from "../assets/cert8.jpg";

// Import badge images
import badge1 from "../assets/badge1.jpg";
import badge2 from "../assets/badge2.jpg";
import badge3 from "../assets/badge3.jpg";
import badge4 from "../assets/badge4.jpg";
import badge5 from "../assets/badge5.jpg";

const certificatesData = [
  { id: 1, title: "Postman API Fundamentals", issuer: "Postman", image: cert1, color: "#3b82f6" },
  { id: 2, title: "Fundamentals of Web Apps", issuer: "IBM SkillBuild", image: cert2, color: "#ef4444" },
  { id: 3, title: "GitHub", issuer: "IBM SkillBuild", image: cert3, color: "#f59e0b" },
  { id: 4, title: "Hackerrank Basic", issuer: "Hackerrank", image: cert4, color: "#10b981" },
  { id: 5, title: "AI Tools Workshop", issuer: "AICTC", image: cert5, color: "#8b5cf6" },
  { id: 6, title: "InternPE Internship - Web Development", issuer: "InternPE", image: cert6, color: "#f97316" },
  { id: 7, title: "AI Fundamentals Associate", issuer: "Oracle", image: cert7, color: "#06b6d4" },
  { id: 8, title: "Databases and SQL", issuer: "Infosys", image: cert8, color: "#84cc16" },
];

const badgesData = [
  { id: 1, image: badge1, title: "Badge 1" },
  { id: 2, image: badge2, title: "Badge 2" },
  { id: 3, image: badge3, title: "Badge 3" },
  { id: 4, image: badge4, title: "Badge 4" },
  { id: 5, image: badge5, title: "Badge 5" },
];

export const Certificates = () => {
  return (
    <section id="certificates" className="py-24 px-4 bg-background text-foreground">
      <div className="container mx-auto max-w-6xl">
        {/* Certificates */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Certificates</h2>
        <div className="flex space-x-6 overflow-x-auto pb-6">
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              className="flex-shrink-0 w-80 bg-card rounded-lg shadow-lg p-6 flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-300"
              style={{ borderTop: `6px solid ${cert.color}` }}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-72 object-cover rounded-md border shadow-sm"
              />
              <h3 className="text-lg font-semibold text-center">{cert.title}</h3>
              <span
                className="px-4 py-1 rounded-full text-white text-xs font-medium"
                style={{ backgroundColor: cert.color }}
              >
                {cert.issuer}
              </span>
            </div>
          ))}
        </div>

        {/* Badges */}
        <h2 className="text-3xl md:text-4xl font-bold mt-20 mb-12 text-center">Badges</h2>
        <div className="flex space-x-6 justify-center flex-wrap gap-6">
          {badgesData.map((badge) => (
            <div
              key={badge.id}
              className="w-44 h-44 bg-card rounded-lg shadow-md flex items-center justify-center p-3 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={badge.image}
                alt={badge.title}
                className="w-full h-full object-contain rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
