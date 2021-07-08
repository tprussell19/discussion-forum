import React from 'react';
import PropTypes from 'prop-types';

import Header from './../components/Header';
import EntryList from './../components/Entries/EntryList';
import ReusableEntryForm from './../components/Entries/ReusableEntryForm';

function Mobile(props) {
  return(
    <div className='container'>
    <Header title='Mobile' />
    <div className='flex flex-row new-entry-container'>
        <ReusableEntryForm formSubmissionHandler={props.addOrEditEntry} category="mobile" />
      </div>
    <EntryList category="Mobile" entries={props.entries} />
    </div>
  )
}

Mobile.propTypes = {
  entries: PropTypes.array,
  addOrEditEntry: PropTypes.func.isRequired
}

export default Mobile;
