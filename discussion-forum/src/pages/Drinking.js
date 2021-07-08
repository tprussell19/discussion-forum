import React from 'react';
import PropTypes from 'prop-types';

import Header from './../components/Header';
import EntryList from './../components/Entries/EntryList';
import ReusableEntryForm from './../components/Entries/ReusableEntryForm';

function Drinking(props) {
  return(
    <div className='container'>
      <Header title='Drinking' />
      <div className='flex flex-row new-entry-container'>
        <ReusableEntryForm formSubmissionHandler={props.addOrEditEntry} category="drinking" />
      </div>
      <EntryList category="Drinking" entries={props.entries} />
    </div>
  )
}

Drinking.propTypes = {
  entries: PropTypes.array,
  addOrEditEntry: PropTypes.func.isRequired
}

export default Drinking;
