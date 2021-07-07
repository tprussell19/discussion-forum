import entriesReducer from "./../../reducers/entries-reducer.js";
import { entries as defaultEntriesState } from './../../defaultEntries.json';

describe('entriesReducer', () => {
  test('should return empty state when passed empty state', () => {
    expect(entriesReducer({}, {})).toEqual({});
  });

  test('should return default state when passed default', () => {
    expect(entriesReducer(defaultEntriesState, {})).toEqual(defaultEntriesState);
  });
})

