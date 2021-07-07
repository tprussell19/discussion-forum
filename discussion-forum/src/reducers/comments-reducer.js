import { comments as defaultCommentsState } from './../defaultState.json'

const commentsReducer = (state = defaultEntriesState, action) => {
  const { user, comment, entryId, id } = action;

  switch (action.type) {
    case 'ADD_COMMENT':
      const newComment = {
        user: action.user,
        comment: action.comment,
        entryId: action.entryId,
        id: action.id
      }
      return state.concat(newComment)
    case 'UPDATE_COMMENT':
      const allCommentsExceptTheUpdatedOne = state.filter(item => item.id !== id)
      const updatedComment = {
        user: user,
        comment: comment,
        entryId: entryId,
        id: id
      }
      // allCommentsExceptTheUpdatedOne.unshift(updatedComment);
      return allCommentsExceptTheUpdatedOne.concat(updatedComment);
    case 'DELETE_COMMENT':
      return state.filter(comment => comment.id !== action.id)
    default:
      return state;
  }
}

export default commentsReducer;
