import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch(); 

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask('');                                   // Setting input value to empty after adding task
    }                                              
  };

  return (
    <div className="input-group mb-4">
      <input                                                
        type="text"
        className="form-control p-2 rounded-3"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />                                              {/* Taking inputs of the task */}
      <div className="input-group-append">
        <button className="btn btn-primary ms-4 p-2 rounded-3" onClick={handleAddTask}>Add Task</button>  {/*Button to add tasks in the list */}
      </div>
    </div>
  );
};

export default TaskInput;
