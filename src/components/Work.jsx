import React from 'react'
import ProjectCard from "./ProjectCard";

const works = [
    {
        imgSrc: '/images/proj-nicholas.png',
        title: 'Project Nicholas',
        tags: ["E-commerce", "Full Stack"],
        projectLink: "https://github.com/limlei2/project-nicholas/tree/main"
    },
    {
        imgSrc: '',
        title: 'eBeauty',
        tags: ["E-commerce", "Full Stack"],
        projectLink: "https://github.com/limlei2/finalprojects22-ebeauty/tree/main"
    },
    {
        imgSrc: '',
        title: 'FinanceBuddy',
        tags: ["CRUD", "Java"],
        projectLink: ""
    }
];

const Work = () => {
  return (
    <section id="work" className="section">
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                My Portfolio Highlights
            </h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                    <ProjectCard
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                        classes="reveal-up"
                    />
                ))}
            </div>


        </div>
    </section>
  )
}

export default Work
