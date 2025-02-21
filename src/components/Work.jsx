import React from 'react'
import ProjectCard from "./ProjectCard";

const works = [
    {
        imgSrc: '',
        title: 'Project Nicholas',
        tags: ["E-commerce", "Full Stack"]
    },
    {
        imgSrc: '',
        title: 'eBeauty',
        tags: ["E-commerce", "Full Stack"]
    },
    {
        imgSrc: '',
        title: 'FinanceBuddy',
        tags: ["CRUD", "Java"]
    }
];

const Work = () => {
  return (
    <section id="work" className="section">
        <div className="container">
            <h2 className="headline-2 mb-8">
                My Portfolio Highlights
            </h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({ imgSrc, title, tags }, key) => (
                    <ProjectCard
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags} 
                    />
                ))}
            </div>


        </div>
    </section>
  )
}

export default Work
