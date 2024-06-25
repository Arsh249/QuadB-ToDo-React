import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK_COMPLETION } from './actions';

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [] // Getting the list of tasks from local Storage.
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {                                                             // Performing the action based on type of task
    case ADD_TASK:                                                                   // Adding the task
      const newTask = { id: Date.now(), text: action.payload, completed: false };
      const updatedTasks = [...state.tasks, newTask];
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));                   // Storing the tasks in local Storage
      return {...state,tasks: updatedTasks};

    case DELETE_TASK:                                                               // Deleting the task
      const filteredTasks = state.tasks.filter(task => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(filteredTasks));                 // Storing the filtered tasks in local Storage after deleting the task
      return {...state,tasks: filteredTasks};

    case EDIT_TASK:                                                                  //Editing the task
      const editedTasks = state.tasks.map(task =>
        task.id === action.payload.id ? { ...task, text: action.payload.updatedTask } : task
      );
      localStorage.setItem('tasks', JSON.stringify(editedTasks));                     // Storing the updated task in local Storage
      return {...state,tasks: editedTasks};
      
    case TOGGLE_TASK_COMPLETION:                                                      //Marking the task as completed by showing the icon
      const toggledTasks = state.tasks.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
      localStorage.setItem('tasks', JSON.stringify(toggledTasks));                    // Storing the completed task in local Storage
      return {...state,tasks: toggledTasks};
    default:
      return state;
  }
};
