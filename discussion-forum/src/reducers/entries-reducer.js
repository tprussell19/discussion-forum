import { entries as defaultEntriesState } from './../defaultState.json';

const entriesReducer = (state = defaultEntriesState, action) => {
  const { title, category, body, votes, id } = action;
  switch (action.type) {
    case 'ADD_ENTRY':
      return Object.assign({}, state, {
        title: title,
        category: category,
        body: body,
        votes: votes,
        id: id
      });
    case 'UPDATE_ENTRY':
      // filter and copy all but the updated item
      const allEntriesExceptTheUpdatedOne = state.filter(item => item.id !== id)
      // add the updated item and return
      const updatedEntry = {
        title: title,
        category: category,
        body: body,
        votes: votes,
        id: id
      }
      allEntriesExceptTheUpdatedOne.unshift(updatedEntry);
      return allEntriesExceptTheUpdatedOne;
    case 'DELETE_ENTRY':
      return state.filter(element => element.id !== action.id)
    default:
      return state;
  }
};

export default entriesReducer;
