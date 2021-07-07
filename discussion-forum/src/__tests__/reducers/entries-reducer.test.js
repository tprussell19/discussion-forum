import entriesReducer from "./../../reducers/entries-reducer.js";
import { entries as defaultEntriesState } from './../../defaultEntries.json';

describe('entriesReducer', () => {
  let action;
  const entry = {
    title: "test1",
    board: "test1",
    body: "test1",
    id: "test1",
    votes: 5,
    comments: []
  }

  test('should return empty state when pass ed empty state', () => {
    expect(entriesReducer({}, {})).toEqual({});
  });

  test('should return default state when passed default', () => {
    expect(entriesReducer(defaultEntriesState, {})).toEqual(defaultEntriesState);
  });

  test('should successfully add entry', () => {
    action = {
      type: "ADD_ENTRY", ...entry
    };
    expect(entriesReducer(defaultEntriesState, action)).toEqual({...defaultEntriesState, ...entry})
  })
})

