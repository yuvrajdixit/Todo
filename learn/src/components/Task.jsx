import React, {useState} from 'react';

const Task = () =>{

  const [Tasks, setTasks] = useState([
    {id: Date.now(), task:"go to gym"},

  ]);


  const [newtask, setNewtask] = useState('');

  const handleChange = (e) =>{
    setNewtask(e.target.value);
  }

  const Add = () =>{
    if(newtask !== ''){
    
    setTasks([...Tasks, {
      id: Date.now(), task: newtask
    }])}

    setNewtask('')
  }

  const Delete = (id) =>{
    const updatedtasks = Tasks.filter(task => task.id !== id);
    setTasks(updatedtasks);
  }
  

  return(
    <div className='Task'>
      <h2>Task manager</h2>
      <div className='Input'>
      <input 
      name='task'
      value={newtask}
      placeholder='Enter new task'
      onChange={handleChange}
      ></input>
      <button onClick={Add}>Add</button>
       </div>
      <ul>
        {Tasks.map(task =>(
          <div className='list'>
          <li key={task.id}>{task.task}</li>   <button onClick={() => Delete(task.id)}>Delete</button>
        </div>))}
      </ul>
    </div>
  )
}
export default Task