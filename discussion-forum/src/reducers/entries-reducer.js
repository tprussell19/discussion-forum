import { entries as defaultEntriesState } from './../defaultEntries.json';

const entriesReducer = (state = defaultEntriesState, action) => {
  const { title, board, body, votes, comments, id } = action;
  switch (action.type) {
    case 'ADD_ENTRY':
      return Object.assign({}, state, {
        title: title,
        board: board,
        body: body,
        votes: votes,
        comments: comments,
        id: id
      });
    case 'UPDATE_ENTRY':
      // filter and copy all but the updated item
      const allEntriesExceptTheUpdatedOne = state.filter(item => item.id !== id)
      // add the updated item and return
      const updatedEntry = {
        title: title,
        board: board,
        body: body,
        votes: votes,
        comments: comments,
        id: id
      }
      allEntriesExceptTheUpdatedOne.unshift(updatedEntry);
      return allEntriesExceptTheUpdatedOne;
    default:
      return state;
  }
};

export default entriesReducer;
