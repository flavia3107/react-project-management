import NewTask from "./NewTask.jsx";

export default function Tasks({onAddTask, onDeleteTask, tasks}){
    return <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <NewTask onAddTask={onAddTask} onDeleteTask={onDeleteTask}/>
        {tasks.length ? 
            (<ul className="p-4 mt-8 flex flex-col gap-2">
                {tasks.map(task => 
                <li className="flex justify-between my-1 rounded-md bg-stone-100 py-4 px-4" key={task.id}>
                     <span>{task.text}</span> 
                     <button className="text-stone-700 hover:text-red-500" onClick={() => onDeleteTask(task.id)}>Clear</button>
                </li>)}
            </ul>) :  
            <p className="text-stone-800 my-4">This project does not have any tasks yet.</p>
        }
    </section>
}