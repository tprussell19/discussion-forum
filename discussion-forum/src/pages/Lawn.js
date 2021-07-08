import React from 'react';
import PropTypes from 'prop-types';

import Header from './../components/Header';
import EntryList from './../components/Entries/EntryList';
import ReusableEntryForm from './../components/Entries/ReusableEntryForm';

function Lawn(props) {
  return(
    <div className='container'>
      <Header title='Lawn' />
      <div className='flex flex-row new-entry-container'>
        <ReusableEntryForm formSubmissionHandler={props.addOrEditEntry} category="lawn" />
      </div>
      <EntryList category="Lawn" entries={props.entries} />
    </div>
  )
}

Lawn.propTypes = {
  entries: PropTypes.array,
  addOrEditEntry: PropTypes.func.isRequired
}

export default Lawn;
