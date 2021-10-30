import {FilterValuesType} from "../App";


export const FilterReducer = (state: FilterValuesType, action: changeFilterACType) => {
  switch (action.type) {
    case 'CHANGE_FILTER': {
      const newState = action.value
      return newState
    }
    default:
      return state
  }
}

type changeFilterACType = ReturnType<typeof changeFilterAC>

export const changeFilterAC = (value: FilterValuesType) => {
  return {
    type: 'CHANGE_FILTER', value
  } as const
}