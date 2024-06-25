import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTaskCompletion } from '../redux/actions';
import TaskItem from './TaskItem';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEdit = (id, updatedTask) => {
    dispatch(editTask(id, updatedTask));
  };

  const handleToggleCompletion = (id) => {
    dispatch(toggleTaskCompletion(id));
  };

  return (                                                // Rendering the list of tasks.
    <ul className="list-group">
      {tasks.map((task, index) => (
        <TaskItem                                                  
          key={task.id}
          task={task}
          index={index}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onToggleCompletion={handleToggleCompletion}
        />
      ))}
    </ul>
  );
};

export default TaskList;
