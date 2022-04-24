import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [category, setCategory] = useState("Code")
  const [text, setText] = useState("")
  
  
  // const categoryMap = categories.map((category) => {  
  //   if (category !== "All") {    
  //   return(
  //     <option key={category}>
  //         {category}
  //     </option>
  //   )}
  // })
  
  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit({text, category})
    setText("")
    setCategory("Code")
  }

  
  
  
  
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" value={text} onChange = {(event) => setText(event.target.value)}/>
      </label>
      <label>
        Category
        <select value={category} onChange = {(event) => setCategory(event.target.value)}>
          {categories.map((category) => 
            <option key={category}> {category} </option>
        )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
