import React from 'react';
import PropTypes from 'prop-types';

import Header from './../components/Header';
import EntryList from './../components/Entries/EntryList';
import ReusableEntryForm from './../components/Entries/ReusableEntryForm';

function Video(props) {
  return(
    <div className='container'>
    <Header title='Video' />
    <div className='flex flex-row new-entry-container'>
      <ReusableEntryForm formSubmissionHandler={props.addOrEditEntry} category="video" />
    </div>
    <EntryList category="Video" entries={props.entries} />
    </div>
  )
}

Video.propTypes = {
  entries: PropTypes.array,
  addOrEditEntry: PropTypes.func.isRequired
}

export default Video;
