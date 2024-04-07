import NewProject from "./components/NewProject.jsx";
import ProjectsSidebars from "./components/ProjectsSidebar.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import { useState } from 'react';

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function createNewProject(){
   setProjectState(prevState => ({...prevState, selectedProjectId: null}));
  }

  let content;
  if(projectState.selectedProjectId === null){
    content = <NewProject onSave={handleAddProject} onCancel={handleCancel}/>
  } else if (projectState.selectedProjectId === undefined){
	content = <NoProjectSelected onCreateNewProject={createNewProject}/>
  }

  function handleAddProject(projectData){
	setProjectState(prevState => {
		const newProject = {...projectData, id: Math.random()};
		return {
			...prevState, 
			selectedProjectId: undefined,
			projects: [...prevState.projects, newProject]
		};
	});
  }

  function handleCancel(){
	setProjectState(prevState => ({...prevState, selectedProjectId: undefined}))
  }

  return (
    <main className="h-screen my-8 flex gap-8">
     <ProjectsSidebars onCreateNewProject={createNewProject} projects={projectState.projects}/>
	 {content}
    </main>
  );
}

export default App;
