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
            projectUrl='https://google-shahith.netlify.app/'
            git="https://github.com/Shahithraj/Google-clone-tailwind-css"
            tech='React JS,Tailwind CSS,TypeScript'
          />
          
            <ProjectItem
            title='Tic-Tac-Toe'
            desc='Interesting Game'
            projectUrl='https://tic-tac-toe-shahith.netlify.app/'
            git="https://github.com/Shahithraj/tic-tac-toe-React"
            tech='React JS'
          />
           
            <ProjectItem
            title='Calculator'
            desc='Simple calculator using Vanilla JS'
            git="https://github.com/Shahithraj/Calculator"
            projectUrl='https://flamboyant-hermann-fc04e4.netlify.app/'
            tech='HTML,CSS,JavaScript'
          />
           <ProjectItem
            title=' Cryto Web'
            desc = 'Marketing the Crypto Ape through Blockchain Tech.'
            projectUrl='https://crytoape-thirdweb-clone.netlify.app'
            git="https://github.com/Shahithraj/crytoape-thirdweb-clone"
            tech='React JS,Third Web 3.0'
          />
          <ProjectItem
            title='Drag and Drop Todo List'
            desc = "It's for listing the task you have and the completed task can be dragged to completed list"
            projectUrl='https://react-todo-shahith.netlify.app/'
            git="https://github.com/Shahithraj/react-typescript-todo"
            tech='HTML,CSS,JavaScript'
          />
          <ProjectItem
            title=' Rock Paper Scissor'
            desc = 'Keeping the child hood memories for the future'
            projectUrl='https://resilient-nasturtium-4a7186.netlify.app'
            git="https://github.com/Shahithraj/Rock-Paper-Scissor"
            tech='HTML,CSS,JavaScript'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
