import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });



function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")

function handleDelete(deleteText) {
    setTasks(tasks.filter((task) => task.text !== deleteText))
}

const showTasks = tasks.filter(
  (task) => category === "All" || task.category === category
);

function handleAddTask(addTask) {
  setTasks(...tasks, addTask)
}


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories = {CATEGORIES}
      selectedCategory = {category}
      onSelectCategory = {setCategory}   
      />
      <NewTaskForm 
      categories={CATEGORIES.filter((category) => category !== "All")} 
      onTaskFormSubmit={handleAddTask}
      />
      <TaskList onDeleteTask={handleDelete} tasks={showTasks} />
    </div>
  );
}

export default App;
