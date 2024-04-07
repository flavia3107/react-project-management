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
    content = <NewProject/>
  } else if (projectState.selectedProjectId === undefined){
	content = <NoProjectSelected onCreateNewProject={createNewProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
     <ProjectsSidebars onCreateNewProject={createNewProject}/>
	 {content}
    </main>
  );
}

export default App;
