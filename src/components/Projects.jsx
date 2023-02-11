import React from 'react';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id="projects" className="w-full py-16">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase tracking-widest text-xl text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-3 gap-10 items-center justify-evenly px-16'>
         <ProjectItem
            title='Google Clone'
            desc="It's a google search clone"
            tech='React JS,Tailwind CSS,TypeScript'
          />
          
            <ProjectItem
            title='Tic-Tac-Toe'
            desc='Interesting Game'
            tech='React JS'
          />
           
            <ProjectItem
            title='Calculator'
            desc='Simple calculator using Vanilla JS'
            tech='HTML,CSS,JavaScript, React'
          />
           <ProjectItem
            title=' Todo App'
            desc = 'Marketing the Crypto Ape through Blockchain Tech.'
            tech='React JS,Third Web 3.0'
          />
          <ProjectItem
            title='Drag and Drop Todo List'
            desc = "It's for listing the task you have and the completed task can be dragged to completed list"
            tech='HTML,CSS,JavaScript React'
          />
          <ProjectItem
            title=' Rock Paper Scissor'
            desc = 'Keeping the child hood memories for the future'
            tech='HTML,CSS,JavaScript, React'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
