import NewProject from "./components/NewProject.jsx";
import ProjectsSidebars from "./components/ProjectsSidebar.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
     <ProjectsSidebars/>
     <NoProjectSelected/>
    </main>
  );
}

export default App;
