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
    if(text.trim()){
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
  }

  function handleDeleteTask(taskId){
	  setProjectState(prevState => ({
          ...prevState, 
          tasks: prevState.tasks.filter(task => task.id !== taskId)
        }));
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
      projects={projectState.projects}
      selectedProjectId={projectState.selectedProjectId}/>
      {content}
    </main>
  );
}

export default App;

/**
 * Prop drilling => passing value from parent to nested component to nested component, like a chain
 */

/**
 * TO DO
 * 1. Overall styling
 * 2. Store data in localstorage
 * 3. Show list of projects in a main view -> Put the add button there
 * 4. Options to view the list: grid or list
 * 5. Better project details view
 * 6. Open / close sidebar
 * 7. Add some images as placeholders


  Key Features:

  Project Creation: Users can create new projects by providing a title and description. 
  Upon creation, these projects are listed for easy access.

  Task Management: Within each project, users can add tasks with details such as task name, description, priority, and deadline. 
  Tasks can be marked as completed when finished.

  Deadline Tracking: The app highlights upcoming task deadlines, ensuring users stay informed about pending tasks.

  Task Filtering: Users can filter tasks based on priority, completion status, or deadline to focus on specific aspects of their projects.

  Project Overview: A dashboard provides a summary of ongoing projects, their progress, and pending tasks. 
  This overview helps users stay organized and prioritize their work effectively.

  Technology Stack:
  React: Used for building the user interface and managing component-based architecture.
  State Management (e.g., React Context or Redux): Employed to manage application-wide state, including project and task data.
  CSS Framework (e.g., Bootstrap, Material-UI): Utilized for styling and ensuring a consistent and visually appealing user interface.

  Potential Enhancements:

  User Authentication: Implement authentication features to allow users to sign in, access their projects securely, 
  and collaborate with team members.

  Task Assignment: Enable users to assign tasks to specific team members, facilitating better coordination and accountability.

  Notifications: Incorporate notifications for task deadlines, project updates, or mentions, ensuring users stay informed and responsive.

  Project Timeline: Integrate a timeline view to visualize project progress, milestones, and dependencies, 
  offering a comprehensive overview of project timelines.

  Data Persistence: Implement backend services or database integration to persist project and task data, 
  allowing users to access their information across sessions and devices.
 */