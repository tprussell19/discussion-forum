import React from 'react';
import PropTypes from 'prop-types';

import Header from './../components/Header';
import EntryList from './../components/Entries/EntryList';
import ReusableEntryForm from './../components/Entries/ReusableEntryForm';

function Tabletop(props) {
  return(
    <div className='container'>
      <Header title='Tabletop' />
      <div className='flex flex-row new-entry-container'>
        <ReusableEntryForm formSubmissionHandler={props.addOrEditEntry} category="tabletop" />
      </div>
      <EntryList category="Tabletop" entries={props.entries} />
    </div>
  )
}

Tabletop.propTypes = {
  entries: PropTypes.array,
  addOrEditEntry: PropTypes.func.isRequired
}

export default Tabletop;
