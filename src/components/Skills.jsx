import React from 'react'
import SkillCard from "./SkillCard";

const skillItems = [
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Coding Language"
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface"
  },
  {
    imgSrc: "/images/tailwind.svg",
    label: "Tailwind CSS",
    desc: "User Interface"
  },
  {
    imgSrc: "/images/html.svg",
    label: "HTML",
    desc: "Web Design"
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Frontend Framework"
  },
  {
    imgSrc: "/images/angular.svg",
    label: "Angular",
    desc: "Frontend Framework"
  },
  {
    imgSrc: "/images/spring-boot.svg",
    label: "Spring Boot",
    desc: "Java Framework"
  },
  {
    imgSrc: "/images/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework"
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server"
  },
  {
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database"
  },
  {
    imgSrc: "/images/aws.svg",
    label: "AWS",
    desc: "Cloud Computing"
  },
  {
    imgSrc: "/images/mysql-logo.svg",
    label: "MySQL",
    desc: "Database"
  },
  {
    imgSrc: "/images/java.svg",
    label: "Java",
    desc: "Coding Language"
  },
  {
    imgSrc: "/images/python.svg",
    label: "Python",
    desc: "Coding Language"
  },
  {
    imgSrc: "/images/c-1.svg",
    label: "C",
    desc: "Coding Language"
  },

];

const Skills = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">
          Tools I Am Familiar With
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          These are the tools I always use and am extremely fluent in to be able to create and design high-functioning webpages.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            skillItems.map(({ imgSrc, label, desc }, key) => (
              <SkillCard 
                key={key}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                classes="reveal-up"
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Skills
