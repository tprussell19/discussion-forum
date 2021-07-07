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
    default:
      return state;
  }
};

export default entriesReducer;
