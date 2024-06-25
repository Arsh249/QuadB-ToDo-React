export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const TOGGLE_TASK_COMPLETION = 'TOGGLE_TASK_COMPLETION';

export const addTask = (task) => ({                   // action to add task
  type: ADD_TASK,
  payload: task
});

export const deleteTask = (id) => ({                  // action to delete task
  type: DELETE_TASK,
  payload: id
});

export const editTask = (id, updatedTask) => ({        // action to edit task
  type: EDIT_TASK,
  payload: { id, updatedTask }
});

export const toggleTaskCompletion = (id) => ({         // action to toggle task completion
  type: TOGGLE_TASK_COMPLETION,
  payload: id
});
