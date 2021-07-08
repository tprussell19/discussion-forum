import React from 'react';
import PropTypes from 'prop-types';

import Header from './../components/Header';
import EntryList from './../components/Entries/EntryList';
import ReusableEntryForm from './../components/Entries/ReusableEntryForm';

function Board(props) {
  return(
    <div className='container'>
      <Header title='Board' />
      <div className='flex flex-row new-entry-container'>
        <ReusableEntryForm />
      </div>
      <EntryList category="Board" entries={props.entries} />
    </div>
  )
}

Board.propTypes = {
  entries: PropTypes.array
}

export default Board;
