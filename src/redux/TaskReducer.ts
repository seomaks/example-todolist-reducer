import {TaskType} from "../Todolist";
import {v1} from "uuid";

export const TaskReducer = (state: Array<TaskType>, action: generalType) => {
  switch (action.type) {
    case 'REMOVETASK': {
      const newState = [...state]
      return newState.filter(t => t.id != action.id)
    }
//add task
    case 'ADDTASK': {
      return [{id: v1(), title: action.title, isDone: false},...state]
    }

    // change task status
    case 'CHANGE_TASK_STATUS': {
      return state.map(s => s.id === action.taskId ? {...s, isDone: action.isDone} : s )
    }

    default:
      return state
  }
}

type generalType = removeTaskACType | addTaskACType | changeStatusACType
type removeTaskACType = ReturnType<typeof removeTaskAC>
type addTaskACType = ReturnType<typeof addTaskAC>
type changeStatusACType = ReturnType<typeof changeStatusAC>

export const removeTaskAC = (id: string) => {
  return {
    type: 'REMOVETASK',
    id: id
  } as const
}

export const addTaskAC = (title: string) => {
  return {
    type: 'ADDTASK',
    title: title
  } as const
}

export const changeStatusAC = (taskId: string, isDone: boolean) => {
  return {
    type: 'CHANGE_TASK_STATUS', taskId, isDone
  } as const
}