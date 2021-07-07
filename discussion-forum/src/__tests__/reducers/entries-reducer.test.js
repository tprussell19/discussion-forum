import entriesReducer from "./../../reducers/entries-reducer.js";
import { entries as defaultEntriesStateArray } from './../../defaultEntries.json';

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
    expect(entriesReducer(defaultEntriesStateArray, {})).toEqual(defaultEntriesStateArray);
  });

  test('should successfully add entry', () => {
    action = {
      type: "ADD_ENTRY", ...entry
    };
    expect(entriesReducer(defaultEntriesStateArray, action)).toEqual({...defaultEntriesStateArray, ...entry})
  });

  test('should update an entry successfully', () => {
    // copy default entries
    const entriesCopy =  [...defaultEntriesStateArray];
    // remove the first element
    const changedEntry = entriesCopy.shift();
    // make a change
    changedEntry.title = "test2"
    // create the action
    const action = {
      type: "UPDATE_ENTRY",
      ...changedEntry
    }
    // update entry
    expect(entriesReducer(defaultEntriesStateArray, action)).toEqual([changedEntry, ...entriesCopy])
  })
})

