import NewProject from "./components/NewProject.jsx";
import ProjectsSidebars from "./components/ProjectsSidebar.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import { useState } from 'react';
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(text){
   setProjectState(prevState => {
      const newTask = {
          id:Math.random(),
          text:text, 
          projectId: prevState.selectedProjectId
        };
     
        return {
        ...prevState, 
        tasks: [...prevState.tasks, newTask]
      };
    });
  }

  function handleDeleteTask(){

  }

  function createNewProject(){
   setProjectState(prevState => ({...prevState, selectedProjectId: null}));
  }

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);
  let content = <SelectedProject project={selectedProject} 
  onDelete={handleDeleteProject}
  onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectState.tasks}
  />;

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
	  setProjectState(prevState => ({...prevState, selectedProjectId: undefined}));
  }

  function handleSelectProject(id){
	  setProjectState(prevState => ({...prevState, selectedProjectId: id}));
  }

  function handleDeleteProject(){
    	  setProjectState(prevState => ({
          ...prevState, 
          selectedProjectId: undefined,
          projects: prevState.projects.filter(project => project.id !== prevState.selectedProjectId)
        }));
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebars 
      onCreateNewProject={createNewProject} 
      onSelectProject={handleSelectProject}
      projects={projectState.projects}/>
      {content}
    </main>
  );
}

export default App;

/**
 * Prop drilling => passing value from parent to nested component to nested component, like a chain
 */