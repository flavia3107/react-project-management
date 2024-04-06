import NewProject from "./components/NewProject.jsx";
import ProjectsSidebars from "./components/ProjectsSidebar.jsx";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
     <ProjectsSidebars/>
     <NewProject/>
    </main>
  );
}

export default App;
