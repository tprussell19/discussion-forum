import commentsReducer from "./../../reducers/comments-reducer.js";
import { comments as defaultCommentsStateArray } from './../../defaultState.json';

describe('commentsReducer', () => {
  let action, comments;

  const testComment = {
    user: 'Steve',
    comment: 'hey im Steve',
    id: '293847-adsfidf',
    entryId: '1234-abcd'
  }

  const existingDefaultComment = {
    user: "stacy",
    comment: "have the ibuprofen ready",
    id: "iuwe923b",
    entryId: "232"
  }

  test('should return empty state when passed empty state', () => {
    expect(commentsReducer(defaultCommentsStateArray, {})).toEqual(defaultCommentsStateArray);
  })

  test('should successfully add a comment', () => {
    const { user, comment, entryId, id } = testComment;
    action = {
      type: "ADD_COMMENT",
      user: user,
      comment: comment,
      id: id,
      entryId: entryId
    };
    const allComments = defaultCommentsStateArray.concat(testComment);
    expect(commentsReducer(defaultCommentsStateArray, action)).toEqual(allComments)
  })

  test('should update a comment successfully', () => {
    const commentsCopy = defaultCommentsStateArray.filter(item => item.id !== existingDefaultComment.id);
    const changedComment = existingDefaultComment;
    changedComment.comment = "have the ibuprofen and pedialyte ready"
    action = {
      type: "UPDATE_COMMENT",
      ...changedComment
    }
    expect(commentsReducer(defaultCommentsStateArray, action)).toEqual([...commentsCopy, changedComment])
  })

  test('should successfully delete comment', () => {
    const commentToDelete = defaultCommentsStateArray[0]
    action = {
      type: "DELETE_COMMENT", ...commentToDelete
    }
    const result = defaultCommentsStateArray.filter(comment => comment.id !== commentToDelete.id)
    expect(commentsReducer(defaultCommentsStateArray, action)).toEqual(result)
  });

})
