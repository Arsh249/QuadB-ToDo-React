import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa'; 

const TaskItem = ({ task, index, onDelete, onEdit, onToggleCompletion }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.text);

  const handleEdit = () => {
    onEdit(task.id, editedTask);
    setIsEditing(false);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center mb-4 rounded-5"> 
      <div className="d-flex align-items-center">
        <span className="m-2">{index + 1}.</span> 
        {isEditing ? (
          <input
            type="text"
            className="form-control"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)} 
          />                                                      // Input box will pop up after clicking edit button to edit task.
        ) : (
          <span className={task.completed ? 'completed-text' : ''}>{task.text}</span>
        )}                               
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleCompletion(task.id)}
          className="m-2" 
        />                                                     {/* Checkbox for toggling task completion */}
      </div>
      <div className="d-flex align-items-center">
      {task.completed && <FaCheckCircle className="text-success mx-2" />} 
        {isEditing ? (
          <button className="btn btn-success btn-sm mx-2 px-3" onClick={handleEdit}>Save</button> 
        ) : (
          <button className="btn btn-info text-white btn-sm mx-2 px-3" onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button className="btn btn-danger btn-sm mx-2" onClick={() => onDelete(task.id)}>Delete</button> 
                                                       {/*Edit, Delete and Save button, Save button will appear if we click on Edit button */}
      </div>
    </li>
  );
};

export default TaskItem;
